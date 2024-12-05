import useSWR from "swr";
import Error from "next/error";
import Link from "next/link";
import { Card, Button } from "react-bootstrap";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ArtworkCard({ objectID }) {
  const { data, error } = useSWR(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`,
    fetcher
  );

  if (error) return <Error statusCode={404} />;
  if (!data || data.length === 0) return null;

  const image = data.primaryImageSmall || 'https://via.placeholder.com/375x375.png?text=[+Not+Available+]';
  const title = data.title || 'N/A';
  const date = data.objectDate || 'N/A';
  const classification = data.classification || 'N/A';
  const medium = data.medium || 'N/A';  

  return (
    <Card >
      <Card.Img className="card-image" variant="top" src={image} />
      <Card.Body>
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Text>
          <strong>Date:</strong> {date} <br />
          <strong>Classification:</strong> {classification} <br />
          <strong>Medium:</strong> {medium}
        </Card.Text>
        <Link href={`/artwork/${objectID}`} passHref legacyBehavior>
          <Button variant="primary">{objectID}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

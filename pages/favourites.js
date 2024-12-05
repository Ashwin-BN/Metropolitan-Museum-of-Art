import { useAtom } from "jotai";
import { favouritesAtom } from "@/store";
import ArtworkCard from '@/components/ArtworkCard';
import { Row, Col} from 'react-bootstrap';

export default function Favourites() {
    const [favouritesList] = useAtom(favouritesAtom);
    
    if(!favouritesList) return null;

    return (
        <>
          {favouritesList && favouritesList.length ? (
            <Row className="gy-4">
              {favouritesList.map((objectID) => (
                <Col lg={3} md={4} sm={6} key={objectID}>
                  <ArtworkCard objectID={objectID} />
                </Col>
              ))}
            </Row>
          ) : (
            <div class="alert alert-dismissible alert-light">
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Nothing Here</p>
                <p className="text-secondary">Try adding some new artwork to the list.</p>
            </div>
          )}
          </>
    );
}

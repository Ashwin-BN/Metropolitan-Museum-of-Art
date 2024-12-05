import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { searchHistoryAtom } from "@/store";
import { ListGroup, Button } from "react-bootstrap";
import styles from "@/styles/History.module.css";
import { removeFromHistory } from "@/lib/userData";

export default function History() {
  const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom);
  const router = useRouter();
  
  if(!searchHistory) return null;

  let parsedHistory = [];
  searchHistory.forEach((h) => {
    let params = new URLSearchParams(h);
    let entries = params.entries();
    parsedHistory.push(Object.fromEntries(entries));
  });

  const historyClicked = (e, index) => {
    router.push(`/artwork?${searchHistory[index]}`);
  };

  const removeHistoryClicked = async (e, index) => {
    e.stopPropagation(); // stop the event from trigging other events
    setSearchHistory(await removeFromHistory(searchHistory[index]));
  };

  if (!parsedHistory.length) {
    return (
      <div class="alert alert-dismissible alert-light">
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "0.5rem",
          }}
        >
          Nothing Here
        </p>
        <p className="text-secondary">
          Try adding some new artwork to the list.
        </p>
      </div>
    );
  }

  return (
    <ListGroup>
      {parsedHistory.map((item, index) => {
        return (
          <ListGroup.Item className={styles.historyListItem} onClick={(e) => historyClicked(e, index)} key={index}>
            {Object.keys(item).map((key) => (<>{key}: <strong>{item[key]}</strong>&nbsp;</>))}

            <Button className="float-end" variant="danger" size="sm" onClick={(e) => removeHistoryClicked(e, index)}>
              &times;
            </Button>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}
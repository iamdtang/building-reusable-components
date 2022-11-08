import "bootstrap/dist/css/bootstrap.css";
import Rating from "./Rating";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [rating, setRating] = useState(3);

  return (
    <Rating
      rating={rating}
      onClick={(newRating) => {
        setRating(newRating);
      }}
    >
      {(isFilled, onClick) => {
        return (
          <button type="button" className="btn btn-link" onClick={onClick}>
            <FontAwesomeIcon
              icon={faStar}
              color={isFilled ? "yellow" : "#ddd"}
              size="3x"
            />
          </button>
        );
      }}
    </Rating>
  );
}

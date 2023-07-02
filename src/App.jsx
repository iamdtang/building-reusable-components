import "bootstrap/dist/css/bootstrap.css";

import StarRating from "./StarRating";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [rating, setRating] = useState(3);
  const filledColor = "yellow";
  const emptyColor = "gray";

  // renderStar is a render prop to provide customization on what star is rendered
  return (
    <div>
      <StarRating
        rating={rating}
        onStarClick={(i) => {
          setRating(i);
        }}
        renderStar={(isFilled) => {
          // return isFilled ? "★" : "☆";

          return (
            <FontAwesomeIcon
              icon={faStar}
              color={isFilled ? filledColor : emptyColor}
              size="3x"
            />
          );
        }}
      />
    </div>
  );
}

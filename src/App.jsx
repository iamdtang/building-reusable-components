import "bootstrap/dist/css/bootstrap.css";
import StarRating from "./StarRating";
import { useState } from "react";

export default function App() {
  const [rating, setRating] = useState(3);

  return (
    <div>
      <StarRating
        emptyColor="#aaa"
        filledColor="green"
        rating={rating}
        onStarClick={(i) => {
          setRating(i);
        }}
      />
    </div>
  );
}

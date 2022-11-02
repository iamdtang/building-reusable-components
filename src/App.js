import "bootstrap/dist/css/bootstrap.css";
import StarRating from "./StarRating";
import { useState } from "react";

export default function App() {
  const [rating, setRating] = useState(3);

  return (
    <StarRating
      rating={rating}
      onClick={(newRating) => {
        setRating(newRating);
      }}
    />
  );
}

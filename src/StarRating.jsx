import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function StarRating(props) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star
        i={i}
        rating={props.rating}
        onStarClick={props.onStarClick}
        key={i}
      />
    );
  }

  return <div>{stars}</div>;
}

function Star(props) {
  function handleClick() {
    props.onStarClick(props.i);
  }

  return (
    <button type="button" className="btn btn-link" onClick={handleClick}>
      <FontAwesomeIcon
        icon={faStar}
        color={props.i <= props.rating ? "yellow" : "gray"}
        size="3x"
      />
    </button>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function StarRating(props) {
  const stars = [];

  const filledColor = props.filledColor || "yellow";
  const emptyColor = props.emptyColor || "gray";

  function handleClick(i) {
    props.onStarClick(i);
  }

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <button
        type="button"
        key={i}
        className="btn btn-link"
        onClick={() => {
          handleClick(i);
        }}
      >
        <FontAwesomeIcon
          icon={faStar}
          color={i <= props.rating ? filledColor : emptyColor}
          size="3x"
        />
      </button>
    );
  }

  return <div>{stars}</div>;
}

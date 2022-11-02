import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function StarRating(props) {
  const { rating, onClick, emptyColor, filledColor, size } = props;
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star
        starNumber={i}
        rating={rating}
        key={i}
        onClick={onClick}
        emptyColor={emptyColor}
        filledColor={filledColor}
        size={size}
      />
    );
  }

  return <>{stars}</>;
}

function Star(props) {
  const {
    starNumber,
    rating,
    onClick,
    emptyColor = "#ddd",
    filledColor = "yellow",
    size = "3x",
  } = props;

  return (
    <button
      type="button"
      className="btn btn-link"
      onClick={() => {
        onClick(starNumber);
      }}
    >
      <FontAwesomeIcon
        icon={faStar}
        color={starNumber <= rating ? filledColor : emptyColor}
        size={size}
      />
    </button>
  );
}

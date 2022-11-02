import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function StarRating(props) {
  const { rating, onClick } = props;
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star starNumber={i} rating={rating} key={i} onClick={onClick} />
    );
  }

  return <>{stars}</>;
}

function Star(props) {
  const { starNumber, rating, onClick } = props;
  const emptyColor = "#ddd";
  const filledColor = "yellow";
  const size = "3x";

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

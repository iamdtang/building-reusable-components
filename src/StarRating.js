export default function StarRating(props) {
  const { rating, onClick, renderStar } = props;
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star
        starNumber={i}
        rating={rating}
        key={i}
        onClick={onClick}
        renderStar={renderStar}
      />
    );
  }

  return <>{stars}</>;
}

function Star(props) {
  const { starNumber, rating, onClick, renderStar } = props;

  const isFilled = starNumber <= rating;
  const handleClick = () => {
    onClick(starNumber);
  };

  return renderStar(isFilled, handleClick);
}

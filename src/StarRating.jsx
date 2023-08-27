export default function StarRating(props) {
  const stars = [];
  const total = props.total ?? 5;

  function handleClick(i) {
    props.onStarClick(i);
  }

  for (let i = 1; i <= total; i++) {
    const isFilled = i <= props.rating;

    stars.push(
      <button
        type="button"
        data-testid="star-button"
        key={i}
        className="btn btn-link"
        onClick={() => {
          handleClick(i);
        }}
      >
        {/* i <= props.rating ? filledColor : emptyColor */}
        <span data-testid={isFilled ? "filled-star" : "empty-star"}>
          {props.children(isFilled)}
        </span>
      </button>
    );
  }

  return <div>{stars}</div>;
}

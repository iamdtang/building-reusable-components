export default function StarRating(props) {
  const stars = [];

  function handleClick(i) {
    props.onStarClick(i);
  }

  for (let i = 1; i <= 5; i++) {
    const isFilled = i <= props.rating;

    stars.push(
      <button
        type="button"
        key={i}
        className="btn btn-link"
        onClick={() => {
          handleClick(i);
        }}
      >
        {/* i <= props.rating ? filledColor : emptyColor */}
        {props.children(isFilled)}
      </button>
    );
  }

  return <div>{stars}</div>;
}

export default function Rating(props) {
  const { rating, onClick } = props;
  const ratingItems = [];
  const renderRatingItem = props.children;

  for (let i = 1; i <= 5; i++) {
    ratingItems.push(
      <RatingItem
        itemNumber={i}
        rating={rating}
        key={i}
        onClick={onClick}
        render={renderRatingItem}
      />
    );
  }

  return <>{ratingItems}</>;
}

function RatingItem(props) {
  const { itemNumber, rating, onClick, render } = props;

  const isFilled = itemNumber <= rating;
  const handleClick = () => {
    onClick(itemNumber);
  };

  return render(isFilled, handleClick);
}

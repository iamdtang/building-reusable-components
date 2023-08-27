import { render, fireEvent, screen } from "@testing-library/react";
import StarRating from "./StarRating";

test("rendering stars", () => {
  // Arrange
  const rating = 4;

  // Act
  const { getAllByTestId } = render(
    <StarRating rating={rating} onStarClick={(i) => {}}>
      {(isFilled) => {
        return isFilled ? "★" : "☆";
      }}
    </StarRating>
  );

  // Assert or Expectation
  expect(getAllByTestId("star-button").length).toBe(5);
  expect(getAllByTestId("filled-star").length).toBe(4);
  expect(getAllByTestId("empty-star").length).toBe(1);
});

// TDD
test("rendering a specified number of stars", () => {
  // Arrange
  const rating = 4;

  // Act
  const { getAllByTestId } = render(
    <StarRating rating={rating} total={10} onStarClick={(i) => {}}>
      {(isFilled) => {
        return isFilled ? "★" : "☆";
      }}
    </StarRating>
  );

  // Assert or Expectation
  expect(getAllByTestId("star-button").length).toBe(10);
  expect(getAllByTestId("filled-star").length).toBe(4);
  expect(getAllByTestId("empty-star").length).toBe(6);
});

test("click on an empty star", () => {
  // Arrange
  const rating = 4;

  // function spy that tracks how many times it was called and what the arguments were when it was called
  const onStarClick = jest.fn();

  // Act
  const { getAllByTestId } = render(
    <StarRating rating={rating} onStarClick={onStarClick}>
      {(isFilled) => {
        return isFilled ? "★" : "☆";
      }}
    </StarRating>
  );

  const thirdStar = getAllByTestId("star-button")[0]; // one star rating
  fireEvent.click(thirdStar);

  // Assert or Expectation
  expect(onStarClick).toHaveBeenCalledWith(1);
});

import { screen, render, getByRole } from "@testing-library/react";
import Card from "../Card";

describe("Card testing", () => {
  beforeAll(() => {
    screen.debug();
  });

  test("should render the card", () => {
    render(<Card />);
    const divElement = screen.getByTestId("card");
    expect(divElement).toBeInTheDocument();
  });

  test("should render the image", () => {
    render(<Card />);
    const imageElement = screen.getByAltText("images");
    expect(imageElement).toBeInTheDocument();
  });

  test("should have description", () => {
    render(<Card />);
    const descElement = screen.getByTestId("desc");
    const headingElement = getByRole(descElement, "heading");
    expect(headingElement).toBeInTheDocument();
  });
});

import { screen, render } from "@testing-library/react";
import PyroButton from "./Button";

describe("Button", () => {
  it("renders a button with text", () => {
    render(<PyroButton text="Test" onClick={() => {}} />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
  it("includes the extra classes", () => {
    render(
      <PyroButton text="Test" onClick={() => {}} classExtend="test-class" />
    );
    expect(screen.getByText("Test")).toHaveClass("test-class");
  });
  it("calls the onClick function when clicked", () => {
    const mockOnClick = jest.fn();
    render(<PyroButton text="Test" onClick={mockOnClick} />);
    screen.getByText("Test").click();
    expect(mockOnClick).toHaveBeenCalled();
  });
});

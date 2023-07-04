import LogoutButton from "./LogoutButton";
import { render, screen } from "@testing-library/react";

jest.mock("../lib/sign-out-from-client", () => ({
  signOutFromClient: jest.fn(),
}));

describe("LogoutButton", () => {
  it("renders a button", () => {
    render(<LogoutButton />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("calls signOutFromClient when clicked", () => {
    render(<LogoutButton />);
    screen.getByRole("button").click();
    expect(
      require("../lib/sign-out-from-client").signOutFromClient
    ).toHaveBeenCalled();
  });
});

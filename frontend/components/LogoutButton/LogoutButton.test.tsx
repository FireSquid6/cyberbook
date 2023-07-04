import LogoutButton from "./index";
import { render, screen } from "@testing-library/react";

jest.mock("../../lib/client/sign-out", () => ({
  signOutFromClient: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: jest.fn(),
  }),
}));

describe("LogoutButton", () => {
  it("renders a button", () => {
    render(<LogoutButton />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});

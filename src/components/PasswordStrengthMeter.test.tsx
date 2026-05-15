import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import { describe, expect, it } from "vitest";

describe("PasswordStrengthMeter", () => {
  it("renders password input", () => {
    render(<PasswordStrengthMeter />);

    expect(
      screen.getByLabelText(/contraseña/i)
    ).toBeInTheDocument();
  });

  it('shows "vacía" initially', () => {
    render(<PasswordStrengthMeter />);

    expect(screen.getByText("vacía")).toBeInTheDocument();
  });

  it('shows "débil" for short password', async () => {
    const user = userEvent.setup();

    render(<PasswordStrengthMeter />);

    const input = screen.getByLabelText(/contraseña/i);

    await user.type(input, "abc");

    expect(screen.getByText("débil")).toBeInTheDocument();
  });

  it("renders an accessible password input", () => {
  render(<PasswordStrengthMeter />);

  expect(
    screen.getByLabelText(/contraseña/i)
  ).toBeInTheDocument();
  });

});
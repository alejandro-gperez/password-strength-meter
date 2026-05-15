import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import { describe, expect, it } from "vitest";

describe("PasswordStrengthMeter", () => {
  it('shows "vacía" initially', () => {
    render(<PasswordStrengthMeter />);

    expect(screen.getByText(/vacía/i)).toBeInTheDocument();
  });

  it('shows "débil" for short password', async () => {
    const user = userEvent.setup();

    render(<PasswordStrengthMeter />);

    const input = screen.getByLabelText(/contraseña/i);

    await user.type(input, "abc");

    expect(screen.getByText(/débil/i)).toBeInTheDocument();
  });

  it('shows "media" for 8+ chars without numbers or symbols', async () => {
  const user = userEvent.setup();

  render(<PasswordStrengthMeter />);

  const input =
    screen.getByLabelText(/contraseña/i);

  await user.type(input, "abcdefgh");

  expect(
    screen.getByText(/media/i)
  ).toBeInTheDocument();
  });

  it('shows "fuerte" for 8+ chars with a number', async () => {
  const user = userEvent.setup();

  render(<PasswordStrengthMeter />);

  const input =
    screen.getByLabelText(/contraseña/i);

  await user.type(input, "abcdefg1");

  expect(
    screen.getByText(/fuerte/i)
  ).toBeInTheDocument();
  });

  it('shows "muy fuerte" for 8+ chars with number and symbol', async () => {
  const user = userEvent.setup();

  render(<PasswordStrengthMeter />);

  const input =
    screen.getByLabelText(/contraseña/i);

  await user.type(input, "abcdef1!");

  expect(
    screen.getByText(/muy fuerte/i)
  ).toBeInTheDocument();
  });

  it('returns to "vacía" when password is cleared', async () => {
  const user = userEvent.setup();

  render(<PasswordStrengthMeter />);

  const input =
    screen.getByLabelText(/contraseña/i);

  await user.type(input, "abcdef1!");

  await user.clear(input);

  expect(
    screen.getByText(/vacía/i)
  ).toBeInTheDocument();
  });

  it("renders an accessible password input", () => {
  render(<PasswordStrengthMeter />);

  expect(
    screen.getByLabelText(/contraseña/i)
  ).toBeInTheDocument();
  });

  it("updates progress bar value", async () => {
  const user = userEvent.setup();

  render(<PasswordStrengthMeter />);

  const input = screen.getByLabelText(/contraseña/i);

  await user.type(input, "abcdef1!");

  expect(screen.getByRole("progressbar")).toHaveAttribute(
    "value",
    "4"
  );
  });

});
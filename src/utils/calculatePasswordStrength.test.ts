import { describe, expect, it } from "vitest";
import { calculatePasswordStrength } from "./calculatePasswordStrength";

describe("calculatePasswordStrength", () => {
  it('returns "vacía" for empty password', () => {
    expect(calculatePasswordStrength("")).toBe("vacía");
  });

  it('returns "débil" for passwords shorter than 8 chars', () => {
    expect(calculatePasswordStrength("abc")).toBe("débil");
  });

  it('returns "media" for 8+ chars without numbers or symbols', () => {
    expect(calculatePasswordStrength("abcdefgh")).toBe("media");
  });

  it('returns "fuerte" for 8+ chars with a number', () => {
    expect(calculatePasswordStrength("abcdefg1")).toBe("fuerte");
  });

  it('returns "muy fuerte" for 8+ chars with number and symbol', () => {
    expect(calculatePasswordStrength("abcdef1!")).toBe("muy fuerte");
  });
});
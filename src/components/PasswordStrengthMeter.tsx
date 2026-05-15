import { useState } from "react";
import { calculatePasswordStrength, type PasswordStrength } from "../utils/calculatePasswordStrength";

export default function PasswordStrengthMeter() {
  const [password, setPassword] = useState("");

  const strength = calculatePasswordStrength(password);

  const strengthColors: Record<PasswordStrength, string> = {
  "vacía": "#d6cfc7",
  "débil": "#d27d5f",
  "media": "#c59b6d",
  "fuerte": "#7a9e7e",
  "muy fuerte": "#4f7c5a",
  };

  const strengthEmoji = {
    "vacía": "🫥",
    "débil": "😬",
    "media": "🥱",
    "fuerte": "😎",
    "muy fuerte": "🔥"
  }

  return (
    <div>
      <label htmlFor="password">Contraseña</label>

        <input
          id="password"
          type="password"
          aria-describedby="password-strength"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            borderColor: strengthColors[strength],
            boxShadow: `0 0 0 4px ${strengthColors[strength]}22`,
          }}
        />

        <p
          id="password-strength"
          className="strength"
          style={{
            color: strengthColors[strength],
          }}
        >
          {strengthEmoji[strength]} {strength}
        </p>

        <progress
          value={
            strength === "vacía"
              ? 0
              : strength === "débil"
              ? 1
              : strength === "media"
              ? 2
              : strength === "fuerte"
              ? 3
              : 4
          }
          max={4}
          style={{
            accentColor: strengthColors[strength],
          }}
        />
    </div>
  );
}
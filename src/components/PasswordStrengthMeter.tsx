import { useState } from "react";
import { calculatePasswordStrength } from "../utils/calculatePasswordStrength";

export default function PasswordStrengthMeter() {
  const [password, setPassword] = useState("");

  const strength = calculatePasswordStrength(password);

  return (
    <div>
      <label htmlFor="password">Contraseña</label>

      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <p>{strength}</p>
    </div>
  );
}
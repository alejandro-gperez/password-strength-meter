# Password Strength Meter

A React application built with Vite, Vitest, and React Testing Library following the Test Driven Development (TDD) workflow.

This project evaluates password strength in real time based on different validation rules and provides visual feedback through text, emojis, colors, and a progress bar.

---

## Features

* Real-time password strength evaluation
* Dynamic visual feedback
* Progress bar indicator
* Accessible form elements
* Unit testing with Vitest
* Component testing with React Testing Library
* Coverage reports
* GitHub Actions CI workflow
* TypeScript support
* ESLint configuration

---

## Password Strength Rules

The password strength is determined using the following rules:

| Condition                                             | Strength     |
| ----------------------------------------------------- | ------------ |
| Empty password                                        | `vacía`      |
| Less than 8 characters                                | `débil`      |
| 8+ characters without numbers or symbols              | `media`      |
| 8+ characters with at least one number                | `fuerte`     |
| 8+ characters with at least one number and one symbol | `muy fuerte` |

---

## Tech Stack

* React
* TypeScript
* Vite
* Vitest
* React Testing Library
* Bun
* ESLint

---

## Installation

Clone the repository and install dependencies:

```bash
bun install
```

---

## Run Development Server

```bash
bun run dev
```

The app will run locally at:

```txt
http://localhost:5173
```

---

## Run Tests

```bash
bun run test
```

---

## Run Coverage Report

```bash
bun run test:coverage
```

---

## Run Linter

```bash
bun run lint
```

---

## Project Structure

```txt
src/
├── components/
│   ├── PasswordStrengthMeter.tsx
│   └── PasswordStrengthMeter.test.tsx
│
├── utils/
│   ├── calculatePasswordStrength.ts
│   └── calculatePasswordStrength.test.ts
```

---

## TDD Workflow

This project was developed following the Test Driven Development (TDD) cycle:

1. Write failing tests
2. Run tests and verify failures
3. Commit failing tests
4. Implement functionality
5. Refactor while keeping tests green

The commit history reflects this workflow.

---

## Accessibility

The project uses accessible labels and semantic queries in tests through React Testing Library.

Example:

```ts
screen.getByLabelText(/contraseña/i)
```

---

## Continuous Integration

GitHub Actions is configured to automatically:

* install dependencies
* run lint
* run tests

on every push and pull request.

---

## Author

Developed by Alejandro Pérez.

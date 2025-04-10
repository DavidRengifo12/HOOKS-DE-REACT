import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();

  return (
    <div>
      <label>
        Password:
        <input
          type="password"
          aria-describedby={passwordHintId}
        />
      </label>
      <p id={passwordHintId}>
        The password should contain at least 18 characters
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h2>Choose password</h2>
      <PasswordField />
      <h2>Confirm password</h2>
      <PasswordField />
    </div>
  );
}
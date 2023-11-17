import { useState } from "react";

const SignUpForm = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleUsername = (event) => {
    const newUsername = event.target.value;
    setUsername(newUsername);

    if (newUsername.length < 8) {
      setUsernameError("Username must be at least 8 characters long");
    } else {
      setUsernameError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );

      const dataResponse = await response.json();
      setToken(dataResponse.token);
      // console.log(dataResponse.token);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <h2>Sign Up</h2>
      {<p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsername} />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit" hidden={username.length < 8}>
          Submit
        </button>
        {<p>{usernameError}</p>}
      </form>
    </>
  );
};

export default SignUpForm;

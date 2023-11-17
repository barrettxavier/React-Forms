import { useState } from "react";

const Authenticate = ({ token }) => {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [user, setUser] = useState(null);

  const handleClick = async () => {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setUser(result.data.username);
      setSuccessMessage(result.message);
    } catch (error) {
      setError(error.message);
    }

    // console.log(`authenticate`);
  };

  return (
    <>
      <h2>Authenticate</h2>
      {<p>{successMessage}</p>}
      
      {<p>{error}</p>}
      <button type="submit" onClick={handleClick}>
        Authenticate Token
      </button>
      {user ? <p>Welcome back {user}</p> : <p></p>}
    </>
  );
};

export default Authenticate;

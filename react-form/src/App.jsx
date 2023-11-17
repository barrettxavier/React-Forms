import { useState } from "react";
import "./App.css";
import Authenticate from "./Component/Authenticate";
import SignUpForm from "./Component/SignUpForm";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
}

export default App;

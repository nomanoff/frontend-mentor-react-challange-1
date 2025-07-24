import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import PATHS from "../routes/routes";
import { Button } from "@mui/material";

function Hooks() {
  let navigate = useNavigate();
  const inputRef = useRef(null);
  const [username, setUserName] = useState("");

  //   useEffect(() => {
  //     // focus the input
  //     if (inputRef.current) {
  //       inputRef.current.focus();
  //     }
  //   });

  const handleInputFocus = () => {
    console.log("focus input");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <Button
        onClick={() => {
          navigate(PATHS.HOME);
        }}
      >
        home
      </Button>
      <h1>Hooks Page</h1>
      <p>This is the Hooks page.</p>

      <div>
        <input
          ref={inputRef}
          id="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />

        <button>Login</button>
      </div>

      <div>
        <button onClick={handleInputFocus}>focus input</button>
      </div>
    </div>
  );
}
export default Hooks;

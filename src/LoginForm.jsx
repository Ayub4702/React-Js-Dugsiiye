import { useState } from "react";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  function handleLogin() {
    if (inputName.trim() === "" || inputPassword.trim() === "") return;

    setUserName(inputName);
    setIsLogged(true);
  }

  function handleLogout() {
    setInputName("");
    setInputPassword("");
    setIsLogged(false);
  }
  return (
    <div>
      {!isLogged && (
        <>
          <h2>Login</h2>

          <input
            type="text"
            required
            placeholder="enter your name"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />

          <input
            type="text"
            required
            placeholder="enter the passowrd"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />

          <button onClick={handleLogin}>Login</button>
        </>
      )}

      {isLogged && (
        <>
          {userName && <p>Welcome {userName} </p>}
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default LoginForm;

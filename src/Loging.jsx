import { useState, useEffect } from "react";

function Loging() {
  const [inputName, setInputName] = useState("");
  const [btn, setBtn] = useState("");
  const [password, setPassword] = useState();
  const [timer, setTimer] = useState(new Date().toLocaleTimeString());
  const [color, setColor] = useState("");

  const handleInput = (e) => {
    setInputName(e.target.value);
  };

  const handleBtn = () => {
    setBtn(inputName === "" ? "enter your name" : inputName);

    setInputName("");
  };

  const handlePasswor = () => {
    setPassword(password);
  };

  const btnPassword = () => {
    const patternPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (patternPassword.test(password)) {
      console.log("thanks");
    } else {
      console.log("enter password");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(new Date().toLocaleTimeString());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const colors = [
        "red",
        "blue",
        "green",
        "purple",
        "orange",
        "teal",
        "pink",
        "yellow",
      ];

      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      setColor(randomColor);
      // document.body.style.backgroundColor = randomColor;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          value={inputName}
          onChange={handleInput}
        />
        <button onClick={handleBtn}>login</button>
        <p>{btn}</p>
      </div>

      <div>
        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={handlePasswor}
        />

        <button onClick={btnPassword}>save password</button>
      </div>

      <p>{timer}</p>
      <p>color: {color}</p>
    </>
  );
}

export default Loging;

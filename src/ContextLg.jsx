import ContextLanguage from "./ContextLanguage";
import { useContext } from "react";

function ContextLg() {
  const { lg, setLg } = useContext(ContextLanguage);

  function hanldeLg() {
    setLg((prev) => (prev === "English" ? "Spanish" : "English"));
  }

  return (
    <div>
      <h2>{lg === "English" ? "Hello" : "Holo"}</h2>
      <button onClick={hanldeLg}>
        switch to {lg === "English" ? "Spanish" : "English"}
      </button>
    </div>
  );
}

export default ContextLg;

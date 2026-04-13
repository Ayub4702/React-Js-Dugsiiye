import ContextLanguage from "./ContextLanguage";
import ContextLg from "./ContextLg";
import { useState } from "react";

function App() {

  const [lg, setLg] = useState("")
  
  return (
    <ContextLanguage.Provider value={{lg, setLg }}>
      
      <ContextLg/>
      
    </ContextLanguage.Provider>
  )

}

export default App;

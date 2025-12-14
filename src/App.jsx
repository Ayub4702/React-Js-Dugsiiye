import {useState} from "react";

function App (){

const [isOn, setOn] = useState(true)

function toggleBtn (){

  setOn(!isOn)
  

}

return (
  <>
  <p>{isOn ? "the button is on" : "the button is off"}</p>
  <button onClick={toggleBtn}> turn {isOn ? "of" : "on"} </button>
  
  
  </>
)
}

export default App; 


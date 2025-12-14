import { useState } from "react";

function ToggleBtn (){

 const [isOn, setOn] = useState(true)

 const ToggaleHandle = ()=>{
   
  setOn(!isOn)
 }

 return (

  <div>
   <p>the button is {isOn ? "off" : "on"}</p>
   <button onClick={ToggaleHandle}>trun {isOn ? "on" : "off"}</button>
  </div>
 )
}

export default ToggleBtn;
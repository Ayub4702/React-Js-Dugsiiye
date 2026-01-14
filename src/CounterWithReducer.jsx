import { useReducer } from "react";

const intitialState = {countA: 0,countB: 0 }

const reducer = (state, action) => {
 
 switch(action.type){

  // counter A //
  case 'inCrementA':
   return {...state, countA: state.countA + 1}
  case 'desCrementA':
   return {...state, countA: state.countA -1}

   // counter B //
   case "inCrementB":
   return {...state, countB: state.countB + 1}
   case 'desCrementB':
    return {...state, countB: state.countB - 1}

   case 'reset': 
   return intitialState
  
 }

}

const CounterWithReducer = ()=>{

 const [state, dispatch] = useReducer(reducer, intitialState)

 return (
  <>
  <h2>Counter A: {state.countA}</h2>
  <button onClick={()=>dispatch({type: "inCrementA"})}>A+</button>
  <button onClick={()=>dispatch({type: "desCrementA"})}>A-</button>

  <div>

   <h2>Counter B: {state.countB}</h2>
   <button onClick={()=>dispatch({type: "inCrementB"})}>B+</button>
  <button onClick={()=>dispatch({type: "desCrementB"})}>B-</button>

  </div>

  <button onClick={()=>dispatch({type: "reset"})}>Reset All</button>
  </>
 )
}

export default CounterWithReducer;
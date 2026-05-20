export const intialState = [];

export function reduce (state, action){

 switch (action.type) {

  case 'ADD':
   return [...state, action.payload]

   case 'DELETE':
   return state.filter((item)=> item.id !== action.payload)

   case "EDIT":
   return state.map((item)=>
    item.id === action.payload.id ? action.payload : item
   );

   default:
   return state;
 }
}
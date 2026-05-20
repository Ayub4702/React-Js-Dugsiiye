export const initialState = [];

export function cartReducer(state, action) {
  switch (action.type){
    case 'ADD_TO_CART':
     return [...state, action.payload];
     case 'REMOVE_FROM_CART':
      return state.filter((item)=> item.name !== action.payload);
     case 'CLEAR_CART':
     return [];

     default:
     return state;
  }
}
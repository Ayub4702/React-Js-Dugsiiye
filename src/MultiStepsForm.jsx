import { useReducer } from "react";

const initialState = {
  currentStep: 1,
  stepA: { name: "", lastName: "" },
  stepB: { email: "", phone: "" },
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.payload.step]: {
          ...state[action.payload.step],
          [action.payload.field]: action.payload.value,
        },
      };
    case "NEXT_STEP":
      return { ...state, currentStep: state.currentStep + 1 };
    case "PREV_STEP":
      return { ...state, currentStep: state.currentStep - 1 };
    default:
      return state;
  }
}

function MultiStepsForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInput = (e, step, field) => {
    dispatch({ type: "UPDATE_FIELD", payload: { step, field, value: e.target.value } });
  };

  return (
    <div>
      {state.currentStep === 1 && (
        <div>
          <h2>Step 1: Profile</h2>

          <input type="text" placeholder="First Name" value={state.stepA.name} onChange={(e) => handleInput(e, "stepA", "name")} />

          <input type="text" placeholder="Last Name" value={state.stepA.lastName} onChange={(e) => handleInput(e, "stepA", "lastName")} />
          <button onClick={() => dispatch({ type: "NEXT_STEP" })}>Next</button>
        </div>
      )}

      {state.currentStep === 2 && (
        <div>
          <h2>Step 2: Contact</h2>
          <input type="text" placeholder="Email" value={state.stepB.email} onChange={(e) => handleInput(e, "stepB", "email")} />
          <input type="text" placeholder="Phone" value={state.stepB.phone} onChange={(e) => handleInput(e, "stepB", "phone")} />

          <button onClick={() => dispatch({ type: "PREV_STEP" })}>Back</button>
          
          <button onClick={() => dispatch({ type: "NEXT_STEP" })}>Next</button>
        </div>
      )}

      {state.currentStep === 3 && (
        <div>
          <h2>Confirm</h2>
          <p>Name: {state.stepA.name} {state.stepA.lastName}</p>
          <p>Email: {state.stepB.email}</p>
          <p>Phone: {state.stepB.phone}</p>
          <button onClick={() => dispatch({ type: "PREV_STEP" })}>Back</button>
          <button>Submit</button>
        </div>
      )}
    </div>
  );
}

export default MultiStepsForm;
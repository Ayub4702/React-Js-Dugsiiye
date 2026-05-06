import FormContext from "./FormContext";
import ContactForm from "./ContactForm";
import { useState } from "react";

const App = () => {
  const [valueInfo, setValueInfo] = useState({name: '', email: ''});

  return ( 
    <FormContext.Provider value={{ valueInfo, setValueInfo }}>
      <ContactForm />
    </FormContext.Provider>
  );
};

export default App;

import { useContext } from "react";
import FormContext from "./FormContext";

const ContactForm = () => {
  const { valueInfo, setValueInfo } = useContext(FormContext);

  function handleForm(e) {
    setValueInfo({...valueInfo, [e.target.name]: e.target.value});
    
  }

  function handleSummit () {

    console.log('from data :', valueInfo)
  }

  return (
    <div>
      <h2>Custom Hook</h2>

      <input
      name="name"
        type="text"
        placeholder="Enter Your Name"
        value={valueInfo.name}
        onChange={handleForm}
      />

      <input name="email" type="email" placeholder="Enter Your Email" value={valueInfo.email} onChange={handleForm}/>

      <textarea name="summit" id="summit"></textarea>
      <button onClick={handleSummit}>Summit</button>
    </div>
  );
};

export default ContactForm;

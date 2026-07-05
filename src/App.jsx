import { useState } from "react";
import { ContactProvider, useContact } from "./ContextContact";
import TodoList from './TodoList';
import TodoApp from './TodoApp';

function Contact() {
  const { state, dispatch } = useContact();
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [editId, setEditId] = useState(null);

  function handleSubmit() {
    if (editId) {
      dispatch({
        type: "EDIT",
        payload: { id: editId, ...form },
      });
      setEditId(null);
    } else {
      dispatch({
        type: "ADD",
        payload: { id: Date.now(), ...form },
      });
    }
    setForm({ name: "", email: "", phone: "" });
  }

  function handleEdit(contact) {
    setEditId(contact.id);
    setForm({ name: contact.name, email: contact.email, phone: contact.phone });
  }

  return (
    <div>
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <button onClick={handleSubmit}>
        {editId ? "Update Contact" : "Add Contact"}
      </button>

      {state.map((contact) => (
        <div key={contact.id}>
          <p>{contact.name} - {contact.email} - {contact.phone}</p>
          <button onClick={() => handleEdit(contact)}>Edit</button>
          <button onClick={() => dispatch({ type: "DELETE", payload: contact.id })}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (

    <div>

   {/* <TodoList/> */}
    <TodoApp/>

    </div>
    // <ContactProvider>
    //   <Contact />
      
    // </ContactProvider>

    
   
  );
}
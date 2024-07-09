import React, { useState } from "react";
import '../assets/css/style.css'
const InputHandler = ({ onSubmit, editMode = false }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email){
      alert("Name and Email is empty or you have entered an existing name and email.");
      return;
    } 
    onSubmit({ name, email });
    setName("")
    setEmail("")
  };

  return (
    <div className="header-box">
      <input
        value={name}
        type="text"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        value={email}
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button type="primary" onClick={handleSubmit}>
        {!!editMode ? "Edit user" : "Add user"}
      </button>
    </div>
  );
};

export default InputHandler;

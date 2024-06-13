import React from "react";

const Form = ({ name, description, isCompleted, submit, setName, setDescription, setisCompleted }) => {
  return (
    <form onSubmit={submit} className="d-flex gap-3 mb-3">
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="checkbox" checked={isCompleted} onChange={(e) => setisCompleted(e.target.checked)} />

      <button className="btn btn-primary">Add Item</button>
    </form>
  );
};

export default Form;

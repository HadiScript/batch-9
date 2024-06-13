import React from "react";

const Listing = ({ data, deleteItem, editItem, showComplete }) => {
  return (
    <ul class="list-group">
      {data.map((x, index) => (
        <li className="list-group-item py-3" style={{ borderRight: x.isCompleted ? `10px solid blue` : `` }}>
          <b>{x.name}</b>
          <p>{x.description}</p>
          <hr />
          <div className="d-flex gap-3">
            <button onClick={() => deleteItem(x.id)}>Delete</button>

            <button onClick={() => editItem(x.id)}>Edit</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Listing;

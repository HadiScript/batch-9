import { useState } from "react";
import { initArray } from "./data";
import Listing from "./Listing";
import Form from "./Form";

const App = () => {
  // form state
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isCompleted, setisCompleted] = useState(false);

  // for edit
  const [selectId, setSelectId] = useState(null);

  // filters
  const [showCompleted, setShowCompleted] = useState(false);

  const [list, setList] = useState(initArray);

  const addItem = (e) => {
    e.preventDefault();
    let lastItem = list.length;
    let arr = [...list, { id: ++lastItem, name, description, isCompleted }];
    setList(arr);
  };

  const deleteItem = (ID) => {
    // delete item
    setList(list.filter((x) => x.id !== ID));
  };

  // select item
  const editItem = (ID) => {
    setSelectId(ID); // select id = 1
    const selectedObject = list.find((x) => x.id === ID);
    // grab the object 1

    setName(selectedObject.name);
    //
    setDescription(selectedObject.description);
    setisCompleted(selectedObject.isCompleted);

    // console.log(selectedObject);
  };

  // update
  const update = (e) => {
    e.preventDefault();
    setList(list.map((x) => (x.id === selectId ? { ...x, name, description, isCompleted } : x)));
  };

  return (
    <div>
      <Form
        name={name}
        description={description}
        isCompleted={isCompleted}
        submit={selectId ? update : addItem}
        setName={setName}
        setDescription={setDescription}
        setisCompleted={setisCompleted}
      />

      <Listing data={list} deleteItem={deleteItem} editItem={editItem} showComplete={showCompleted} />
    </div>
  );
};

export default App;

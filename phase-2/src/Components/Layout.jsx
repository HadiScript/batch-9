import { FaAngellist } from "react-icons/fa"
import Heading from "./Heading"
import { LuFormInput } from "react-icons/lu";
import Inputs from "./Inputs";
import { useState } from "react";
import MyList from "./MyList";


const Layout = ({ theme }) => {

  const [item2, setItem2] = useState("");
  const [item, setItem] = useState("");
  const [MyData, setMyData] = useState([]);


  // input change
  const changeHandler = (e) => {
    if (item2 === '') {
      setItem(e.target.value)
    } else {
      setItem2(e.target.value)
    }
  }


  // add items
  const addItem = (e) => {
    e.preventDefault()

    if (!item) {
      alert("Name is requried")
    } else {

      let nextId = MyData.length;
      let newObject = { id: ++nextId, name: item, completed: false };
      let newArr = [...MyData, newObject];

      setMyData(newArr);
      setItem("")
    }
  }


  // delete item
  const deleteAnItem = (Id) => {
    setMyData(MyData.filter(x => x.id !== Id))
  }


  const updateItem = (ID) => {
    const selectAnObjectFromArr = MyData?.find(x => x.id === ID)
    setItem2(selectAnObjectFromArr.name)
  }


  return (
    <div className='row '>


      {/* input */}
      <div className="col-12 p-1">
        <div className='border rounded-1 p-2'>
          <Heading title={"Add Item"} icon={<LuFormInput className="primaryText" />} />
          {item2 === "" ? <Inputs
            item={item}
            changeHandler={changeHandler}
            addItem={addItem}
          /> :
            <Inputs
              item={item2}
              changeHandler={changeHandler}
              addItem={addItem}
            />
          }
        </div>
      </div>

      {/* listing */}
      <div className="col-12 p-1">
        <div className='border rounded-1 p-2'>
          <Heading title={"My List"} icon={<FaAngellist className="primaryText" />} />
          <MyList updateItem={updateItem} list={MyData} deleteAnItem={deleteAnItem} theme={theme} />
        </div>
      </div>
    </div>
  )
}
export default Layout
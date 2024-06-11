import { FaAngellist } from "react-icons/fa"
import Heading from "./Heading"
import { LuFormInput } from "react-icons/lu";
import Inputs from "./Inputs";
import { useState } from "react";
import MyList from "./MyList";


const Layout = ({ theme }) => {

  const [item, setItem] = useState("");
  const [MyData, setMyData] = useState([]);

  const changeHandler = (e) => {
    setItem(e.target.value)
  }

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

  const deleteAnItem = (Id) => {
    setMyData(MyData.filter(x => x.id !== Id))
  }


  return (
    <div className='row '>

      <div className="col-12   p-1">
        <div className='border rounded-1 p-2'>
          <Heading title={"Add Item"} icon={<LuFormInput className="primaryText" />} />
          <Inputs
            item={item}
            changeHandler={changeHandler}
            addItem={addItem}

          />

        </div>
      </div>
      <div className="col-12 p-1">
        <div className='border rounded-1 p-2'>
          <Heading title={"My List"} icon={<FaAngellist className="primaryText" />} />
          <MyList list={MyData} deleteAnItem={deleteAnItem} theme={theme} />
        </div>
      </div>
    </div>
  )
}
export default Layout
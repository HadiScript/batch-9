import Comp1 from "./Component/Comp1"
import Comp2 from "./Component/Comp2"
import Comp3 from "./Component/Comp3"
import Comp4 from "./Component/Comp4"
import Header from "./Component/Header"
import { useState } from 'react'


const App = () => {

  let [active, changeTheActive] = useState("comp1");

  const [theme, setTheme] = useState("main-dark")


  return (
    <div className={theme}>
      <button onClick={() => setTheme("main-dark")}>Dark</button>
      <button onClick={() => setTheme("main-purple")}>Purple</button>
      <button onClick={() => setTheme("main-blue")}>Blue</button>


      <Header changetheactive={changeTheActive} />



      {/* <button onClick={onclickHandler}>Change The Component</button> */}


      {active === "comp1" && <Comp1 />}
      {active === "comp2" && <Comp2 />}
      {active === "comp3" && <Comp3 />}
      {active === "comp4" && <Comp4 />}

    </div>
  )
}

export default App
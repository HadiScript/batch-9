import React from 'react'

const Header = ({ changetheactive }) => {
  return (
    <div className="container">

      <div>
        <h4>Hadi Script</h4>
      </div>
      <div className="list">
        <span onClick={() => changetheactive("comp1")} >Comp 1</span>
        <span onClick={() => changetheactive("comp2")} >Comp 2</span>
        <span onClick={() => changetheactive("comp3")}>Comp 3</span>
        <span onClick={() => changetheactive("comp4")}>Comp 4</span>
      </div>
    </div>
  )
}

export default Header
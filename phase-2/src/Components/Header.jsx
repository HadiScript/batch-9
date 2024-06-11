import React from 'react'
import Logo from './Logo'
import { CiDark, CiLight } from "react-icons/ci";



const Header = ({ theme, Inc }) => {


  return (
    <div className='p-2 border-bottom my-3 d-flex justify-content-between align-items-center'>
      <Logo />

      <div onClick={Inc}>
        {theme === "dark" ? <CiLight size={20} role='button' /> : <CiDark size={20} role='button' />}
      </div>

    </div>
  )
}

export default Header
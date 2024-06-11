import React from 'react'
import { TbBrandVscode } from 'react-icons/tb'

const Logo = () => {
  return (
    <div className='logo d-flex  align-items-center'>
      <span>Hadi</span>
      <div className='d-flex align-items-center gap-2'>
        <span>Scripts</span>
        <TbBrandVscode className='primaryText' />
      </div>
    </div>
  )
}

export default Logo
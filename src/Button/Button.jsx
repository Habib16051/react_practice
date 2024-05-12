import React from 'react'
import './Button.css'
const Button = () => {
  const handleClick = (e) => {
    e.target.textContent = "Hi";
  }

  return (
    <>
    <button className='btn' onClick={(e)=>handleClick(e)}>Click me</button>
    </>
  )
}

export default Button
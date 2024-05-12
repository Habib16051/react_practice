import React from 'react'

const Food = () => {
    const food1 = "Orange";
    const food2 = "Apple";
  return (
    <>
    <ul>
        <li>{food1}</li>
        <li>{food2.toUpperCase()}</li>
    </ul>
    </>
  )
}

export default Food
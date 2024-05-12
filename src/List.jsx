import React from 'react'

const List = (props) => {
    const fruits_1 = props.fruit;
    const vegetables_1 = props.vegetable;
    // const fruits = [
    //     { id: 1, name: 'Apple' },
    //     { id: 2, name: 'Mango' },
    //     { id: 3, name: 'Watermelon' },
    //     { id: 4, name: 'Banana' }
    //   ];

    // const vegetables = [
    //     { id: 5, name: 'Potato' },
    //     { id: 6, name: 'Tomato' },
    //     { id: 7, name: 'Korola' },
    //     { id: 8, name: 'Cucumber' }
    //   ];
    
    const fruitList = fruits_1.map(fruit => <li key={fruit.id}>{fruit.name}</li>);
    const vegetablesList = vegetables_1.map(vt => <li key={vt.id}>{vt.name}</li>);
  return (
    <>
        <ol className="m-5">{fruitList}</ol>
        <br />
        <ol className="m-5">{vegetablesList}</ol>
    
    </>
  )
}

export default List
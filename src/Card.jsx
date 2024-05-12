import React from "react";
import tamim from './assets/tamim.jpg';

const Card = () => {
  return (
    <>
      <div className="card">
        <img src={tamim} alt="" />
        <h2 className="title">Tamim Iqbal</h2>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          repudiandae earum debitis reprehenderit, illum impedit doloremque
          numquam et necessitatibus eos sapiente odio, est placeat asperiores
          fugit dignissimos! Veniam, provident amet.
        </p>
      </div>
    </>
  );
};

export default Card;

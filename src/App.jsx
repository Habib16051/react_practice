import { useState } from "react";
import OnChange from "./OnChange";

import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button/Button";
import Student from "./Student/Student";
import Greeting from "./Greeting";
import List from "./List";
import FormExample from "./Prevent";
import State from "./State/State";

function App() {
  const fruits = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Mango" },
    { id: 3, name: "Watermelon" },
    { id: 4, name: "Banana" },
  ];

  const vegetables = [
    { id: 5, name: "Potato" },
    { id: 6, name: "Tomato" },
    { id: 7, name: "Korola" },
    { id: 8, name: "Cucumber" },
  ];

  return (
    <>
      <p className="bg-slate-400 text-center p-5">Welcome to Bangladesh</p>
      <Header />
      <Food />
      <Card />
      <Card />
      <Button />
      <hr />
      <Student name={"Habib"} age={28} isStudent={true} />
      <hr />
      <Student name={"Watson"} age={25} isStudent={false} />
      <Student name={"David Warner"} age={25} isStudent={false} />
      <hr />
      <Greeting isLoggedIn={true} username="Huo" />
      <hr />
      <List fruit={fruits} vegetable={vegetables} />
      <hr />
      <OnChange />
      <hr />
      <FormExample/>
      <hr />
      <State/>
      

      <hr />
      <Footer />
    </>
  );
}

export default App;

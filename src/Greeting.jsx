import React from "react";

const Greeting = (props) => {
    if(props.isLoggedIn){
        return (props.isLoggedIn ? <h2>Welcome {props.username}</h2> : <h2>Please Login Again</h2>);
    }
  

    
};

export default Greeting;

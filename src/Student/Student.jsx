import React from "react";
import PropTypes from 'prop-types';
import "./Student.css";

const Student = (props) => {
  return (
    <>
      <div className="student">
        <p>Name: {props.name} </p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "Yes" : "No"}</p>
      </div>
    </>
  );
};
Student.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
  };
Student.defaultProps = {
    name: "Guest",
    age: 16,
    isStudent: true,
  };


export default Student;

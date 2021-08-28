import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const nameRef = useRef();
  const ageRef = useRef();

  const addUserHandler = (event) => {
    const nameValue = nameRef.current.value;
    const ageValue = ageRef.current.value;
    event.preventDefault();
    if (nameValue.trim().length === 0 || ageValue.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (+ageValue < 1) {
      setError({
        title: "invalid Age",
        message: "Please enter a valid Age",
      });
      return;
    }
    props.onAddUser(nameValue, ageValue);
    nameRef.current.value = "";
    ageRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={nameRef} />

          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" ref={ageRef} />

          <Button type="submit" onConfirm={errorHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;

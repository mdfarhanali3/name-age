import React, { useState, Fragment } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
function AddUser(props) {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  function addUserHandler(event) {
    event.preventDefault();
    if (enteredUser.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid username and age.",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({ title: "Invalid Age", message: "Please enter valid age." });

      return;
    }
    props.onAddUser(enteredUser, +enteredAge);
    // console.log(enteredUser, enteredAge);
    setEnteredUser("");
    setEnteredAge("");
  }

  function UsernameChangeHandler(event) {
    setEnteredUser(event.target.value);
  }
  function addUserAge(event) {
    setEnteredAge(event.target.value);
  }

  function errorHandler() {
    setError(null);
  }

  return (
    <Fragment>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredUser}
            onChange={UsernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={addUserAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
}

export default AddUser;

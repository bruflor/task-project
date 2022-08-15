import React, { useState } from "react";
import Card from "./cards/Card";
import classes from "./AddUser.module.css";
import Button from "./button/Button";

const AddUser = () => {
  const [enteredUserName, setenteredUserName] = useState("");
  const [enteredAge, setenteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      (enteredUserName.trim().length === 0) |
      (enteredAge.trim().length === 0)
    ) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    console.log(enteredUserName, enteredAge);
  };

  const usernameChangeHandler = (event) => {
    setenteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setenteredAge(event.target.value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
          value={enteredUserName}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          onChange={ageChangeHandler}
          value={enteredAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;

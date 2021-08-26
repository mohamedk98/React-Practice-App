import React from "react";
import Card from "../UI/Card";
import styles from "./UsersList.module.css";
import UsersItem from "./UsersItem";
const UsersList = (props) => {



  return (
    <Card className={styles.users}>
      <ul>
      {props.users.map((user) => (
          <UsersItem key={user.id} onDeleteItem={props.onDelete}>
            {user.name} ({user.age} Years old)
          </UsersItem>
        ))}

      </ul>
    </Card>
  );
};

export default UsersList;

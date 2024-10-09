import React from "react";
import { useSelector, useDispatch } from "react-redux";

function UsersList() {
  // console.log(state)
  const users = useSelector((state) => state.users);

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>${user.title}</li>
        ))}
      </ul>
    </>
  );
}

export default UsersList;

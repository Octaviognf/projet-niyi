import React from "react";

const UserList = ({ users, search }) => {
  return (
    <ul>
      {users
        .filter(user => user.gender.includes(search))
        .map(user => (
          <li key={user.login.uuid}>
            <img src={user.picture.medium} alt={user.name.first} />
            {user.name.first} {user.name.last} - {user.email} ({user.location.country})
          </li>
      ))}
    </ul>
  );
};

export default UserList;

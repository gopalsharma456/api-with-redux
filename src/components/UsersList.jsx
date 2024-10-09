import React from 'react'

function UsersList({ users }) {
  console.log(users)
  
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>${user.title}</li>
        ))}
      </ul>
    </>
  )
}

export default UsersList
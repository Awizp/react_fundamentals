import {type userType } from "./type"
import React from "react"

type UserInfoType={
    user: userType
}

const UserInfo: React.FC<UserInfoType>= ({user}) => {
  return (
    <div>
        <h2>User Info</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>City: {user.city}</p>
    </div>
  )
}

export default UserInfo
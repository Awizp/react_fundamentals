import AdminInfo from "./AdminInfo"
import UserInfo from "./UserInfo"
import {type userType,type adminType } from "./type"

const App = () => {

    const user: userType = {
        id: 1,
        name:"Naruto",
        email:"naruto@gmail.com",
        city:"Konoha",
    }

    const admin: adminType ={
        id:1,
        name:"Kakashi",
        email:"nobodyknows@gmail.com",
        role:"sensei",
        city:"Hidden Leaf",
        lastSeen: new Date(),
    }

  return (
    <div>
        <UserInfo user={user} />
        <AdminInfo admin={admin} />
    </div>
  )
}

export default App
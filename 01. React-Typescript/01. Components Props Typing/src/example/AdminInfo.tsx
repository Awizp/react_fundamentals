import { type adminType } from "./type"

type AdminInfoType={
    admin: adminType
}

const AdminInfo: React.FC<AdminInfoType> = ({admin}) => {
  return (
    <div>
        <h2>Admin Info</h2>
        <p>Name: {admin.name}</p>
        <p>Email: {admin.email}</p>
        <p>Role: {admin.role}</p>
        <p>Town: {admin.city}</p>
        <p>Last Seen: {admin.lastSeen.toLocaleDateString()}</p>
    </div>
  )
}

export default AdminInfo
import AdminInfo from "./AdminInfo";
import UsersInfo from "./UserInfo";

export default function Home() {
  return (
    <>
      <h1>Users Info 👇</h1>
      <UsersInfo
        username="Naruto"
        email="naruto@gmail.com"
        age={20}
        location={["Konoha", "Hidden Lead"]}
      />

      <h1>Admin Info 👇</h1>
      <AdminInfo
        username="Kakashi"
        email="idontknow@gmail.com"
        age={30}
        location={["Konoha", "Hidden Leaf"]}
        admin="yes"
      />
    </>
  );
}
import { useEffect, useState} from 'react'
import './App.css'

const App = () => {

  type UserType={
     id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }

  const [user, setUser] = useState<UserType | null>(null)

  useEffect(()=>{
    const fetchData=async()=>{
        const response = await fetch("https://dummyjson.com/product/1")
        const data: UserType = await response.json()
        setUser(data)
    }
    fetchData()
  },[])

  return (
    <div>
      {user ? (
        <div>
          <p>ID: {user.id}</p>
          <p>Title: {user.title}</p>
          <p>description: {user.description}</p>
          <p>price: {user.price}</p>
          <p>discountPercentage: {user.discountPercentage}</p>
          <p>rating: {user.rating}</p>
          <p>stock: {user.stock}</p>
          <p>brand: {user.brand}</p>
          <p>category: {user.category}</p>
          <p>thumbnail: {user.thumbnail}</p>
          {user.images.map((img) => (
            <img src={img} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default App
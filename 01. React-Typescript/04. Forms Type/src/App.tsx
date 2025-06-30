import {useRef, useState, type ChangeEvent, type FormEvent} from 'react'

interface StateArrType{
  id: number;
  name: string;
  email:string;
}

const App = () => {

  const inputRef = useRef<HTMLInputElement>(null)

  const inputFocusHandle=()=>{
    inputRef.current?.focus()
  }

  const [data,setData] =useState<StateArrType>({
    id: Date.now(),
    name:"",
    email:"",
  })

  const updateValueHandle=(e:ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target

    setData((prev)=> ({
      ...prev,
      [name]: value
    }))
  }

  const submitHandle=(e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log("Form Submitted", data)
  }

  return (
    <div>
      <form onSubmit={submitHandle}>
        <label htmlFor="name">
          Name : 
          <input type="text" placeholder="Enter Your Name" name='name' ref={inputRef} value={data.name} onChange={updateValueHandle} />
          <button onClick={inputFocusHandle}>Focus Name</button>
        </label>
        <label htmlFor="email">
        Email : 
        <input type="email" placeholder="Enter Your Email" name='email' value={data.email} onChange={updateValueHandle} />
       </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
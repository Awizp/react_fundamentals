const App = () => {

    const mouseOverHandle=(e: React.MouseEvent<HTMLDivElement>)=>{
        console.log(e.currentTarget)
    }

    const mouseClickHandle=(e: React.MouseEvent<HTMLButtonElement>)=>{
        console.log("Notu", e.currentTarget)
    }

  return (
    <div onMouseEnter={mouseOverHandle}>
        <p>Naruto Uzumaki</p>
        <button onClick={mouseClickHandle}>Notu</button>
    </div>
  )
}

export default App
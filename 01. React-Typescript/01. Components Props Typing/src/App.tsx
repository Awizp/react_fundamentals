import User from "./User"
import Button from "./Button"

const App = () => {
  return (
    <div>
      {/* <User name={"Naruto"} age={20} isNinja={true} /> */}

      {/* If i give children value like following, */}
      <User>
        <h1>Naruto</h1>
        <p>He is 20 years old</p>
      </User>

      <Button label="Click" onClick={()=>console.log("Notu")} disabled={false} />
    </div>
  )
}

export default App
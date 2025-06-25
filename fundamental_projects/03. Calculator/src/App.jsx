import { useState } from 'react'

const App = () => {

  const [inputVal, setInputVal] = useState('')

  const clearHandle = () => setInputVal('')

  const displayHandle = (value) => {
    setInputVal(prev => prev + value)
  }

  const calculateHandle = () => setInputVal(eval(inputVal))

  // Do not use eval method in production ready apps bcoz it creates security risk in apps

  return (
    <>
      <form class="calculator" name="calc">
        <input type="text" class="value" value={inputVal} />
        <span class="num clear" onClick={() => clearHandle()}>
          c
        </span>
        <span onClick={() => displayHandle("/")}>/</span>
        <span onClick={() => displayHandle("*")}>*</span>
        <span onClick={() => displayHandle("7")}>7</span>
        <span onClick={() => displayHandle("8")}>8</span>
        <span onClick={() => displayHandle("9")}>9</span>
        <span onClick={() => displayHandle("-")}>-</span>
        <span onClick={() => displayHandle("4")}>4</span>
        <span onClick={() => displayHandle("5")}>5</span>
        <span onClick={() => displayHandle("6")}>6</span>
        <span className="plus" onClick={() => displayHandle("+")}>
          +
        </span>
        <span onClick={() => displayHandle("1")}>1</span>
        <span onClick={() => displayHandle("2")}>2</span>
        <span onClick={() => displayHandle("3")}>3</span>
        <span onClick={() => displayHandle("0")}>0</span>
        <span onClick={() => displayHandle("00")}>00</span>
        <span onClick={() => displayHandle(".")}>.</span>
        <span class="num equal" onClick={() => calculateHandle()}>
          =
        </span>
      </form>
    </>
  )
}

export default App
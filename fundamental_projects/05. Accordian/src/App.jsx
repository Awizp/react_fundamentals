import Accordian from './components/Accordian'
import { accordionData } from './db'

const App = () => {
  return (
    <>
      {accordionData.map(({ title, content }, idx) => (
        <Accordian title={title} content={content} idx={idx} />
      ))}
    </>
  )
}

export default App
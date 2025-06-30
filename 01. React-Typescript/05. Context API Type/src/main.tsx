import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './example1/App.tsx'
// import { MyContextProvider } from './example1/context/MyContext.tsx'
import App from './example2/App.tsx'
import { MyContextProvider } from './example2/context/MyContext.tsx'

createRoot(document.getElementById('root')!).render(
    <MyContextProvider>
        <App />
    </MyContextProvider>
)

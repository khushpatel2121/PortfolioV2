import "./App.css"
import Instagram from "./components /Instagram"
import Home from "./pages/home"
import {BrowserRouter,Route,Routes} from "react-router-dom"
function App() {


  return (
    <>
   <BrowserRouter>

    <div className="App">
      <Home/>
      <Routes>
       
      
      </Routes>
    </div>
   </BrowserRouter>
    </>
  )
}

export default App

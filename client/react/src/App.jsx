
import './App.css'
import Home from "./pages/index.jsx";
import Cameron from "./pages/cameron.jsx"
import Matt from "./pages/matt.jsx"
import Alina from "./pages/alina.jsx"
import Edward from "./pages/edward.jsx"
import Quetzal from "./pages/quetzal.jsx"
import Mayo from "./pages/mayo.jsx"
import NavBar from "./components/navbar.jsx"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  

  return (
    
    <BrowserRouter>
      <NavBar />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/CSCI:235" element={<Cameron />} />
        <Route path="/CSCI:343" element={<Matt />} />
        <Route path="/CSCI:329" element={<Alina />} />
        <Route path="/CSCI:333" element={<Edward />} />
        <Route path="/CSCI:183" element={<Quetzal />} />
        <Route path="/mayo" element={<Mayo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

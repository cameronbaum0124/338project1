
import './App.css'
import Home from "./pages/index.jsx";
import Cameron from "./pages/cameron.jsx"
import Matt from "./pages/matt.jsx"
import Alina from "./pages/alina.jsx"
import Edward from "./pages/edward.jsx"
import Quetzal from "./pages/quetzal.jsx"
import Mayo from "./pages/mayo.jsx"
// import NavBar from "./components/navbar.jsx"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  

  return (
    
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/cameron" element={<Cameron />} />
        <Route path="/matt" element={<Matt />} />
        <Route path="/alina" element={<Alina />} />
        <Route path="/edward" element={<Edward />} />
        <Route path="/quetzal" element={<Quetzal />} />
        <Route path="/mayo" element={<Mayo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

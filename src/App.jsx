import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Singup from "./pages/Singup";

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singup" element={<Singup />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/contact.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />

        {
          <Routes>
            <Route path="/react-landingpage" element={<Home />} />
            <Route path="/react-landingpage/about" element={<About />} />
            <Route path="/react-landingpage/contact" element={<Contact />} />
          </Routes>
        }
      </div>
    </>
  );
}

export default App;

import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Welcome from "./Components/Welcome";
import Home from "./navbar/Home";
import Contact from "./navbar/Contact";
import About from "./navbar/About";
import Fruit from "./Components/Fruit";
import Counter from "./Components/Counter"
function App(){
  return (
    <div>
    <BrowserRouter>
    <nav style={{padding: "10px",background: "#6b6b6b"}}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

    <Fruit></Fruit>
    <Counter></Counter>
    </div>
  );
}
export default App;
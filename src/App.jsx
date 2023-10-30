import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import About from "./components/About";
import Project from "./components/Project";
import Service from "./components/Service";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Stars from "./components/canvas/Stars";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-warm-white">
          <Navbar />
          <Home />
        </div>
        <div className="bg-graydish-brown">
          <About />
        </div>
        <div className="bg-cream-white">
          <Project />
        </div>
        <div className="bg-azure-blue">
          <Service />
        </div>
        <div className="bg-taupe-gray">
          <Experience />
        </div>
        <div className="relative z-10 bg-[#35302c]">
          <Contact />
          <Stars />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

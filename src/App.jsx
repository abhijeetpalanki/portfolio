import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";

import Navbar from "./components/Navbar";
import { Home, About, Projects, Contact } from "./pages";

const App = () => {
  return (
    <main className="h-full bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;

import "./App.css";
import Splash from "./screens/splash/Splash";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/home/Home";
import Movie from "./screens/movie/Movie";
import Navbar from "./components/Nav/Nav";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/movie/:name" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;

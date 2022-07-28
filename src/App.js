import "./App.css";
import Splash from "./screens/splash/Splash";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/home/Home";
import Movie from "./screens/movie/Movie";
import Search from "./screens/discover/Search";
import Landing from "./screens/Landing/Landing";
import Auth from "./screens/Auth/Auth";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="/:type" element={<Movie />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;

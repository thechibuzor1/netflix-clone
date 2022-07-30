import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Splash from "./screens/splash/Splash";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/home/Home";
import Movie from "./screens/movie/Movie";
import Search from "./screens/discover/Search";
import Landing from "./screens/Landing/Landing";
import Auth from "./screens/Auth/Auth";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./screens/profile/Profile";
import Watching from "./screens/watching/Watching";
import NotFound from "./screens/404/NotFound";

function App() {
  return (
    <Router>
      <ToastContainer position="bottom-center" limit={1} />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/*" element={<NotFound />} />
        <Route
          path="/Home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/Landing" element={<Landing />} />
        <Route
          path="/:type"
          element={
            <ProtectedRoute>
              <Movie />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Search"
          element={
            <ProtectedRoute>
              <Search />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Watch"
          element={
            <ProtectedRoute>
              <Watching />
            </ProtectedRoute>
          }
        />
        <Route path="/Auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
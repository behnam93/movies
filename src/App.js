import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MoviePage from "./Pages/MoviePage";
import Search from "./Pages/Search";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:slug" element={<MoviePage />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MoviesInfo from "./pages/MoviesInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/movies" exact element={<Movies />} />
        <Route path="/movies/:imdbID" element={<MoviesInfo />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

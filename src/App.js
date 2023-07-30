import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./Home";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/" className="hyperlinks">
          <h1 className="heading">🛅PASSWORD GENERATOR</h1>
        </Link>
      </header>

      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}


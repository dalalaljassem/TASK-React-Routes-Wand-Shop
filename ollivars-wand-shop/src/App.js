import "./App.css";
import WandList from "./components/WandList";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/WandList" element={<WandList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

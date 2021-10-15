import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/screens/HomeScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Home></Home>
      </Router>
    </div>
  );
}

export default App;

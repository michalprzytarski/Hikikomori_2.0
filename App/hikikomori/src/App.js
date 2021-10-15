import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Screens } from "./components/screens/screens";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          {Screens.map((screen) => (
            <Route path={screen.path} exact component={screen.screen} />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

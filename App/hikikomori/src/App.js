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
          <ul style={{ listStyle: "none" }}>
            {Screens.map((screen) => (
              <li key={screen.key}>
                <Route path={screen.path} exact component={screen.screen} />
              </li>
            ))}
          </ul>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

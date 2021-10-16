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
          {/* <ul style={{ listStyle: "none" }}>
            {Screens.map((screen) => (
              <li key={screen.key}>
                <Route path={screen.path} exact component={screen.screen} />
              </li>
            ))}
          </ul> */}
          <Route
            path={Screens.find((x) => x.key === 1).path}
            component={Screens.find((x) => x.key === 1).screen}
          />
          <Route
            path={Screens.find((x) => x.key === 2).path}
            component={Screens.find((x) => x.key === 3).screen}
          />
          <Route
            path={Screens.find((x) => x.key === 3).path}
            component={Screens.find((x) => x.key === 3).screen}
          />
          <Route
            path={Screens.find((x) => x.key === 4).path}
            component={Screens.find((x) => x.key === 4).screen}
          />
          <Route
            path={Screens.find((x) => x.key === 5).path}
            component={Screens.find((x) => x.key === 5).screen}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

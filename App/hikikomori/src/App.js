import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useState, useContext } from "react";
import { UserContext } from "./userContext";

import { Screens, loginScreen } from "./components/screens/screens";

function App() {
  const [username, setUsername] = useState(undefined);
  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={{ username, setUsername }}>
          <NavBar />

          <Route
            path={Screens.find((x) => x.key === 1).path}
            component={Screens.find((x) => x.key === 1).screen}
            exact
          />
          <Route
            path={Screens.find((x) => x.key === 2).path}
            component={Screens.find((x) => x.key === 2).screen}
            exact
          />
          <Route
            path={Screens.find((x) => x.key === 3).path}
            component={Screens.find((x) => x.key === 3).screen}
            exact
          />
          <Route
            path={Screens.find((x) => x.key === 4).path}
            component={Screens.find((x) => x.key === 4).screen}
            exact
          />
          <Route path={loginScreen.path} component={loginScreen.screen} exact />
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;

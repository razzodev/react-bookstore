import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import "./App.css";

import Catalog from "./components/Catalog";
import SingleBook from "./components/SingleBook";

function App() {
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/catalog">Catalog</Link>
            </li>
            {/* <li>
              <Link to="/test">Test</Link>
            </li> */}
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component="" />
          <Route exact path="/catalog" component={Catalog} />
          <Route exact path="/:bookID" component={SingleBook} />
          {/* <Route exact path="localhost:5000/update_book" component={Catalog} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

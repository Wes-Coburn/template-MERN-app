import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import logo from "../assets/logo.svg";
import Counter from "../features/Counter";
import ROUTES from "./routes";
import "./App.css";

function RouteDefault() {
  return (
    <>
      <h1>&quot;/&quot;</h1>
      <Counter />
    </>
  );
}

function RouteOther(path: string) {
  return (
    <Routes>
      <Route
        path={ROUTES.root()}
        element={
          <>
            <h1>&quot;{path}&quot;</h1>
            <NavLink to={ROUTES.subroute()}>
              {path}/{ROUTES.subroute()}
            </NavLink>
          </>
        }
      />
      <Route
        path="subroute"
        element={
          <h1>
            {path}/{ROUTES.subroute()}
          </h1>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React + Vite</h1>
          <nav>
            <ul>
              <li>
                <NavLink to={ROUTES.root()}>&quot;/&quot;</NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.firstRoute()}>
                  &quot;{ROUTES.firstRoute()}&quot;
                </NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.secondRoute()}>
                  &quot;{ROUTES.secondRoute()}&quot;
                </NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.thirdRoute()}>
                  &quot;{ROUTES.thirdRoute()}&quot;
                </NavLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path={ROUTES.root()} element={<RouteDefault />} />
            <Route
              path={`${ROUTES.firstRoute()}/*`}
              element={RouteOther(ROUTES.firstRoute())}
            />
            <Route
              path={`${ROUTES.secondRoute()}/*`}
              element={RouteOther(ROUTES.secondRoute())}
            />
            <Route
              path={`${ROUTES.thirdRoute()}/*`}
              element={RouteOther(ROUTES.thirdRoute())}
            />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;

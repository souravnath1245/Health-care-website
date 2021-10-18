import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import ServiceDetails from "./components/Services/ServiceDetails";
import About from "./pages/About";
import Home from "./pages/Home";
// import Service from "./pages/Service";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="/service">
            <Service />
          </Route> */}
          <Route path="/service/:serviceId/:title/:details/:img">
            <ServiceDetails/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
              <NotFound />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

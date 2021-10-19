import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import NotFound from "./components/NotFound/NotFound";
import ServiceDetails from "./components/Services/ServiceDetails";
import AuthProvider from "./context/AuthProvider";
import About from "./pages/About";
import Doctor from "./pages/Doctor";
import Home from "./pages/Home";
import PrivateRoute from "./Private/PrivateRoute";
// import Service from "./pages/Service";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/service/:title/:details">
              <ServiceDetails />
            </PrivateRoute>
            <Route path="/doctors">
              <Doctor />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

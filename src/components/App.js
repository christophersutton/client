//react imports
import React from "react";
import { Switch, Route } from "react-router-dom";
import "./sass/App.scss";

// static components
import NavBar from "./static/NavBar";
import Footer from "./static/Footer";

// routes
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import ResetPassword from "../components/auth/ResetPassword";
import Home from "./routes/Home";

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/resetpassword' component={ResetPassword} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;

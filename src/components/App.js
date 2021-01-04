//react imports
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./sass/App.scss";

// static components
import NavBar from "./static/NavBar";
import Footer from "./static/Footer";

// routes
import Login from "../components/auth/Login"
import Register from "../components/auth/Register"

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Plants</h1>
        <Switch>
          <Route path='/register' component={Register}/>
          <Route path='/login' component={Login}/>

          <Link to="/register">Register</Link>

        </Switch>
        

        
      </main>
      <Footer />
    </>
  );
}

export default App;

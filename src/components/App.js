//react imports
import React from "react";
import { Switch, Route } from "react-router-dom";
import "./scss/App.scss";

// static components
import NavBar from "./static/NavBar";
import Footer from "./static/Footer";

// routes

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Plants</h1>
        <Switch>
          <Route />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;

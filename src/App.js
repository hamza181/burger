import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";
import "antd/dist/antd.css";
import Checkout from "./Pages/Checkout/Checkout";
import Layout from "./Layouts";
import Auth from "./Pages/Auth/Auth";
import Login from "./Components/Auth/Login/Login";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Layout>
                <Home />
              </Layout>
            </Route>
            <Route exact path="/checkout">
              <Layout>
                <Checkout />
              </Layout>
            </Route>
            <Route exact path="/auth">
              <Auth></Auth>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

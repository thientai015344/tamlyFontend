import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import Contacts from "./components/pages/Contacts";
import NotFoundPage from "./components/pages/NotFoundPage";
import Search from "./components/pages/Search";
import Home1 from "./components/pages/home/Home";
import BMI from "./components/pages/BMI/BMI";
import Profile from "./components/pages/profile/Profile";
import Login from "./components/pages/login/Login";
import Admin from "./components/pages/admin/admin";
import Register from "./components/pages/register/Register";
import Details from "./components/pages/Details";
import Messenger from "./components/messenger/messenger";
import DetailsArticle from "./components/pages/DetailsArticle";

function App() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          component={ Home }/>
        <Route path="/home" component={Home}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/news" component={Home1} />
        <Route path="/BMI" component={BMI} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/search" component={Search} />
        <Route path="/profile/:username" component={Profile} />
        <Route path="/article/:id" component={DetailsArticle} />
        <Route path="/details" component={Details} />
        <Route path="/messenger" component={Messenger} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;

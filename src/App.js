import React from 'react'
import './App.css'
import './index.css';
import Header from "./Components/Header";
import { BrowserRouter, Switch, Route, Redirect, Link } from '../node_modules/react-router-dom';

export default class App extends React.Component {
  render() {
    return (<>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path="/" component={Header} />
            {/* <Route exact path = "/Home" component = {Home} />
            <Route exact path = "/Events" component = {Events} />
            <Route exact path = "/ClubService" component = {ClubService} />
            <Route exact path = "/Blogs" component = {} />
            <Route exact path = "/Members" component = {} />
            <Route exact path = "/Gallery" component = {} />
            <Route exact path = "/Login" component = {} />
            <Route exact path = "/ContactUs" component = {} /> */}
            <Redirect to="/" />
          </Switch>
        </div>

      </div>
    </>)
  }

}
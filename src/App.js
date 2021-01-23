import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./Components/BlogDetails";
import NotFound from './Components/NotFound';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <h1>App Component</h1>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
              <Create />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;

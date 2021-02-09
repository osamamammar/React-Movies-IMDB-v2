import React from "react";
//routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
//styles
import { GlobalStyle } from "./GlobalStyle";
const App = () => {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/:movieId" component={Movie} exact></Route>
        <Route path="/*" component={NotFound} />
      </Switch>
      <GlobalStyle></GlobalStyle>
    </Router>
  );
};

export default App;

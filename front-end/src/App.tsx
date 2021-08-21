import React, { FC } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./pages";
import Post from "./pages/post";
import "./scss/style.scss";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <>
          <div className="app">
            <Route exact path="/" component={Index} />
            <Route exact path="/post" component={Post} />
          </div>
        </>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import FeedList from "./components/main/feed/feedList";
import Header from "./components/main/header/header";
import StoryList from "./components/main/story/storyList";
import Post from "./components/post/post";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <div className="app">
          <Route exact path="/" component={Header} />
          <Route exact path="/" component={StoryList} />
          <Route exact path="/" component={FeedList} />
          <Route exact path="/post" component={Post} />
          {/* <Post /> */}
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import FeedList from "./components/feed/feedList";
import Header from "./components/header/header";
import StoryList from "./components/story/storyList";
import "./scss/style.scss";

function App() {
  return (
    <div className="container">
      <Header />
      <StoryList />
      <FeedList />
    </div>
  );
}

export default App;

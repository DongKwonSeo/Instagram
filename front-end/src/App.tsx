import React from "react";
import FeedList from "./components/main/feed/feedList";
import Header from "./components/main/header/header";
import StoryList from "./components/main/story/storyList";
// import Post from "./components/post/post";
import "./scss/style.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <StoryList />
      <FeedList />
      {/* <Post /> */}
    </div>
  );
}

export default App;

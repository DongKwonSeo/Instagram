import React from "react";
import FeedList from "./components/feed/feedList";
import Header from "./components/header/header";
import StoryList from "./components/story/storyList";
// import SwitchButton from "./components/switchButton";
import "./scss/style.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <StoryList />
      <FeedList />
      {/* <SwitchButton /> */}
    </div>
  );
}

export default App;

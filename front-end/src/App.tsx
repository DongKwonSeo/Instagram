import React, { FC } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContentDetail from "./components/main/feed/contentDetail/contentDetail";
// import PostEditer from "./components/post/postLIst/editer";
import PostModify from "./components/post/postLIst/modify";
import Index from "./pages";
// import Post from "./pages/post";
import "./styles/style.scss";

const post = [
  { path: "/", component: Index },
  { path: "/post", component: PostModify },
  { path: "/post/:id", component: PostModify },
  { path: "/commentList/:id", component: ContentDetail },
];
const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <>
          <div className="app">
            {post.map((item) => (
              <Route
                exact
                path={item.path}
                component={item.component}
                key={item.path}
              />
            ))}
          </div>
        </>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

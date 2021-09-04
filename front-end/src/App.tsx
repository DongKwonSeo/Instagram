import React, { FC } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  // useLocation,
  // useParams,
} from "react-router-dom";
import ContentDetail from "./components/main/feed/comment/contentDetail";
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
            {/* <Route exact path="/" component={Index} />
            <Route exact path="/post" component={Post} />
            <Route exact path="/post/:id" component={Post} /> */}
          </div>
        </>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

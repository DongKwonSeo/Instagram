import React, { FC } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  // useLocation,
  // useParams,
} from "react-router-dom";
import CommentList from "./components/main/feed/comment/list";
import Index from "./pages";
import Post from "./pages/post";
import "./styles/style.scss";

const post = [
  { path: "/", component: Index },
  { path: "/post", component: Post },
  { path: "/post/:id", component: Post },
  { path: "/commentList", component: CommentList },
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

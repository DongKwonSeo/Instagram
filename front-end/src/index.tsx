import React from "react";
import ReactDOM from "react-dom";
// styles css
import "./scss/style.scss";
// package json
import "@fortawesome/fontawesome-free/js/all.js";
import { QueryClient, QueryClientProvider } from "react-query";
// react.app
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

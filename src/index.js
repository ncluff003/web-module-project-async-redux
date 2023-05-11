import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./components/reducers";
import { ThemeProvider } from "styled-components";
import Theme from "./Global/Theme";
import GlobalStyle from "./Global/Style";

import App from "./App";
import "./index.css";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

console.log(store);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    {/* This 'Provider' will wrap EVERYTHING going into the root's render function. */}
    <React.StrictMode>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>
);

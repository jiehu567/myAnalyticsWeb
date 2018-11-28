import * as React from "react";
import { hot } from "react-hot-loader";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { Shell } from "./shell/Shell";
import { store } from "./store";

const App = () =>
    <HashRouter>
        <Provider store={store}>
          <Shell />
        </Provider>
    </HashRouter>;

export default hot(module)(App);

import React from "react";
import Routes from "./routes";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./redux/reducers";
import "./config/StatusBarConfig";
import NavigationService from "./services/NavigationService";

const App = () => (
  <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
    <Routes
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  </Provider>
);

export default App;

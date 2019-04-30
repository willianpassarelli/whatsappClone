import { NavigationActions } from "react-navigation";

let _navigator;

const setTopLevelNavigator = navigatorRef => {
  _navigator = navigatorRef;
};

const navigate = routeName => {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName
    })
  );
};

const navigateWithParams = (routeName, params) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
};

// add other navigation functions that you need and export them

export default {
  navigate,
  navigateWithParams,
  setTopLevelNavigator
};

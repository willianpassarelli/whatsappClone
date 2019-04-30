import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import { Login, Signup } from "./pages";
import Main from "./components/screen/Main";
import NewContact from "./components/screen/NewContact";
import Talk from "./components/screen/Talk";

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Signup,
    App: createStackNavigator({
      Main: {
        screen: Main,
        navigationOptions: {
          header: null
        }
      },
      NewContact: {
        screen: NewContact,
        navigationOptions: {
          header: null
        }
      },
      Talk: {
        screen: Talk,
        navigationOptions: {
          header: null
        }
      }
    })
  })
);

export default Routes;

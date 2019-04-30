import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import Chat from "./Chat";
import Contacts from "./Contacts";
import Settings from "./Settings";
import { colors } from "../../styles";

export default createAppContainer(
  createBottomTabNavigator(
    {
      Chat: {
        screen: Chat,
        navigationOptions: {
          tabBarLabel: "Conversas",
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-chatbubbles" color={tintColor} size={24} />
          )
        }
      },
      Contacts: {
        screen: Contacts,
        navigationOptions: {
          tabBarLabel: "Contatos",
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-contacts" color={tintColor} size={24} />
          )
        }
      },
      Settings: {
        screen: Settings,
        navigationOptions: {
          tabBarLabel: "Ajustes",
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-cog" color={tintColor} size={24} />
          )
        }
      }
    },
    {
      tabBarOptions: {
        activeTintColor: colors.tintColor,
        inactiveTintColor: colors.regular,
        style: {
          backgroundColor: colors.white,
          borderTopWidth: 0,
          shadowOffset: { width: 5, height: 3 },
          shadowColor: colors.black,
          shadowOpacity: 0.5,
          elevation: 5
        }
      }
    }
  )
);

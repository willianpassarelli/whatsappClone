import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { firebaseAuth } from "../../../utils/firebase";
import { colors } from "../../../styles";
import styles from "./styles";
import NavigationService from "../../../services/NavigationService";
import Icon from "react-native-vector-icons/Ionicons";

export default class Settings extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.headerBar}>
          <Text style={styles.headerTitle}>Ajustes</Text>
        </View>
        <View style={styles.wrapperLogout}>
          <TouchableOpacity
            onPress={() =>
              firebaseAuth
                .signOut()
                .then(() => NavigationService.navigate("Login"))
            }
          >
            <Icon name="ios-log-out" size={28} color={colors.danger} />
            <Text>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

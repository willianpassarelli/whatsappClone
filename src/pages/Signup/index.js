import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { colors } from "../../styles";
import { ActionCreators } from "../../redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styles from "./styles";
import img from "../../img";
import NavigationService from "../../services/NavigationService";
import Notification from "../../components/notification";
import Loader from "../../components/loader";
import Icon from "react-native-vector-icons/Ionicons";

class Signup extends Component {
  static navigationOptions = {
    header: null
  };

  _signUp() {
    const { name, email, password } = this.props;

    this.props.signUp({ name, email, password });
  }

  render() {
    const showNotification = !this.props.formValid;
    const notificationMarginTop = showNotification ? 10 : 0;

    return (
      <ImageBackground source={img.background.login} style={styles.background}>
        <View style={styles.wrapper}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => NavigationService.navigate("Login")}
            >
              <Icon name="ios-arrow-back" size={28} color={colors.white} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 2 }}>
            <TextInput
              value={this.props.name}
              style={styles.input}
              placeholder="Nome"
              placeholderTextColor={colors.white}
              onChangeText={text => this.props.modifyName(text)}
            />
            <TextInput
              value={this.props.email}
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor={colors.white}
              onChangeText={text => this.props.modifyEmail(text)}
            />
            <TextInput
              value={this.props.password}
              style={styles.input}
              secureTextEntry
              placeholder="Senha"
              placeholderTextColor={colors.white}
              onChangeText={text => this.props.modifyPassword(text)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this._signUp()}
            >
              <Text style={styles.buttonText}>CADASTRAR</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[
            styles.notificationWrapper,
            { marginTop: notificationMarginTop }
          ]}
        >
          <Notification
            showNotification={showNotification}
            type="Erro"
            colorType={colors.danger}
            firstLine={this.props.error}
            secondLine="Por favor tente novamente."
          />
        </View>
        <Loader modalVisible={this.props.loader} animationType="fade" />
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.AuthReducers.name,
    email: state.AuthReducers.email,
    password: state.AuthReducers.password,
    error: state.AuthReducers.error,
    formValid: state.AuthReducers.formValid,
    loader: state.AuthReducers.loader
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);

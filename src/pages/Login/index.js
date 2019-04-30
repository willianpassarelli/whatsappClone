import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import styles from "./styles";
import img from "../../img";
import { colors } from "../../styles";
import { ActionCreators } from "../../redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Notification from "../../components/notification";
import Loader from "../../components/loader";

class Login extends Component {
  static navigationOptions = {
    header: null
  };

  _authUser() {
    const { email, password } = this.props;

    this.props.authUser({ email, password });
  }

  render() {
    const { navigate } = this.props.navigation;
    const showNotification = !this.props.authFormValid;
    const notificationMarginTop = showNotification ? 10 : 0;

    return (
      <ImageBackground source={img.background.login} style={styles.background}>
        <View style={styles.wrapper}>
          <View style={styles.headerTitle}>
            <Text style={styles.title}>WhatsApp Clone</Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
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
            <TouchableOpacity onPress={() => navigate("Signup")}>
              <Text style={styles.text}>
                Ainda não tem cadastro? Cadastre-se
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this._authUser()}
            >
              <Text style={styles.buttonText}>ACESSAR</Text>
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
            firstLine={this.props.errorSignIn}
            secondLine="Por favor tente novamente."
          />
        </View>
        <Loader modalVisible={this.props.loader} animationType="fade" />
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    email: state.AuthReducers.email,
    password: state.AuthReducers.password,
    errorSignIn: state.AuthReducers.errorSignIn,
    authFormValid: state.AuthReducers.authFormValid,
    loader: state.AuthReducers.loader
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

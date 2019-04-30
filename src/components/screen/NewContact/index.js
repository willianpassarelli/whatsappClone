import React, { Component } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { colors } from "../../../styles";
import { ActionCreators } from "../../../redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Notification from "../../../components/notification";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";

class NewContact extends Component {
  render() {
    const { goBack } = this.props.navigation;
    const showNotification = !this.props.contactFormValid;
    const showNotificationSucesss = !this.props.successNewContact;
    const notificationMarginTop = showNotification ? 10 : 0;

    return (
      <View style={styles.wrapper}>
        <View style={styles.headerBar}>
          <TouchableOpacity onPress={() => goBack()}>
            <Icon name="ios-arrow-back" size={28} color={colors.tintColor} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Novo Contato</Text>
          <TouchableOpacity
            onPress={() => this.props.newContact(this.props.newContactEmail)}
          >
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.wrapper}>
          <TextInput
            placeholder="Email"
            style={styles.input}
            onChangeText={text => this.props.changedContactEmail(text)}
            value={this.props.newContactEmail}
          />
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
            firstLine={this.props.errorNotFound}
            secondLine="Por favor tente novamente."
          />
        </View>
        <View
          style={[
            styles.notificationWrapper,
            { marginTop: notificationMarginTop }
          ]}
        >
          <Notification
            showNotification={showNotificationSucesss}
            type="Sucesso"
            colorType={colors.success}
            secondLine="Contato adicionado!"
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  newContactEmail: state.AppReducer.newContactEmail,
  contactFormValid: state.AppReducer.contactFormValid,
  errorNotFound: state.AppReducer.errorNotFound,
  successNewContact: state.AppReducer.successNewContact
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewContact);

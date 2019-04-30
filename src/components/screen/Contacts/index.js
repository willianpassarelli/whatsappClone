import React, { Component } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { colors } from "../../../styles";
import { ActionCreators } from "../../../redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import _ from "lodash";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import NavigationService from "../../../services/NavigationService";

class Contacts extends Component {
  static navigationOptions = {
    header: null
  };

  componentWillMount() {
    this.props.contactUserFecth();
    this.renderData(this.props.contacts);
  }

  componentWillReceiveProps(nextProps) {
    this.renderData(nextProps.contacts);
  }

  renderData(contacts) {
    this.data = contacts;
  }

  _renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        NavigationService.navigateWithParams("Talk", {
          name: item.name,
          email: item.email
        })
      }
    >
      <View style={styles.wrapperContacts}>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.emailText}>{item.email}</Text>
      </View>
    </TouchableOpacity>
  );

  _keyExtractor = (item, index) => item.email;

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.wrapper}>
        <View style={styles.headerBar}>
          <Text style={styles.headerTitle}>Contatos</Text>
          <TouchableOpacity
            onPress={() => {
              navigate("NewContact");
              this.props.stateNewContact();
            }}
          >
            <Icon
              style={styles.icon}
              name="ios-person-add"
              size={28}
              color={colors.tintColor}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.wrapper}>
          <FlatList
            data={this.data}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const contacts = _.map(state.ListContactReducer, (val, uid) => {
    return { ...val, uid };
  });
  return { contacts };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);

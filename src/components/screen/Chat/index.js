import React, { Component } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { ActionCreators } from "../../../redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import _ from "lodash";
import styles from "./styles";
import NavigationService from "../../../services/NavigationService";

class Chat extends Component {
  static navigationOptions = {
    header: null
  };

  componentWillMount() {
    this.props.chatUserFetch();
    this.renderData(this.props.chat);
  }

  componentWillReceiveProps(nextProps) {
    this.renderData(nextProps.chat);
  }

  renderData(chat) {
    this.data = chat;
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
      <View style={styles.wrapperChat}>
        <Text style={styles.nameText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  _keyExtractor = (item, index) => item.email;

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.headerBar}>
          <Text style={styles.headerTitle}>Conversas</Text>
        </View>
        <View>
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
  const chat = _.map(state.ListChatReducer, (val, uid) => {
    return { ...val, uid };
  });

  return {
    chat
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);

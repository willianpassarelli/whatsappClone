import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  FlatList
} from "react-native";
import { colors } from "../../../styles";
import { ActionCreators } from "../../../redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import _ from "lodash";
import img from "../../../img";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

class Talk extends Component {
  componentWillMount() {
    const { email } = this.props.navigation.state.params;
    this.props.talkUserFetch(email);
    this.renderData(this.props.talk);
  }

  componentWillReceiveProps(nextProps) {
    this.renderData(nextProps.talk);
  }

  renderData(talk) {
    this.data = talk;
  }

  _sendMessage() {
    const { message } = this.props;
    const { name, email } = this.props.navigation.state.params;

    this.props.sendMessage(message, name, email);
  }

  _renderItem = ({ item }) => {
    if (item.type === "s") {
      return (
        <View style={styles.sendMsg}>
          <Text style={styles.sendText}>{item.message}</Text>
        </View>
      );
    }
    return (
      <View style={styles.receiveMsg}>
        <Text style={styles.receiveText}>{item.message}</Text>
      </View>
    );
  };

  _keyExtractor = (item, index) => item.email;

  render() {
    const { goBack } = this.props.navigation;
    const { name } = this.props.navigation.state.params;

    return (
      <View style={styles.wrapper}>
        <View style={styles.headerBar}>
          <TouchableOpacity onPress={() => goBack()}>
            <Icon name="ios-arrow-back" size={28} color={colors.tintColor} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{name}</Text>
        </View>
        <View style={styles.wrapperList}>
          <ImageBackground
            source={img.background.talk}
            style={styles.background}
          >
            <FlatList
              data={this.data}
              renderItem={this._renderItem}
              keyExtractor={this._keyExtractor}
              style={styles.listView}
            />
          </ImageBackground>
        </View>
        <View style={styles.wrapperInput}>
          <TextInput
            style={styles.input}
            value={this.props.message}
            onChangeText={text => this.props.changedMessage(text)}
          />
          <TouchableOpacity
            style={styles.icon}
            onPress={this._sendMessage.bind(this)}
          >
            <Icon name="md-send" size={24} color={colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const talk = _.map(state.ListTalkReducer, (val, uid) => {
    return { ...val, uid };
  });

  return {
    talk,
    message: state.AppReducer.message
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Talk);

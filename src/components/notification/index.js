import React, { Component } from "react";
import { View, Text, Easing, Animated } from "react-native";
import { PropTypes } from "prop-types";
import styles from "./styles";

export default class Notification extends Component {
  constructor() {
    super();
    this.state = {
      positionValue: new Animated.Value(-60)
    };
    this.animateNotification = this.animateNotification.bind(this);
  }

  animateNotification(value) {
    const { positionValue } = this.state;
    Animated.timing(positionValue, {
      toValue: value,
      duration: 300,
      velocity: 3,
      friction: 8,
      easing: Easing.easeOutBack
    }).start();
  }

  render() {
    const {
      type,
      firstLine,
      secondLine,
      showNotification,
      colorType
    } = this.props;
    const { positionValue } = this.state;

    showNotification
      ? this.animateNotification(0)
      : this.animateNotification(-60);

    return (
      <Animated.View style={[{ marginBottom: positionValue }, styles.wrapper]}>
        <View style={styles.notificationContent}>
          <Text style={[{ color: colorType }, styles.errorText]}>{type}</Text>
          <Text style={styles.errorMessage}>{firstLine}</Text>
          <Text style={styles.errorMessage}>{secondLine}</Text>
        </View>
      </Animated.View>
    );
  }
}

Notification.propTypes = {
  showNotification: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  colorType: PropTypes.string.isRequired,
  firstLine: PropTypes.string,
  secondLine: PropTypes.string,
  handleCloseNotification: PropTypes.func
};

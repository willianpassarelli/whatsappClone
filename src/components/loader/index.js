import React, { Component } from 'react';
import { View, Image, Modal } from 'react-native';
import { PropTypes } from 'prop-types';
import styles from './styles';
import loaderImg from '../../img';

export default class Loader extends Component {
  render() {
    const { animationType, modalVisible } = this.props;
    return (
      <Modal visible={modalVisible} animationType={animationType} transparent>
        <View style={styles.wrapper}>
          <View style={styles.loaderContainer}>
            <Image style={styles.loaderImage} source={loaderImg.loader.white} />
          </View>
        </View>
      </Modal>
    );
  }
}

Loader.propTypes = {
  animationType: PropTypes.string.isRequired,
  modalVisible: PropTypes.bool.isRequired,
};

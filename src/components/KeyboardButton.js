/**
 * KeyboardButton
 * https://github.com/markuswind/react-native-select-input
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
  Dimensions,
  Text,
  TouchableOpacity,
  ViewPropTypes
} from 'react-native';

const BUTTON_WIDTH = Dimensions.get('window').width * 0.25;

class KeyboardButton extends Component {
  render() {
    let props = this.props;

    return (
      <TouchableOpacity onPress={props.onPress}>
        <Text
          allowFontScaling={false}
          style={[props.buttonStyle, {
            width: BUTTON_WIDTH,
            color: props.color,
            textAlign: props.textAlign,
            fontSize: props.textSize || null
          }]}
        >
          {props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

KeyboardButton.propTypes =  {
  color:        PropTypes.string.isRequired,
  onPress:      PropTypes.func.isRequired,
  text:         PropTypes.string.isRequired,
  textAlign:    PropTypes.string.isRequired,
  textSize:     PropTypes.number,
  buttonStyle:  PropTypes.oneOfType([ViewPropTypes.style, PropTypes.arrayOf(ViewPropTypes.style)]),
};

export default KeyboardButton;

import * as React from 'react';
import { View, TextInput } from 'react-native'

import styles from './Input.style'

const Input = ({placeholder, value, onType, iconName, isSecure}) => {

  return (
    <View style={styles.container} >
        <TextInput
          autoCapitalize="none"
          style={styles.input}
          placeholder={placeholder}
          onChangeText={onType}
          value={value}
          secureTextEntry={isSecure}
        />
    </View>
  );
};

export default Input;
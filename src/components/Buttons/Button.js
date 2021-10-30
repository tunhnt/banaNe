import * as React from 'react';
import {  TouchableOpacity, Text, ActivityIndicator } from 'react-native'

import styles from './Button.style'

// style.primary.container ve style['primary'].container aynı şey

const Button = ({text, onPress, loading, icon, theme =  "primary"}) => {
  return (
        <TouchableOpacity style={styles[theme].container} onPress={onPress} disabled={loading}>
          {loading ? (
                <ActivityIndicator color="white" />
            ): (
                <Text style={styles[theme].text} > {text} </Text>
            )}
            
        </TouchableOpacity>
  );
};

export default Button;

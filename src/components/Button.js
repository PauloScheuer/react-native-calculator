import React, { useState } from 'react';
import { Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Button = ({ onClick, label, size, operation, highlight }) => {
  const stylesButton = [styles.button];
  const stylesText = [styles.buttonText];
  if (size === 2) {
    stylesButton.push(styles.doubleButton);
  } else if (size === 3) {
    stylesButton.push(styles.tripleButton);
  }

  if (operation) {
    stylesButton.push(styles.operationButton);
    stylesText.push(styles.operationText);
    if (highlight) {
      stylesButton.push(styles.operationButton2);
    }
  }
  return (
    <TouchableOpacity onPress={onClick} activeOpacity={0.6}>
      <View style={stylesButton}>
        {label === 'x' ? <Feather name="delete" style={stylesText} /> :
          label === '/' ? <Feather name="divide" style={stylesText} /> :
            label === '*' ? <Feather name="x" style={stylesText} /> :
              label === '-' ? <Feather name="minus" style={stylesText} /> :
                label === '+' ? <Feather name="plus" style={stylesText} /> :
                  label === '=' ? <Feather name="chevrons-right" style={stylesText} /> :
                    label === 'c' ? <Feather name="refresh-ccw" style={stylesText} /> :
                      <Text style={stylesText}>{label}</Text>
        }
      </View>
    </TouchableOpacity>
  );
}
export default Button;

const styles = StyleSheet.create({
  button: {
    height: (Dimensions.get('window').width / 4) - 10,
    width: (Dimensions.get('window').width / 4) - 10,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#bbb',
    borderRadius: 50,
    margin: 5,
    elevation: 15
  },
  operationButton: {
    backgroundColor: '#2553F0',
    borderColor: '#2553F0',
    elevation: 25,
  },
  operationText: {
    color: '#fff',
  },
  operationButton2: {
    backgroundColor: '#FF8C00',
    borderColor: '#FF8C00',
  },
  doubleButton: {
    width: (Dimensions.get('window').width / 2) - 10,
  },
  tripleButton: {
    width: Dimensions.get('window').width / 4 * 3,
  },
  buttonText: {
    fontSize: 40,
    color: '#222',
  }
})
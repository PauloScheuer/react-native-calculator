import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Display = ({ value }) => {
  return (
    <View style={styles.display}>
      <Text style={styles.displayValue} numberOfLines={1}>{value}</Text>
    </View>
  );
}
export default Display;

const styles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignItems: 'flex-end',
  },
  displayValue: {
    fontSize: 60,
    color: '#555'
  }
})
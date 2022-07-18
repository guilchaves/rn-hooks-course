import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const BoxScreen = () => {
  return (
    <View style={styles.parent}>
      <View style={styles.viewOne} />
      <View style={styles.viewTwo} />
      <View style={styles.viewThree} />
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewOne: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  viewTwo: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    top: 50,
  },
  viewThree: {
    height: 50,
    width: 50,
    backgroundColor: 'purple',
  },
});

export default BoxScreen;

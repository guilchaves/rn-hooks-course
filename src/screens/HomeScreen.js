import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home</Text>
      <View style={styles.margin}>
        <Button title="Go to Components Demo" onPress={() => navigation.navigate('Component')} />
      </View>
      <View style={styles.margin}>
        <Button title="Go to List Demo" onPress={() => navigation.navigate('List')} />
      </View>
      <View style={styles.margin}>
        <Button title="Go to Image Demo" onPress={() => navigation.navigate('Image')} />
      </View>
      <View style={styles.margin}>
        <Button title="Go to Counter Demo" onPress={() => navigation.navigate('Counter')} />
      </View>
      <View style={styles.margin}>
        <Button title="Go to Color Demo" onPress={() => navigation.navigate('Color')} />
      </View>
      <View style={styles.margin}>
        <Button title="Go to Square Demo" onPress={() => navigation.navigate('Square')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  margin: {
    margin: 10,
  },
});

export default HomeScreen;

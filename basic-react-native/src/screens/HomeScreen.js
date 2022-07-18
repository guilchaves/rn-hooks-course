import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import HomeButton from '../components/HomeButton';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>The Complete React Native Course</Text>
      <HomeButton title="Component" onPress={() => navigation.navigate('Component')} />
      <HomeButton title="List" onPress={() => navigation.navigate('List')} />
      <HomeButton title="Image" onPress={() => navigation.navigate('Image')} />
      <HomeButton title="Counter" onPress={() => navigation.navigate('Counter')} />
      <HomeButton title="Color" onPress={() => navigation.navigate('Color')} />
      <HomeButton title="Square" onPress={() => navigation.navigate('Square')} />
      <HomeButton title="Text" onPress={() => navigation.navigate('Text')} />
      <HomeButton title="Box" onPress={() => navigation.navigate('Box')} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    margin: 14,
    textAlign: 'center',
  },
});

export default HomeScreen;

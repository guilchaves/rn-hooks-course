import { StyleSheet, View, Button } from 'react-native';
import React from 'react';

const HomeButton = ({ title, onPress }) => {
  return (
    <View style={styles.margin}>
      <Button title={`Go to ${title} Demo`} onPress={onPress} />
    </View>
  );
};

export default HomeButton;

const styles = StyleSheet.create({
  margin: {
    margin: 10,
  },
});

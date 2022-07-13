import { React } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Guilherme Chaves';
  const greeting = <Text style={styles.subHeader}>This is {name} </Text>;

  return (
    <View>
      <Text style={styles.header}>Hello there!</Text>
      {greeting}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 45,
  },
  subHeader: {
    fontSize: 20,
  },
});

export default ComponentsScreen;

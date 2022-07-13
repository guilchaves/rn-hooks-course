import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 20 },
    { name: 'Friend #2', age: 23 },
    { name: 'Friend #3', age: 32 },
    { name: 'Friend #4', age: 18 },
    { name: 'Friend #5', age: 50 },
    { name: 'Friend #6', age: 23 },
    { name: 'Friend #7', age: 48 },
    { name: 'Friend #8', age: 31 },
    { name: 'Friend #9', age: 25 },
  ];

  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.text}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 35,
  },
});

export default ListScreen;

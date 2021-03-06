import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <View style={styles.margin}>
        <Button
          title="Add a Color"
          onPress={() => {
            setColors([...colors, randomRgb()]);
          }}
        />
      </View>

      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({ item }) => {
          return <View style={{ marginLeft: 24, height: 100, width: 100, backgroundColor: item }} />;
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  margin: {
    margin: 24,
  },
});

export default ColorScreen;

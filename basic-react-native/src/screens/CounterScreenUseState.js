import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <View style={styles.margin}>
        <Button
          title="Increase"
          onPress={() => {
            setCounter(counter + 1);
          }}
        />
      </View>
      <View style={styles.margin}>
        <Button
          title="Decrease"
          onPress={() => {
            setCounter(counter - 1);
          }}
        />
      </View>
      <Text style={styles.text}>Counter Screen: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  margin: {
    margin: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: 15,
  },
});

export default CounterScreen;

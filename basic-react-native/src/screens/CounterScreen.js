import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useReducer } from 'react';

const COUNTER_VALUE = 1;

const reducer = (state, action) => {
  //state === {count: number}
  //action === {type: 'increase_count' || 'decrease_count', payload: 1 }

  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;

  return (
    <View>
      <View style={styles.margin}>
        <Button
          title="Increase"
          onPress={() => {
            dispatch({ type: 'increment', payload: COUNTER_VALUE });
          }}
        />
      </View>
      <View style={styles.margin}>
        <Button
          title="Decrease"
          onPress={() => {
            dispatch({ type: 'decrement', payload: COUNTER_VALUE });
          }}
        />
      </View>
      <Text style={styles.text}>Counter Screen: {count}</Text>
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

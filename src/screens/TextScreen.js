import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';

const TextScreen = () => {
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text style={styles.text}>Enter password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={e => setPassword(e)}
      />
      {password.length > 0 && password.length < 5 ? (
        <Text style={[styles.warning, styles.text]}> Password must be longer than 5 characters </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
  text: {
    marginLeft: 15,
  },
  warning: {
    color: 'red',
  },
});

export default TextScreen;

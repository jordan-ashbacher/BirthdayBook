import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useState } from 'react'
import { useDispatch } from 'react-redux'


export default function App() {
  // const dispatch = useDispatch()

  const [firstName, setFirstName] = useState('')

  const submitForm = (e) => {
    console.log(firstName)
    setFirstName('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Button 
        onPress={submitForm}
        title="Submit"
        accessibilityLabel="Submit birthday form"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '50%',
    margin: 12,
    borderWidth: 1,
  },
});

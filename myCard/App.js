import React from 'react';
import { View, StyleSheet } from 'react-native';
import Carnet from './components/Carnet';

export default function App() {
  return (
    <View style={styles.container}>
      <Carnet />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

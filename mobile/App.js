import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hello Omnistack</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#fff',
    fontWeight: 'bold',
  }
});

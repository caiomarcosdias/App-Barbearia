import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CatalogoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>🍎 Catálogo da Loja</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F7FA' },
  texto: { fontSize: 24, fontWeight: 'bold' }
});
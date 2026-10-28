import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function DateCard({ diaSemana, diaMes, mes, isSelected, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.card, isSelected && styles.cardSelected]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.texto2, isSelected && styles.textSelected]}>
        {diaSemana}
      </Text>
      <Text style={[styles.textPrincipal, isSelected && styles.textSelected]}>
        {diaMes}
      </Text>
      <Text style={[styles.texto2, isSelected && styles.textSelected]}>
        {mes}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 60,
    height: 80,
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
  cardSelected: {
    backgroundColor: '#ffb800',
    borderColor: '#ffb800',
  },
  textPrincipal: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 2,
  },
  texto2: {
    color: '#888',
    fontSize: 12,
  },
  textSelected: {
    color: '#121212',
    fontWeight: 'bold',
  },
});
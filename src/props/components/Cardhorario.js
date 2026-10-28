import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function TimeCard({ horario, isSelected, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.card, isSelected && styles.cardSelected]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.texto, isSelected && styles.textSelected]}>
        {horario}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '22%', // Faz caber 4 cards por linha na grade
    paddingVertical: 12,
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
  cardSelected: {
    backgroundColor: '#ffb800',
    borderColor: '#ffb800',
  },
  texto: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  textSelected: {
    color: '#121212',
  },
});
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export function CardBarbeiro({ barber, isSelected, onSelect }) {
  return (
    <TouchableOpacity 
      style={[styles.card, isSelected && styles.selectedCard]} 
      onPress={onSelect}
      activeOpacity={0.7}
    >

      {/* <Image source={{ uri: barber.avatarUrl }} style={styles.avatar} /> */}
      
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{barber.name}</Text>
      </View>

      <View style={[styles.checkbox, isSelected && styles.checkboxChecked]}>
        {isSelected && <Text style={styles.checkMark}>✓</Text>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedCard: {
    borderColor: '#ffb800',
    backgroundColor: '#262626',
  },
  infoContainer: { flex: 1, marginLeft: 16 },
  name: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#555',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#ffb800',
    borderColor: '#ffb800',
  },
  checkMark: { color: '#000', fontWeight: 'bold', fontSize: 12 },
});
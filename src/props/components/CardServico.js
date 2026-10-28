import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Biblioteca de ícones do Expo

export function ServiceCard({ titulo, duracao, preco, isSelected, onSelect }) {
  return (
    <View style={[styles.card, isSelected && styles.cardSelected]}>
      {/* Ícone ilustrativo */}
      <Ionicons name="cut-outline" size={32} color={isSelected ? '#121212' : '#ffb800'} />

      {/* Informações do serviço */}
      <Text style={[styles.titulo, isSelected && styles.textSelected]}>{titulo}</Text>
      
      <View style={styles.detalhes}>
        <Text style={[styles.subText, isSelected && styles.textSelected]}>{duracao}</Text>
        <Text style={[styles.precoText, isSelected && styles.textSelected]}>{preco}</Text>
      </View>

      {/* Botão de Selecionar */}
      <TouchableOpacity 
        style={[styles.botao, isSelected && styles.botaoSelected]} 
        onPress={onSelect}
      >
        <Text style={[styles.botaoText, isSelected && styles.botaoTextSelected]}>
          {isSelected ? 'Selecionado' : 'Selecionar'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%', // Deixa dois cards por linha
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
  },
  cardSelected: {
    backgroundColor: '#ffb800',
    borderColor: '#ffb800',
  },
  titulo: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
  },
  detalhes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 12,
  },
  subText: {
    color: '#888',
    fontSize: 12,
  },
  precoText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  textSelected: {
    color: '#121212', // Texto escuro para contrastar com o fundo amarelo
  },
  botao: {
    backgroundColor: '#2a2a2a',
    paddingVertical: 8,
    width: '100%',
    borderRadius: 6,
    alignItems: 'center',
  },
  botaoSelected: {
    backgroundColor: '#121212',
  },
  botaoText: {
    color: '#ffb800',
    fontSize: 12,
    fontWeight: 'bold',
  },
  botaoTextSelected: {
    color: '#ffb800',
  },
});
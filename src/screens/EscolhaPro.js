import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Timeline from '../props/components/Timeline';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { CardBarbeiro } from '../props/components/cardBarbeiro';

const BARBER_LIST = [
  { id: '1', name: 'Otavio Yuri' },
  { id: '2', name: 'Luciano Vieira' },
];

export default function EscolhaPro({ navigation }) {
    const [selectedBarber, setSelectedBarber] = useState(null);

    const handleNextStep = () => {
    if (selectedBarber) {
      
      navigation.navigate('Servico', { 
        barberId: selectedBarber.id, 
        barberName: selectedBarber.name 
      });
    }
  };

 return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.containerPrincipal}>
        <View style={styles.conteudo}>
          <Text style={styles.titulo}>Escolha o Profissional</Text>
          
          <FlatList
            data={BARBER_LIST}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CardBarbeiro 
                barber={item}
                isSelected={selectedBarber?.id === item.id}
                onSelect={() => setSelectedBarber(item)}
              />
            )}
            style={{ width: '100%', marginTop: 20 }}
          />

          <TouchableOpacity 
            disabled={!selectedBarber} 
            style={[styles.botaoproximo, !selectedBarber && styles.disabledButton]}
            onPress={handleNextStep}
          >
            <Text style={styles.botaoproximoText}>Avançar</Text>
          </TouchableOpacity>
        </View>

        <Timeline style={styles.timeline} etapaAtual={1} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: { flex: 1, backgroundColor: '#121212', justifyContent: 'space-between' },
  conteudo: { flex: 1, padding: 20, justifyContent: 'flex-start', alignItems: 'center' },
  titulo: { fontSize: 25, fontWeight: 'bold', color: '#FFFDFD', alignSelf: 'center', marginTop: 16 },
  timeline: { position: 'absolute' },
  botaoproximo: {
    backgroundColor: '#ffb800',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  disabledButton: { backgroundColor: '#333' },
  botaoproximoText: { color: '#000', fontSize: 16, fontWeight: 'bold' },
});
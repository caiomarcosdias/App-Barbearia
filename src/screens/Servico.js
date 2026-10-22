import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Timeline from '../props/components/Timeline';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function CatalogoScreen() {
  return (
    <SafeAreaProvider >
      <SafeAreaView style={styles.containerPrincipal}>
        <View>
        <Text style={styles.titulo}>Escolha seu serviço</Text>
        </View>
        
        
        <Timeline style={styles.timeline} etapaAtual={2} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: { flex: 1, backgroundColor: '#121212', justifyContent: 'space-between' },
  titulo: { fontSize: 25, fontWeight: 'bold', color: '#FFFDFD', alignSelf: 'center', marginTop: 16 },
  timeline: { position: 'absolute' },
  texto: { fontSize: 24, fontWeight: 'bold' }
});
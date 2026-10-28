import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Timeline from '../props/components/Timeline';

export default function Servico({ navigation }) {
  const [servicoSelecionado, setServicoSelecionado] = useState(null);

  const listaServicos = [
    { id: '1', titulo: 'Corte', duracao: '30 min', preco: 'R$ 40,00', icone: 'cut-outline' },
    { id: '2', titulo: 'Barboterapia', duracao: '30 min', preco: 'R$ 30,00', icone: 'cut-outline' },
    { id: '3', titulo: 'Corte + Sobrancelha', duracao: '45 min', preco: 'R$ 50,00', icone: 'cut-outline' },
    { id: '4', titulo: 'Corte + Pigmentação', duracao: '50 min', preco: 'R$ 58,00', icone: 'color-palette-outline' },
    { id: '5', titulo: 'Corte + Barboterapia', duracao: '1h', preco: 'R$ 68,00', icone: 'cut-outline' },
    { id: '6', titulo: 'Corte + barboterapia + sobrancelha', duracao: '1h 15min', preco: 'R$ 73,00', icone: 'cut-outline' },
    { id: '7', titulo: 'Pézinho', duracao: '15 min', preco: 'R$ 15,00', icone: 'cut-outline' },
    { id: '8', titulo: 'Corte tesoura', duracao: '40 min', preco: 'R$ 45,00', icone: 'cut-outline' },
    { id: '9', titulo: 'Corte feminino', duracao: '40 min', preco: 'R$ 45,00', icone: 'cut-outline' },
    { id: '10', titulo: 'Reflexo marcar no wpp', duracao: '1h', preco: 'R$ 65,00', icone: 'logo-whatsapp' },
    { id: '11', titulo: 'Platinado marcar no wpp', duracao: '1h 30min', preco: 'R$ 110,00', icone: 'logo-whatsapp' },
    { id: '12', titulo: 'Pézinho + barba', duracao: '30 min', preco: 'R$ 40,00', icone: 'cut-outline' },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.containerPrincipal} cantos={['top', 'left', 'right']}>
        <View style={styles.conteudo}>
          <Text style={styles.titulo}>Escolha seu Serviço</Text>

          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
            {listaServicos.map((item) => {
              const isSelected = servicoSelecionado === item.id;
              return (
                <TouchableOpacity
                  key={item.id}
                  style={[styles.card, isSelected && styles.cardselecionado]}
                  onPress={() => setServicoSelecionado(item.id)}
                  activeOpacity={0.8}
                >
                  <Ionicons 
                    name={item.icone} 
                    size={28} 
                    color={isSelected ? '#121212' : '#ffb800'} 
                  />

                  <Text style={[styles.tituloServico, isSelected && styles.textoSelecionado]}>
                    {item.titulo}
                  </Text>

                  <View style={styles.linha}>
                    <Text style={[styles.subtexto, isSelected && styles.textoSelecionado]}>{item.duracao}</Text>
                    <Text style={[styles.Textopreco, isSelected && styles.textoSelecionado]}>{item.preco}</Text>
                  </View>

                  <View style={[styles.botaoCard, isSelected && styles.botaoCardSelecionado]}>
                    <Text style={[styles.botaoCardTexto, isSelected && styles.botaoCardTextoSelecionado]}>
                      {isSelected ? 'Selecionado' : 'Selecionar'}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <TouchableOpacity 
            style={[styles.botaoAvançar, !servicoSelecionado && styles.botaOff]}
            disabled={!servicoSelecionado}
            onPress={() => navigation.navigate('Identificacao')}
          >
            <Text style={styles.TextoAvançar}>Avançar</Text>
          </TouchableOpacity>
        </View>

        <Timeline etapaAtual={2} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: { 
    flex: 1, 
    backgroundColor: '#121212' 
  },
  conteudo: { 
    flex: 1, 
    paddingHorizontal: 20, 
    paddingTop: 10 
  },
  titulo: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#fff', 
    textAlign: 'center', 
    marginBottom: 20 
  },
  scroll: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  card: {
    width: '48%',
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardselecionado: {
    backgroundColor: '#ffb800',
    borderColor: '#ffb800',
  },
  tituloServico: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 6,
    height: 34,
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  subtexto: {
    color: '#888',
    fontSize: 11,
  },
  Textopreco: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
  },
  textoSelecionado: {
    color: '#121212',
  },
  botaoCard: {
    backgroundColor: '#2a2a2a',
    paddingVertical: 6,
    width: '100%',
    borderRadius: 6,
    alignItems: 'center',
  },
  botaoCardSelecionado: {
    backgroundColor: '#121212',
  },
  botaoCardTexto: {
    color: '#ffb800',
    fontSize: 11,
    fontWeight: 'bold',
  },
  botaoCardTextoSelecionado: {
    color: '#ffb800',
  },
  botaoAvançar: { 
    backgroundColor: '#ffb800', 
    padding: 15, 
    borderRadius: 8, 
    alignions: 'center', 
    marginBottom: 10,
    alignItems: 'center'
  },
  botaOff: { 
    backgroundColor: '#333' 
  },
  TextoAvançar: { 
    color: '#121212', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
});
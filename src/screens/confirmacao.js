import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Timeline from '../props/components/Timeline';

export default function Confirmacao({ route, navigation }) {
  const { 
    clienteNome = 'Caio', 
    clienteCelular = '(11) 99999-9999',
    servicoNome = 'Corte + Barboterapia',
    servicoPreco = 'R$ 68,00',
    servicoDuracao = '1h',
    dataSelecionada = '26 de out',
    horarioSelecionado = '10:00'
  } = route.params || {};

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.containerPrincipal} >
        <View style={styles.conteudo}>
          <Text style={styles.Titulo}>Confirmar Agendamento</Text>

          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
           
            <View style={styles.card}>
              <View style={styles.icone}>
                <Ionicons name="cut-outline" size={36} color="#ffb800" />
              </View>

              <Text style={styles.servicoTitulo}>{servicoNome}</Text>
              
              <View style={styles.info}>
                <Ionicons name="time-outline" size={14} color="#ffb800" />
                <Text style={styles.duracao}>{servicoDuracao}</Text>
              </View>

              <View style={styles.espaco} />

              
              <View style={styles.linhaDetalhe}>
                <Text style={styles.Detalhe}>Data e Horário:</Text>
                <Text style={styles.valorDetalhe}>{dataSelecionada} às {horarioSelecionado}</Text>
              </View>

              
              <View style={styles.linhaDetalhe}>
                <Text style={styles.Detalhe}>Cliente:</Text>
                <Text style={styles.valorDetalhe}>{clienteNome}</Text>
              </View>

              <View style={styles.linhaDetalhe}>
                <Text style={styles.Detalhe}>Telemóvel:</Text>
                <Text style={styles.valorDetalhe}>{clienteCelular}</Text>
              </View>

              <View style={styles.espaco} />

              
              <View style={styles.linhaPreco}>
                <Text style={styles.Preco}>Total a Pagar:</Text>
                <Text style={styles.valorPreco}>{servicoPreco}</Text>
              </View>
            </View>
          </ScrollView>

          
          <TouchableOpacity 
            style={styles.botaoConfirmar}
            onPress={() => navigation.navigate('Sucesso')}
          >
            <Text style={styles.textobotao}>Confirmar Agendamento</Text>
          </TouchableOpacity>
        </View>

       
        <Timeline etapaAtual={5} />
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
  Titulo: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#fff', 
    textAlign: 'center', 
    marginBottom: 20 
  },
  scroll: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
  },
  icone: {
    marginBottom: 10,
    backgroundColor: '#2a2a2a',
    padding: 12,
    borderRadius: 50,
  },
  servicoTitulo: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 15,
  },
  duracao: {
    color: '#ffb800',
    fontSize: 12,
    marginLeft: 5,
    fontWeight: '600',
  },
  espaco: {
    width: '100%',
    height: 1,
    backgroundColor: '#333',
    marginVertical: 15,
  },
  linhaDetalhe: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  Detalhe: {
    color: '#888',
    fontSize: 14,
  },
  valorDetalhe: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  linhaPreco: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  Preco: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  valorPreco: {
    color: '#ffb800',
    fontSize: 20,
    fontWeight: 'bold',
  },
  botaoConfirmar: { 
    backgroundColor: '#ffb800', 
    height: 52, 
    borderRadius: 8, 
    alignItems: 'center', 
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10
  },
  textobotao: { 
    color: '#121212', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
});
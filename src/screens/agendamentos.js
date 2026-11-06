import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebaseConfig'; 

export default function MeusAgendamentos({ navigation }) {
  const [celularSalvo, setCelularSalvo] = useState('');
  const [agendamentos, setAgendamentos] = useState([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      let unsubscribe;

      const carregarAgendamentosDoFirebase = async () => {
        setLoading(true);
        try {
          const telefone = await AsyncStorage.getItem('@mandro_barbearia:phone');
          
          if (telefone) {
            setCelularSalvo(telefone);
            const celularLimpo = telefone.replace(/\D/g, '');

            
            const q = query(
              collection(db, 'agendamentos'),
              where('clienteCelular', '==', celularLimpo)
            );

            
            unsubscribe = onSnapshot(q, (snapshot) => {
              const lista = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }));
              setAgendamentos(lista);
              setLoading(false);
            }, (error) => {
              console.error('Erro na escuta do Firestore:', error);
              setLoading(false);
            });
          } else {
            setCelularSalvo('');
            setAgendamentos([]);
            setLoading(false);
          }
        } catch (error) {
          console.error('Erro ao ler AsyncStorage:', error);
          setLoading(false);
        }
      };

      carregarAgendamentosDoFirebase();

      
      return () => {
        if (unsubscribe) unsubscribe();
      };
    }, [])
  );

  if (loading) {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={[styles.container, styles.center]} >
          <ActivityIndicator size="large" color="#ffb800" />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} >
        <View style={styles.conteudo}>
          <Text style={styles.titulo}>Meus Agendamentos</Text>

          {celularSalvo ? (
            <Text style={styles.Telefone}>
              Exibindo agendamentos para: <Text style={styles.telefoneDestaque}>{celularSalvo}</Text>
            </Text>
          ) : null}

          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
            {agendamentos.length > 0 ? (
              agendamentos.map((item) => (
                <View key={item.id} style={styles.card}>
                  <View style={styles.cardHeader}>
                    <View style={styles.servicoInfo}>
                      <Ionicons name="cut-outline" size={20} color="#ffb800" />
                      <Text style={styles.servicoNome}>{item.servico}</Text>
                    </View>
                    <View style={[
                      styles.statusBadge, 
                      item.status === 'Confirmado' ? styles.statusConfirmado : styles.statusConcluido
                    ]}>
                      <Text style={styles.statusText}>{item.status}</Text>
                    </View>
                  </View>

                  <View style={styles.divider} />

                  <View style={styles.cardBody}>
                    <View style={styles.linhaDetalhe}>
                      <Ionicons name="calendar-outline" size={16} color="#888" />
                      <Text style={styles.detalheTexto}>{item.data} às {item.horario}</Text>
                    </View>

                    <View style={styles.linhaDetalhe}>
                      <Ionicons name="cash-outline" size={16} color="#888" />
                      <Text style={styles.detalhePreco}>{item.preco}</Text>
                    </View>
                  </View>
                </View>
              ))
            ) : (
              <View style={styles.vazioContainer}>
                <Ionicons name="calendar-clear-outline" size={50} color="#666" />
                <Text style={styles.vazioTexto}>Ainda não tens nenhum agendamento.</Text>
              </View>
            )}
          </ScrollView>

          
          <TouchableOpacity 
            style={styles.butaoNovo}
            onPress={() => navigation.navigate('TelaInicial')}
          >
            <Text style={styles.butaoTexto}>Tela Inicial</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#121212' 
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
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
    marginBottom: 5 
  },
  Telefone: {
    fontSize: 13,
    color: '#888',
    textAlign: 'center',
    marginBottom: 15,
  },
  telefoneDestaque: {
    color: '#ffb800',
    fontWeight: '600',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#333',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  servicoInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  servicoNome: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  statusConfirmado: {
    backgroundColor: 'rgba(255, 184, 0, 0.15)',
  },
  statusConcluido: {
    backgroundColor: 'rgba(50, 205, 50, 0.15)',
  },
  statusText: {
    color: '#ffb800',
    fontSize: 11,
    fontWeight: 'bold',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#333',
    marginVertical: 12,
  },
  cardBody: {
    gap: 8,
  },
  linhaDetalhe: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detalheTexto: {
    color: '#ccc',
    fontSize: 13,
    marginLeft: 8,
    flex: 1,
  },
  detalhePreco: {
    color: '#ffb800',
    fontSize: 14,
    fontWeight: 'bold',
  },
  vazioContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  vazioTexto: {
    color: '#888',
    fontSize: 14,
    marginTop: 15,
  },
  butaoNovo: { 
    backgroundColor: '#ffb800', 
    height: 52, 
    borderRadius: 8, 
    alignItems: 'center', 
    justifyContent: 'center',
    marginBottom: 15,
    marginTop: 10,
  },
  butaoTexto: { 
    color: '#121212', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
});
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Timeline from '../props/components/Timeline';

export default function Sucesso({ navigation }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} >
        <View style={styles.content}>
          
          <View style={styles.iconContainer}>
            <Ionicons name="checkmark-circle" size={80} color="#ffb800" />
          </View>

          <Text style={styles.titulo}>Agendamento Realizado!</Text>
          
          <Text style={styles.subtitulo}>
            O Seu horário foi reservado com sucesso. O barbeiro já foi notificado e aguarda a sua presença!
          </Text>

          
          <View style={styles.infoCard}>
            <Ionicons name="information-circle-outline" size={20} color="#ffb800" style={{ marginRight: 10 }} />
            <Text style={styles.infoTexto}>
              Enviaremos uma mensagem de confirmação para o teu telemóvel em breve.
            </Text>
          </View>

          
          <TouchableOpacity 
            style={styles.butaoInicio}
            onPress={() => navigation.navigate('agendamentos')} 
          >
            <Text style={styles.butaoTexto}>Meus Agendamentos</Text>
          </TouchableOpacity>
        </View>

        
        <Timeline etapaAtual={6} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#121212' 
  },
  content: { 
    flex: 1, 
    paddingHorizontal: 20, 
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom: 20
  },
  iconContainer: {
    marginBottom: 20,
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#333',
  },
  titulo: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#fff', 
    textAlign: 'center', 
    marginBottom: 10 
  },
  subtitulo: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  infoCard: {
    flexDirection: 'row',
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
    marginBottom: 40,
    width: '100%',
  },
  infoTexto: {
    color: '#ccc',
    fontSize: 13,
    flex: 1,
  },
  butaoInicio: { 
    backgroundColor: '#ffb800', 
    width: '100%',
    height: 52, 
    borderRadius: 8, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  butaoTexto: { 
    color: '#121212', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
});
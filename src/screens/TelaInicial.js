import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';


export default function TelaInicial({ navigation }) {

  const agendarHorario = () => {
        navigation.navigate('EscolhaPro');
    }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.containerPrincipal}>
        <View>
         <Text style={styles.titulo}>Otavio's Barbearia</Text>
         <Image 
        source={require('../props\\foto_capa.jpg')} 
        style={styles.imagem} 
      />
         <Text style={styles.subtitulo}>✂️Régua para todos os dias 📏</Text>
        </View>

        <View style={{ paddingTop: 90 }}>
          <TouchableOpacity style={styles.botao} onPress={agendarHorario}>
            <Text style={styles.textoBotao}>Agendar Horário</Text>
          </TouchableOpacity>
        </View>
        


      <StatusBar style='light' />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  containerPrincipal: { 
    flex: 1, 
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    width: 330,
    height: 200
  },
  titulo: {
    color: '#FDFDFD',
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitulo: {
    color: '#FDFDFD',
    alignSelf: 'center',
    fontSize: 18,
    marginTop: 10
  },
  botao: {
    backgroundColor: '#C6A53E', 
    padding: 15, 
    borderRadius: 10,
    marginBottom: 10,
    width: 320

  },
  textoBotao: {
    color: '#121212', 
    fontSize: 18,
    selfAlign: 'center',
    textAlign: 'center',
    fontWeight: 'bold'
  }


});

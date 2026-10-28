import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity, 
  Image, 
  KeyboardAvoidingView, 
  Platform,
  ScrollView 
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Timeline from '../props/components/Timeline';

export default function Identificacao({ navigation }) {
  const [nome, setNome] = useState('');
  const [celular, setCelular] = useState('');

  // Função simples para aplicar máscara de telefone: (XX) XXXXX-XXXX
  const handleCelularChange = (text) => {
    const limpo = text.replace(/\D/g, ''); // Remove tudo que não for número
    let formatado = limpo;

    if (limpo.length > 2 && limpo.length <= 7) {
      formatado = `(${limpo.slice(0, 2)}) ${limpo.slice(2)}`;
    } else if (limpo.length > 7) {
      formatado = `(${limpo.slice(0, 2)}) ${limpo.slice(2, 7)}-${limpo.slice(7, 11)}`;
    }

    setCelular(formatado);
  };

 
  const isFormValido = nome.trim().length > 2 && celular.replace(/\D/g, '').length === 11;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.containerPrincipal}>
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
           
            <Text style={styles.Titulo}>Otavio's Barbearia</Text>

            
            <View style={styles.logoquadrado}>
              <Image 
                source={require('../props\\foto_capa.jpg')} 
                style={styles.logo}
                resizeMode="cover"
              />
            </View>

            <Text style={styles.subTitulo}>Informe seus dados:</Text>

            
            <View style={styles.inserirDados}>
              <Text style={styles.prefixo}>🇧🇷 +55</Text>
              <TextInput
                style={styles.input}
                placeholder="seu celular"
                placeholderTextColor="#666"
                keyboardType="phone-pad"
                maxLength={15}
                value={celular}
                onChangeText={handleCelularChange}
              />
            </View>

            
            <View style={styles.inserirDados}>
              <TextInput
                style={styles.input}
                placeholder="seu nome"
                placeholderTextColor="#666"
                value={nome}
                onChangeText={setNome}
              />
            </View>

           
            <TouchableOpacity 
              style={[styles.botaoAvançar, !isFormValido && styles.botaoOff]}
              disabled={!isFormValido}
              onPress={() => navigation.navigate('Confirmacao', { clienteNome: nome, clienteCelular: celular })}
            >
              <Text style={styles.textoBotao}>Avançar</Text>
            </TouchableOpacity>
          </ScrollView>

          {}
          <Timeline etapaAtual={4} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: { 
    flex: 1, 
    backgroundColor: '#121212' 
  },
  scroll: { 
    flexGrow: 1, 
    paddingHorizontal: 20, 
    paddingTop: 10,
    justifyContent: 'center',
    paddingBottom: 20
  },
  Titulo: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#fff', 
    textAlign: 'center', 
    marginBottom: 15 
  },
  logoquadrado: {
    width: '100%',
    height: 180,
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#333'
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  subTitulo: { 
    fontSize: 15, 
    color: '#aaa', 
    textAlign: 'center', 
    marginBottom: 15 
  },
  inserirDados: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
    paddingHorizontal: 15,
    height: 52,
    marginBottom: 15,
  },
  prefixo: {
    color: '#fff',
    fontSize: 14,
    marginRight: 10,
    fontWeight: '500'
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 15,
  },
  botaoAvançar: { 
    backgroundColor: '#ffb800', 
    height: 52, 
    borderRadius: 8, 
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: 10 
  },
  botaoOff: { 
    backgroundColor: '#333' 
  },
  textoBotao: { 
    color: '#121212', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
});
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';



import TelaInicial from './src/screens/TelaInicial';
import EscolhaPro from './src/screens/EscolhaPro';
import Servico from './src/screens/Servico';
import DataHora from './src/screens/datahora';
import Identificacao from './src/screens/identificação';
import Confirmacao from './src/screens/confirmacao';
import Sucesso from './src/screens/sucesso';

const Stack = createNativeStackNavigator();


export default function App() {

  
  return (
    
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="EscolhaPro" component={EscolhaPro} />
        <Stack.Screen name="Servico" component={Servico} />
        <Stack.Screen name="DataHora" component={DataHora} />
        <Stack.Screen name="Identificacao" component={Identificacao} />
        <Stack.Screen name="Confirmacao" component={Confirmacao} />
        <Stack.Screen name="Sucesso" component={Sucesso} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
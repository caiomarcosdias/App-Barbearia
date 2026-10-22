import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Timeline({ etapaAtual }) {
  const navigation = useNavigation();

  const etapas = [
    { id: 1, nome: 'EscolhaPro' },
    { id: 2, nome: 'Servico' },
    { id: 3, nome: 'DataHora' },
    { id: 4, nome: 'Identificacao' },
    { id: 5, nome: 'Confirmacao' },
  ];

  return (
    <View style={styles.timelineContainer}>
      {etapas.map((etapa, index) => {
        const isAtiva = etapaAtual === etapa.id;
        const isConcluida = etapaAtual > etapa.id;

        return (
          <React.Fragment key={etapa.id}>
            {index > 0 && <View style={[styles.line, isConcluida && styles.lineCompleted]} />}

            <TouchableOpacity 
              style={[
                styles.circle, 
                isAtiva && styles.circleActive,
                isConcluida && styles.circleCompleted
              ]}
              onPress={() => {
                if (etapa.id <= etapaAtual) {
                  navigation.navigate(etapa.nome);
                }
              }}
            >
              <Text style={[styles.circleText, (isAtiva || isConcluida) && styles.circleTextActive]}>
                {etapa.id}
              </Text>
            </TouchableOpacity>
          </React.Fragment>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  timelineContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderTopWidth: 1,
    borderTopColor: '#121212',
    backgroundColor: '#121212',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  circleActive: {
    backgroundColor: '#ffb800',
  },
  circleCompleted: {
    backgroundColor: '#ffb800',
  },
  circleText: {
    color: '#888',
    fontWeight: 'bold',
    fontSize: 12,
  },
  circleTextActive: {
    color: '#fff',
  },
  line: {
    height: 2,
    flex: 1,
    backgroundColor: '#ffb800',
    marginHorizontal: -4,
    zIndex: 1,
  },
  lineCompleted: {
    backgroundColor: '#4cd964',
  },
});
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Timeline from '../props/components/Timeline';
import { DateCard } from '../props/components/cardData';
import { TimeCard } from '../props/components/Cardhorario';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function DataHora({ navigation }) {

  const gerarDias = () => {
    const proximosDias = [];
    const diasSemanaNomes = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const mesesNomes = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

    for (let i = 0; i < 7; i++) {
      const data = new Date();
      data.setDate(data.getDate() + i);

      proximosDias.push({
        id: i,
        diaSemana: diasSemanaNomes[data.getDay()],
        diaMes: data.getDate(),
        mes: mesesNomes[data.getMonth()],
        dataCompleta: data, 
      });
    }
    return proximosDias;
  };

  const dias = gerarDias();

  const [diaSelecionado, setDiaSelecionado] = useState(dias[0].diaMes);
  const [horarioSelecionado, setHorarioSelecionado] = useState('');

  
  const todosHorarios = [
    '08:00', '09:00', '10:00', '11:00',
    '13:00', '14:00', '15:00', '16:00',
    '17:00', '18:00', '19:00', '20:00'
  ];

  
  const getHorariosDisponiveis = () => {
    const agora = new Date();
    const diaAtual = agora.getDate();
    const horaAtual = agora.getHours();
    const minutoAtual = agora.getMinutes();

    
    if (diaSelecionado === diaAtual) {
      return todosHorarios.filter((horario) => {
        const [horaStr, minutoStr] = horario.split(':');
        const horaH = parseInt(horaStr, 10);
        const minutoM = parseInt(minutoStr, 10);

       
        if (horaH > horaAtual) return true;
        if (horaH === horaAtual && minutoM > minutoAtual) return true;
        return false; 
      });
    }

    
    return todosHorarios;
  };

  const horariosDisponiveis = getHorariosDisponiveis();

  return (
    <SafeAreaProvider style={styles.containerPrincipal}>
      
      <SafeAreaView style={styles.conteiner}>
        <Text style={styles.cabecalho}>Selecione Data e Hora</Text>

        {}
        <Text style={styles.titulo}>Data</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.diasContainer}>
          {dias.map((item) => (
            <DateCard
              key={item.id}
              diaSemana={item.diaSemana}
              diaMes={item.diaMes}
              mes={item.mes}
              isSelected={diaSelecionado === item.diaMes}
              onPress={() => {
                setDiaSelecionado(item.diaMes);
                setHorarioSelecionado(''); 
              }}
            />
          ))}
        </ScrollView>

        {}
        <Text style={styles.titulo}>Horários Disponíveis</Text>
        
        {horariosDisponiveis.length > 0 ? (
          <View style={styles.quadrohorarios}>
            {horariosDisponiveis.map((horario) => (
              <TimeCard
                key={horario}
                horario={horario}
                isSelected={horarioSelecionado === horario}
                onPress={() => setHorarioSelecionado(horario)}
              />
            ))}
          </View>
        ) : (
          <View style={styles.avisoContainer}>
            <Text style={styles.avisotexto}>Não há mais horários disponíveis para hoje.</Text>
          </View>
        )}

        <TouchableOpacity 
          style={[styles.botaoAvançar, !horarioSelecionado && styles.botaodesabilitar]}
          disabled={!horarioSelecionado}
          onPress={() => navigation.navigate('Servico')}
        >
          <Text style={styles.botaotexto}>Avançar</Text>
        </TouchableOpacity>
      </SafeAreaView>

      
      <SafeAreaView>
      <Timeline etapaAtual={2} />
      </SafeAreaView>
      
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: { flex: 1, backgroundColor: '#121212' },
  conteiner: { flex: 1, padding: 20, justifyContent: 'center' },
  cabecalho: { fontSize: 20, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginBottom: 20 },
  titulo: { fontSize: 16, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  diasContainer: { marginBottom: 20, maxHeight: 90 },
  quadrohorarios: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 20 },
  avisoContainer: { padding: 20, alignItems: 'center', marginBottom: 20 },
  avisotexto: { color: '#888', fontSize: 14, textAlign: 'center' },
  botaoAvançar: { backgroundColor: '#ffb800', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  botaodesabilitar: { backgroundColor: '#444' },
  botaotexto: { color: '#121212', fontWeight: 'bold', fontSize: 16 },
});
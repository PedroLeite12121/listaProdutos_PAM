import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

export default function Contato({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.caixa}>  
        <Text style={styles.titulo}>Formas de Contato</Text>
        <Text style={styles.tituloInformacao}>Email</Text>
        <Text style={styles.text}>produtos123@gmail.com</Text>

        <Text style={styles.tituloInformacao}>Número</Text>
        <Text style={styles.text}>(11) 91234-5678</Text>

        <Text style={styles.tituloInformacao}>Redes Sociais</Text>
        <Text style={styles.text}>facebook.com/produtos123</Text>
        <Text style={styles.text}>instagram.com/produtos123</Text>
      </View>
    </View>
  );
}

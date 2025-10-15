import React from 'react';
import { View, Text, Button } from 'react-native';
import { Image } from 'react-native';
import { styles } from './styles';

export default function DetailsScreen({route, navigation }) {
  let {name, descricao, preco, fornecedor, dimensoes, utilizacao, imagem, imagem2} = route.params
  return (
    <View style={styles.container}>
      <View style={styles.linha}>
        <View style={styles.linhaEspecifica}>
          <Image
                source={imagem}
                style={styles.imagem}
          />

          <View styles={styles.infoProduto}>
            <Text style={styles.nomeProduto}>{name}</Text>
            <Text style={styles.descricaoProduto}>{descricao}</Text>
            <Text style={styles.precoProduto}>{preco}</Text>
          </View>
        </View>
      
      <View style={styles.linhaEspecifica2}>
        <Image
                source={imagem2}
                style={styles.imagem}
        />
        <View style={styles.infoProduto2}>

          <Text style={styles.infosProdutoExtra}>Fornecedor: {fornecedor}</Text>

          <Text style={styles.infosProdutoExtra}>Dimensões: {dimensoes}</Text>

          <Text style={styles.infosProdutoExtra}>Utilização: {utilizacao}</Text>
        </View>
      </View>
    </View>
        <View style={styles.contatoBtn}>
            <Button
              title="CONTATOS"
              onPress={() => navigation.navigate('Contato')}
            />
        </View>
    </View>
  );
}
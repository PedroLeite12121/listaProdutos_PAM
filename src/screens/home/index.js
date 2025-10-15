
import {ScrollView, View, Text, Button, Image } from 'react-native';
import {produtos} from './bd.js';
import { styles } from './styles.js';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.allProdutos}>
        
        <View style={styles.produtoCaixa}>
          <Image
            source={produtos[0].imagem} // for local images
            style={styles.imagem}
          />

          <View style={styles.infoProduto}>
            <Text style={styles.nomeProduto}>{produtos[0].nome}</Text>
            <Text style={styles.descricaoProduto}>{produtos[0].descricao}</Text>
            <Text style={styles.precoProduto}>{produtos[0].preco}</Text>
          </View>


          <View style={styles.conferirBtn}>
          <Button 
            title="Conferir"
            onPress={() => navigation.navigate('Detalhes',{ name: produtos[0].nome, descricao: produtos[0].descricao, preco: produtos[0].preco, fornecedor: produtos[0].fornecedor, dimensoes: produtos[0].dimensoes, utilizacao: produtos[0].utilizacao, imagem: produtos[0].imagem, imagem2: produtos[0].imagem2})}
          />
          </View>
        </View>

        <View style={styles.produtoCaixa}>
          <Image
            source={produtos[1].imagem} // for local images
            style={styles.imagem}
          />

          <View style={styles.infoProduto}>
            <Text style={styles.nomeProduto}>{produtos[1].nome}</Text>
            <Text style={styles.descricaoProduto}>{produtos[1].descricao}</Text>
            <Text style={styles.precoProduto}>{produtos[1].preco}</Text>
          </View>
          <View style={styles.conferirBtn}>
            <Button
              title="Conferir"
              onPress={() => navigation.navigate('Detalhes',{ name: produtos[1].nome, descricao: produtos[1].descricao, preco: produtos[1].preco, fornecedor: produtos[1].fornecedor, dimensoes: produtos[1].dimensoes, utilizacao: produtos[1].utilizacao, imagem: produtos[1].imagem, imagem2: produtos[1].imagem2})}
            />
          </View>
        </View>

        <View style={styles.produtoCaixa}>
          <Image
            source={produtos[2].imagem} // for local images
            style={styles.imagem}
          />

          <View style={styles.infoProduto}>
            <Text style={styles.nomeProduto}>{produtos[2].nome}</Text>
            <Text style={styles.descricaoProduto}>{produtos[2].descricao}</Text>
            <Text style={styles.precoProduto}>{produtos[2].preco}</Text>
          </View>
          <View style={styles.conferirBtn}>
            <Button
              title="Conferir"
              onPress={() => navigation.navigate('Detalhes',{ name: produtos[2].nome, descricao: produtos[2].descricao, preco: produtos[2].preco, fornecedor: produtos[2].fornecedor, dimensoes: produtos[2].dimensoes, utilizacao: produtos[2].utilizacao, imagem: produtos[2].imagem, imagem2: produtos[2].imagem2})}
            />
          </View>
        </View>

        <View style={styles.produtoCaixa}>
          <Image
            source={produtos[3].imagem} // for local images
            style={styles.imagem}
          />

          <View style={styles.infoProduto}>
            <Text style={styles.nomeProduto}>{produtos[3].nome}</Text>
            <Text style={styles.descricaoProduto}>{produtos[3].descricao}</Text>
            <Text style={styles.precoProduto}>{produtos[3].preco}</Text>
          </View>

          <View style={styles.conferirBtn}>
            <Button
              title="Conferir"
              onPress={() => navigation.navigate('Detalhes',{ name: produtos[3].nome, descricao: produtos[3].descricao, preco: produtos[3].preco, fornecedor: produtos[3].fornecedor, dimensoes: produtos[3].dimensoes, utilizacao: produtos[3].utilizacao, imagem: produtos[3].imagem, imagem2: produtos[3].imagem2})}
            />
          </View>
        </View>

        <View style={styles.produtoCaixa}>
          <Image
            source={produtos[4].imagem}
             style={styles.imagem}
          />
          
          <View style={styles.infoProduto}>
            <Text style={styles.nomeProduto}>{produtos[4].nome}</Text>
            <Text style={styles.descricaoProduto}>{produtos[4].descricao}</Text>
            <Text style={styles.precoProduto}>{produtos[4].preco}</Text>
          </View>

          <View style={styles.conferirBtn}>
            <Button
              title="Conferir"
              onPress={() => navigation.navigate('Detalhes',{ name: produtos[4].nome, descricao: produtos[4].descricao, preco: produtos[4].preco, fornecedor: produtos[4].fornecedor, dimensoes: produtos[4].dimensoes, utilizacao: produtos[4].utilizacao, imagem: produtos[4].imagem, imagem2: produtos[4].imagem2})}
            />
          </View>
        </View>
      </View>
      <View style={styles.contatoBtn}>
      <Button
        title="CONTATOS"
        onPress={() => navigation.navigate('Contato')}
      />
      </View>
    </ScrollView>
  );
}

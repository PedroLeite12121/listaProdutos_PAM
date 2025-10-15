import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
  },
  
  contatoBtn: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  allProdutos: {
    gap: '1vh',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '2vh',
    alignItems: 'center',
  },

  produtoCaixa: {
    padding: '1vh',
    width: '70%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    height: '40vh',
    backgroundColor: 'white',
  },
  conferirBtn: {
    bottom: '1vh',
    right: '1vh',
    position: 'absolute',
  },

  infoProduto: {
    
    marginLeft: '5vh',
    display: 'flex', 
    flexDirection: 'column', 
    gap: '1vh'
  },

  imagem: { 
    width: '30vh', 
    height: '30vh', 
    marginLeft: '5vh'
  },
  
  nomeProduto: {
    fontSize: '4vh',
  },

  descricaoProduto: {
    fontSize: '3vh',
  },

  precoProduto: {
    marginTop: '2vh',
    fontSize: '5vh',
  } 
});


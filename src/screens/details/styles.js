import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },

    linhaEspecifica: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
    },

     linhaEspecifica2: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        borderTopWidth: '0.3vh',
        borderTopColor: 'grey',
        paddingTop: '2vh',
        marginTop: '2vh',
     },



    imagem: { 
        marginRight: '5vh',
        borderRadius: '2vh',
        backgroundColor: 'white',
        width: '40vh', 
        height: '40vh', 
        resizeMode: 'contain'
    },

    linha: {
        width: '70%',
        padding: '1vh',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: '1vh',
        marginBottom: '2vh',
    },

    infos: {
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1vh',
        maxWidth: '50vh',
    },

     contatoBtn: {
        position: 'absolute',
        top: 0,
        left: 0,
    },

    nomeProduto: {
        fontSize: '5.5vh',
    },

    descricaoProduto: {
        maxWidth: '70%',
        fontSize: '3vh',
    },

    precoProduto: {
        marginTop: '10vh',
        fontSize: '5.5vh',

    },

    infoProduto: {
        marginLeft: '5vh',
        display: 'flex',
    },

    infoProduto2: {
        width: '55%',
        marginLeft: '8vh',
        borderRadius: '1vh',
        backgroundColor: 'rgba(242, 242, 242, 1)',
        gap: '1vh',
        padding: '2vh',
        display: 'flex',
    },

    infosProdutoExtra: {
        borderRadius: '1vh',
        padding: '1vh',
        fontSize: '3.5vh',
    },

    



});


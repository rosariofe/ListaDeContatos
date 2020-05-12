import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Cartao from './Cartao';
import CSS from '../CSS/CSS';
import TamanhoCartao from '../TamanhoCartao/TamanhoCartao';

const ItemContato = (props) => {

    const excluirContato = () =>{

        Alert.alert(

            'Excluir Contato',
            'Deseja realmente Excluir esse Contato',
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                { 
                    text: "OK", 
                    onPress: () => props.onDelete(props.keys)
                }
            ],

            { cancelable: false }
        )
    } 

{/*props.onDelete.bind(this, props.keys)*/}

    return(
        <TouchableOpacity onLongPress={excluirContato} onPress={props.contSelecionado.bind(this, props.keys)}>
            {/*<View style={styles.itemNaLista}> */}
            <Cartao estilos={styles.itemNaLista}>
                <Text>{'Cod:        ' + props.keys}</Text>
                <Text>{'Nome:       ' + props.contato}</Text>
                <Text>{'Telefone:   ' + props.telefone}</Text>
            </Cartao>
            {/*</View>*/}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    
    itemNaLista: {
        flexDirection: 'column',
        backgroundColor: CSS.corCartao,
        marginBottom: TamanhoCartao.eight
    }

});

export default ItemContato;
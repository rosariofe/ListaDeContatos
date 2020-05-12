import React from 'react';
import {View, StyleSheet} from 'react-native';

import TamanhoCartao from '../TamanhoCartao/TamanhoCartao'


const Cartao = (props) => {
    return (
    <View style={{...estilos.cartao, ...props.estilos}}>{props.children}</View>
    );


};

const estilos = StyleSheet.create({
    cartao: {
        shadowColor: 'black',
        shadowOffset: {
        width: TamanhoCartao.zero,
        height: TamanhoCartao.two
        },
        shadowRadius: TamanhoCartao.six,
        shadowOpacity: TamanhoCartao.cartaoShadow,
        backgroundColor: 'white',
        elevation: TamanhoCartao.four,
        padding: TamanhoCartao.twelve,
        borderRadius: TamanhoCartao.twelve
    }

});

export default Cartao;
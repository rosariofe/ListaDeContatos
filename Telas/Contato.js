import React, { useState } from 'react';

import { View, StyleSheet, Text, Button, FlatList, TextInput} from 'react-native';

import Cartao from '../Components/Cartao';


// import { Container } from './styles';

const Contato = (props) => {


    const [contatos, setContatos] = useState(props.editContatos);
    const [keyContato, setKeyContato] = useState(props.editCont);
    const[contador, setContador] = useState(props.cont)

    const[contato, setContato] = useState(contatos.filter(contato => contato.key === keyContato));
    const[contat, setContat] = useState('');
    const [telefone, setTelefone] = useState('');
    const[altera, setAltera] = useState(false)
    
    const capturaContato = (contato) =>{setContat(contato);}
    const capturaTelefone = (telefone) =>{setTelefone(telefone);}


    const alterarOContato = (conts, telefone) => {

        setContato([{key: keyContato, cont:conts, tel:telefone}]);

        setContatos(contatos => {const filter = contatos.filter(contato => contato.key !== keyContato);
            return filter;
        });
              
        setContatos((contatos) => { 
            return [...contatos, {key:keyContato, cont:conts, tel:telefone}]
        });

        {setAltera(false)}

    }


    let alteraContato = <View/>;
    
    if(altera){

        alteraContato =
             <View style={estilos.cadastroContato}>
            <TextInput 
                placeholder="Nome" 
                style={estilos.cadastroInputText} 
                onChangeText={capturaContato}
                value={contat} 
            />
            <TextInput 
                placeholder="Telefone"
                keyboardType="number-pad" 
                style={estilos.cadastroInputText} 
                onChangeText={capturaTelefone}
                value={telefone}
            />
            <Button 
                title="Confirmar"
                onPress = {() =>{alterarOContato(contat, telefone)}}
            
            />
            </View>
    }


    return(
        <View style={estilos.container}>
                <FlatList
                    data = {contato}
                    renderItem = {cont => ( 
                        <Cartao estilos={estilos.itemNaLista}>
                            <Text style={estilos.texto}>Nome: {cont.item.cont} </Text>
                            <Text style={estilos.texto}> Telefone: {cont.item.tel} </Text>
                        </Cartao>
                    )}/>
            <View style={estilos.botoes}>
                <View style={estilos.botao}> 
                    <Button 
                        title = 'Alterar'
                        onPress = {() =>{setAltera(true)}}
                    />
                </View>
                <View style={estilos.botao}>
                    <Button 
                        title='Voltar'
                        onPress ={() => {props.voltar(contatos, contador)}}
                    />
                </View> 
            </View>
            <View>
                    {alteraContato}
                        
            </View>
         </View>
    );
};


const estilos = StyleSheet.create({
    container: {
        padding: 2,
      },
    botoes: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    botao: {
        width: 100
    },
    itemNaLista: {
        flexDirection: 'column',
        backgroundColor: '#4F4F4F',
        marginBottom: 8,
        alignItems: 'center'
    },
    texto: {
        fontSize: 28,
        marginBottom: 15,
        color: 'white'
        
    },
    cadastroContato: {
        flexDirection: 'column',
        justifyContent: 'space-between', 
        marginBottom: 20,
    },
    cadastroInputText: {
        fontSize:20,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        marginBottom: 5,
        padding: 1
    
      }
})

export default Contato;
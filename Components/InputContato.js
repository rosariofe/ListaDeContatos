import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import CSS from '../CSS/CSS';
import TamanhoCartao from '../TamanhoCartao/TamanhoCartao';


const InputContato = (props) => {
    const [contato, setContato] =useState('');
    const [telefone, setTelefone] = useState('');

    const capturaContato = (contato) =>{setContato(contato);}
    const capturaTelefone = (telefone) =>{setTelefone(telefone);}

    return(
        <View style={styles.cadastroContato}>
            <TextInput 
                placeholder="Nome" 
                style={styles.cadastroInputText} 
                onChangeText={capturaContato}
                value={contato} 
            />
            <TextInput 
                placeholder="Telefone"
                keyboardType="number-pad" 
                style={styles.cadastroInputText} 
                onChangeText={capturaTelefone}
                value={telefone}
            />
            <Button 
                title="Adicionar"
                color={CSS.corBotao}
                onPress={() => props.onAdicionarContato(contato, telefone)}
            />

        </View>
    );
}


const styles = StyleSheet.create({

    cadastroContato: {
        flexDirection: 'column',
        justifyContent: 'space-between', 
        marginBottom: TamanhoCartao.twenty,
    },
    cadastroInputText: {
        fontSize:TamanhoCartao.twenty,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: TamanhoCartao.one,
        marginBottom: TamanhoCartao.five,
        padding: TamanhoCartao.one
    
      }
});

export default InputContato;
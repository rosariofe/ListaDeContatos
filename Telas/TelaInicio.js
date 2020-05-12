import React, {useState} from 'react';

import {StyleSheet, Text, View, FlatList} from 'react-native';

import ItemContato from '../Components/ItemContato';
import InputContato from '../Components/InputContato';

import TamanhoCartao from '../TamanhoCartao/TamanhoCartao';


const TelaInicio = (props) => {

    const[contatos, setContatos] = useState(props.contatosGeral);

    const[contadorContato, setContadorContato] = useState(props.cont);

    const[contato, setContato] = useState([]);
  
    const adicionarContato = (contato, telefone) =>{
      setContatos ((contatos) =>{
        setContadorContato(contadorContato + 2);
        return [...contatos, {key:contadorContato.toString(), cont:contato, tel:telefone}];
      }); 
    };
  
    const removerContato = (keyASerRemovida) => {
      
        setContatos(contatos => {
        const filter = contatos.filter(contato => contato.key !== keyASerRemovida);
        
        return filter;
        
      });
    };

    const contatoSelecionado = (keyContato) => {

      props.keyContatoSelecionado(keyContato);
      props.alteraTela(contatos, contadorContato);

    }

        
    return(
        <View>
            <View><Text style={styles.titulo}>Cadastrar Contatos</Text></View>
                <InputContato onAdicionarContato ={adicionarContato}/>
            <View>
                <View><Text style={styles.titulo}>Lista de Contatos</Text></View>
                <FlatList
                data = {contatos}
                renderItem = {contato => (
                    <ItemContato 
                    keys={contato.item.key} 
                    contato={contato.item.cont} 
                    telefone ={contato.item.tel}
                    onDelete={removerContato}
                    contSelecionado={contatoSelecionado}
                    />
                    )}
                />
                
            </View>
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        padding:TamanhoCartao.fifty,
      },
      
      titulo: {
        fontSize: TamanhoCartao.thirty,
        marginBottom:TamanhoCartao.twenty
      }
});


export default TelaInicio;
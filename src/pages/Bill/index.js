import React from 'react';
import { Text,  View, TextInput, TouchableOpacity, Picker} from 'react-native';
import styles from './styles';
import DatePicker from 'react-native-datepicker';



export default function Bill () {
   

    return (
        <View style={styles.container}>
        <View style={styles.headerContainer}>
        </View>
               
<View style={styles.form}>
    <Text style={styles.billTitle}>Nome do estabelecimento:</Text>
     <TextInput style={styles.input} placeholder="Insira um nome" placeholderTextColor='#999' autoCapitalize="words" autoCorrect={false}/>

    <Text style={styles.billTitle}>tipo de estabelecimento:</Text>
     <Picker>
        <Picker.Item label="Esolha um tipo" value="0" />
        <Picker.Item label="tipo 1" value="1" />
        <Picker.Item label="tipo 2" value="2" />
         </Picker>
    
    <Text style={styles.billTitle}>Data de compra:</Text>
    <DatePicker style={{width: 200}} date={() => []} mode="date" placeholder="Selecione uma data" format="DD-MM-YYYY"
     minDate="01-01-2016" maxDate="01-01-2019" confirmBtnText="Confirm" cancelBtnText="Cancel"/>
                
    <Text style={styles.billTitle}>Data de entrega:</Text>
    <DatePicker style={{width: 200}} date={() => []}  mode="date"  placeholder="Selecione uma data" format="DD-MM-YYYY"
    minDate="01-01-2016" maxDate="01-01-2019" confirmBtnText="Confirm" cancelBtnText="Cancel"/>
    
    <Text style={styles.billTitle}>Valor:</Text>
     <TextInput style={styles.input} placeholder="Insira um Valor" placeholderTextColor='#999' autoCapitalize="words" autoCorrect={false}/>
    
<TouchableOpacity style={styles.ButtonConfirm} onPress={() => {}}>
    <Text style={styles.textButton}>Salvar</Text>
         </TouchableOpacity>
             <TouchableOpacity style={styles.ButtonCancel} onPress={() => {}}>
                <Text style={styles.textButton}>Cancelar</Text>
                 </TouchableOpacity>
           
                        </View>
                            </View>
    )
}



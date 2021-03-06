import React from 'react';
import { Text,  View, TextInput, TouchableOpacity, Picker} from 'react-native';
import styles from './styles';
import DatePicker from 'react-native-datepicker';
import ConfirmButton from '../../components/Buttons/ConfirmButton'
import CancelButton from '../../components/Buttons/CancelButton'

export default function AddBill ( {navigation }) {   

    return (
        <View style={styles.container}>
            <View style={styles.mainFrame}>
                <Text style={styles.billTitle}>Nome do estabelecimento:</Text>
                <TextInput style={styles.input} placeholder="Insira um nome" placeholderTextColor='#999' autoCapitalize="words" autoCorrect={false}/>

                <Text style={styles.billTitle}>Tipo de estabelecimento:</Text>
                <Picker style={styles.billPicker}>
                    <Picker.Item label="Selecione uma opção" color="#999" value="0" />
                    <Picker.Item label="Supermercado" value="1" />
                    <Picker.Item label="Loja de Departamentos" value="2" />
                    <Picker.Item label="Loja de Roupas" value="3" />
                    <Picker.Item label="Mercado" value="4" />
                    <Picker.Item label="Supermercado" value="5" />
                </Picker>
                
                <Text style={styles.billTitle}>Data de compra:</Text>
                <DatePicker style={styles.billData} date={() => []} mode="date" placeholder="Selecione uma data" format="DD-MM-YYYY"
                minDate="01-01-2016" maxDate="01-01-2019" confirmBtnText="Confirm" cancelBtnText="Cancel"/>
                            
                <Text style={styles.billTitle}>Data de entrega:</Text>
                <DatePicker style={styles.billData} date={() => []}  mode="date"  placeholder="Selecione uma data" format="DD-MM-YYYY"
                minDate="01-01-2016" maxDate="01-01-2019" confirmBtnText="Confirm" cancelBtnText="Cancel"/>
                
                <Text style={styles.billTitle}>Valor:</Text>
                <TextInput style={styles.input} placeholder="Insira um Valor" placeholderTextColor='#999'
                autoCorrect={false} keyboardType="phone-pad"/>
                
                <View style={styles.formButton}>
                    <ConfirmButton text="Adicionar" onPress={() => navigation.navigate("Página Inicial")}/>
                    <CancelButton text="Cancelar" onPress={() => navigation.navigate("Página Inicial")}/>        
                </View>           
            </View>
    </View>                  
        )
}
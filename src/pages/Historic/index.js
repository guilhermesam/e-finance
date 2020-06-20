import React, { useEffect, useState } from 'react';
import { FlatList, Picker, View, Text } from 'react-native';
import Bill from '../../components/Containers/Bill'
import ClearHistoryButton from '../../components/Buttons/ClearHistoryButton'

import styles from './styles';

export default function Historic() {

    const [bills, setBills] = useState([]);

    useEffect( () => {
        const data = [
            {
                id: 1,
                establishmentName: 'Supermercados Peruzzo',
                establishmentType: 'Supermercado',
                value: 'R$ 1000,00',
                date: '01/06/2020',
                doneAt: null
            },
            {
                id: 2,
                establishmentName: 'Restaurante ABC',
                establishmentType: 'Restaurante',
                value: 'R$ 1000,00',
                date: '01/06/2020',
                doneAt: '01/06/2020'
            },
        ]
        
        setBills(data);

    }, [])

    const toggleCheck = billId => {
        const checkBills = [...bills]
        checkBills.forEach(bill => {
            if (bill.id === billId) {
                bill.doneAt = bill.doneAt ? null : new Date()
            }
        })

        setBills(checkBills)
    }

    const clearHistoric = () => {
        const checkBills = [...bills]
        checkBills.splice(0, checkBills.length)
        setBills(checkBills)
    }

        return (
            <View style={styles.container}>
                <View style={styles.mainFrame}>
                    <Picker style={styles.billPicker}>
                        <Picker.Item label="Filtro de pesquisa" color="#999" value="0"/>
                        <Picker.Item label="Mês passado..." value="1"/>
                        <Picker.Item label="Últimos 3 meses..." value="2"/>
                        <Picker.Item label="Últimos 6 meses..." value="3"/>
                        <Picker.Item label="Últimos 12 meses..." value="4"/>
                    </Picker>
                    {bills.length == 0
                    ? <Text style={styles.emptyHistoricWarning}>O histórico está vazio</Text>
                    : <FlatList
                        data={bills}
                        keyExtractor={ (item, index ) => index.toString()}
                    renderItem={({ item }) => <Bill {...item} onPress={toggleCheck}/>} /> }
                </View>
                    <ClearHistoryButton onPress={clearHistoric}/>
                </View>
        ) 
    }
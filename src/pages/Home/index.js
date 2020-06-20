import React, { useState, useEffect } from 'react'
import { FlatList, Text, View } from 'react-native';
import styles from './styles'
import Bill from '../../components/Containers/Bill'
import { Feather } from '@expo/vector-icons'
import moment from 'moment'
import 'moment/locale/pt-br'
import { TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {

    const today = moment().locale('pt-br').format('ddd, D [de] MMM')

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

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.openDrawerButton} onPress={() => navigation.openDrawer()}>
                    <Feather name="menu" size={30} color="#5C5C5C"/>
                </TouchableOpacity> 
                <Text style={styles.today}>{today}</Text>
            </View>

            <View style={styles.mainFrame}>
                <Text style={styles.headerText}>
                    Lançamentos Pendentes
                </Text>
                <FlatList
                    data={bills}
                    keyExtractor={ (item, index) => index.toString() }
                    renderItem={ ({item}) => (
                        <Bill {...item} onPress={toggleCheck}/>
                    )}
                />
            </View>   
            <View style={styles.bottomButtonContainer}>
                <TouchableOpacity style={styles.addBillButton} onPress={() => navigation.navigate("Adicionar Conta")}>
                    <Feather name="plus" size={30} color="white"/>
                </TouchableOpacity> 
            </View>   
        </View>
    )
}
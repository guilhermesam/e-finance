import React from 'react'
import { FlatList, Text, View } from 'react-native';
import styles from './styles'
import Bill from '../../components/Containers/Bill'
import { Feather } from '@expo/vector-icons'
import moment from 'moment'
import 'moment/locale/pt-br'
import { TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {

    const today = moment().locale('pt-br').format('ddd, D [de] MMM')

    const renderItem = ({ item: bills }) => (
        <Bill establishmentName={bills.name} establishmentType={bills.establishmentType}
        value={bills.value} date={bills.date}/>
    )

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
                    keyExtractor={bills => String(bills.id)}
                    renderItem={renderItem}
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

const bills = [
    {
        id: 1,
        name: 'Supermercados Peruzzo',
        establishmentType: 'Supermercado',
        value: 'R$ 1000,00',
        date: '01/06/2020'
    }, 
    {
        id: 2,
        name: 'Balada Boa',
        establishmentType: 'Boate',
        value: 'R$ 1000,00',
        date: '01/06/2020'
    },
    {
        id: 3,
        name: 'Lancheria Chamichu',
        establishmentType: 'Lancheria',
        value: 'R$ 1000,00',
        date: '01/06/2020'
    }, 
    {
        id: 4,
        name: 'Lancheria Snoopy',
        establishmentType: 'Lancheria',
        value: 'R$ 1000,00',
        date: '01/06/2020'
    },
    {
        id: 5,
        name: 'Lojas 3 Passos',
        establishmentType: 'Loja de roupas',
        value: 'R$ 1000,00',
        date: '01/06/2020'
    }, 
    {
        id: 6,
        name: 'Mercado Caigoaté',
        establishmentType: 'Mercado',
        value: 'R$ 1000,00',
        date: '01/06/2020'
    },
    {
        id: 7,
        name: 'Mercado Tupi',
        establishmentType: 'Mercado',
        value: 'R$ 1000,00',
        date: '01/06/2020'
    }, 
    {
        id: 8,
        name: 'Supermercados Peruzzo',
        establishmentType: 'Supermercado',
        value: 'R$ 1000,00',
        date: '01/06/2020'
    },
    {
        id: 9,
        name: 'Lojas Americanas',
        establishmentType: 'Loja de departamentos',
        value: 'R$ 1000,00',
        date: '01/06/2020'
    }, 
    {
        id: 10,
        name: 'Mercado Caigoaté',
        establishmentType: 'Mercado',
        value: 'R$ 1000,00',
        date: '01/06/2020'
    },
    {
        id: 11,
        name: 'Lancheria Snoopy',
        establishmentType: 'Lancheria',
        value: 'R$ 1000,00',
        date: '01/06/2020'
    }, 
    {
        id: 12,
        name: 'Restaurante Y',
        establishmentType: 'Restaurante',
        value: 'R$ 1000,00',
        date: '01/06/2020'
    },
    {
        id: 13,
        name: 'Mercado X',
        establishmentType: 'Supermercado',
        value: 'R$ 1000,00',
        date: '01/06/2020'
    }, 
    {
        id: 14,
        name: 'Restaurante Y',
        establishmentType: 'Restaurante',
        value: 'R$ 1000,00',
        date: '01/06/2020'
    },
    {
        id: 15,
        name: 'Mercado X',
        establishmentType: 'Supermercado',
        value: 'R$ 1000,00',
        date: '01/06/2020'
    }, 
    {
        id: 16,
        name: 'Restaurante Y',
        establishmentType: 'Restaurante',
        value: 'R$ 1000,00',
        date: '01/06/2020'
    },
]


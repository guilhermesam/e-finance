import React from 'react';
import { FlatList, Picker, Text, TouchableOpacity, View } from 'react-native';
import Bill from '../../components/Containers/Bill'
import ClearHistoryButton from '../../components/Buttons/ClearHistoryButton'

import styles from './styles';

export default function Historic({ navigation }) {
    
    // deleteBill = billId => {
    //     const bills = [...bills]
    //     bills.forEach(bills => {
    //         if (bill.id === billId) {
                
    //         }
    //     });
    // }

    const renderItem = ({ item: bills }) => (
        <Bill establishmentName={bills.name} establishmentType={bills.establishmentType}
        value={bills.value} date={bills.date} enableDelete={true}/>
    )
    
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
                <FlatList
                    data={bills}
                    keyExtractor={bills => String(bills.id)}
                    renderItem={renderItem} />
            </View>
                <ClearHistoryButton />
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
        name: 'Restaurante ABC',
        establishmentType: 'Restaurante',
        value: 'R$ 1000,00',
        date: '01/06/2020'
    },
    {
        id: 3,
        name: 'Mercado Tupi',
        establishmentType: 'Mercado',
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
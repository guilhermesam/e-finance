import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import styles from './styles'

export default function Home() {

    const navigation = useNavigation();
    
    function navigateToBill() {
        navigation.navigate('Bill')
    }

    function navigateToSettings() {
        navigation.navigate('Settings')
    }

    function navigateToHelp() {
        navigation.navigate('Help')
    }

    function navigateToStatistics() {
        navigation.navigate('Statistics')
    }

    function navigateToHistoric() {
        navigation.navigate('Historic')
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.topButtonContainer}>
                    <TouchableOpacity style={styles.topButton} onPress={navigateToHelp}>
                        <Feather name="help-circle" size={35} color="rgba(0, 109, 255, 0.6)"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topButton} onPress={navigateToSettings}>
                        <Feather name="settings" size={35} color="rgba(0, 109, 255, 0.6)"/>
                    </TouchableOpacity>  
                </View>
                <View style={styles.dateContainer}>
                    <Text style={styles.month}>JUN</Text>
                    <Text style={styles.year}>2020</Text>
                </View>
            </View>
            <View style={styles.form}>
                <Text style={styles.headerText}>
                    Lançamentos Pendentes
                </Text>
                <FlatList
                    data={bills}
                    keyExtractor={bills => String(bills.id)}
                    renderItem={({ item: bills }) => (
                        <View style={styles.billsList}>
                            <View style={styles.establishmentInfo}>
                                <Text style={styles.mainText}>{bills.name}</Text>
                                <Text style={styles.subText}>{bills.establishmentType}</Text>
                            </View>
                            <View style={styles.buyInfo}>
                                <Text style={styles.mainText}>{bills.value}</Text>
                                <Text style={styles.subText}>{bills.date}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
            <View style={styles.bottomButtonContainer}>
                <TouchableOpacity style={styles.bottomButton} onPress={navigateToBill}>
                    <Feather name="plus-circle" size={45} color="#rgba(0, 109, 255, 0.6)"/>
                    <Text style={styles.buttonText}>Adicionar Conta</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.bottomButton} onPress={navigateToStatistics}>
                    <Feather name="pie-chart" size={45} color="#rgba(0, 109, 255, 0.6)"/>
                    <Text style={styles.buttonText}>Estatísticas</Text>
                </TouchableOpacity>       
                <TouchableOpacity style={styles.bottomButton} onPress={navigateToHistoric}>
                    <Feather name="clock" size={45} color="#rgba(0, 109, 255, 0.6)"/>
                    <Text style={styles.buttonText}>Histórico</Text>
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

{/* <TouchableOpacity style={styles.button} onPress={navigateToBill}>
                <Feather name="plus" size={35} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={navigateToStatistics}>
                <Feather name="plus" size={35} color="#FFF" />
            </TouchableOpacity> */}
import React from 'react'
import { FlatList, ListView, Text, View } from 'react-native'
import styles from './styles'

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.month}>JUN</Text>
                <Text style={styles.year}>2020</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.headerText}>
                    Lançamentos Pendentes
                </Text>
                <FlatList
                    data={bills}
                    keyExtractor={bills => String(bills.id)}
                    style={styles.billsList}
                    renderItem={({ item: bills }) => (
                    <Text>{bills.name}</Text>
                    )}
                />
            </View>
        </View>
    )
}

const bills = [
    {
        id: 1,
        name: 'Mercado X',
        establishmentType: 'Supermercado'
    }, 
    {
        id: 2,
        name: 'Restaurante Y',
        establishmentType: 'Restaurante'
    }
]
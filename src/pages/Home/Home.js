import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

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
            </View>
        </View>
    )
}

const bills = [
    {
        id: 1,
        name: 'Mercado X',
        establishmentType: 'Supermercado'
    }
]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#006DFF'
    },
     
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginHorizontal: 30,
        borderRadius: 16,
        backgroundColor: '#FFF',
        height: 500,
        marginTop: 50
    },

    headerText: {
        color: '#444',
        fontWeight: 'bold',
        marginTop: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    headerContainer: {
       flexDirection: 'row', 
       alignSelf: 'stretch'
    }, 

    month: {
        color: '#C0C0C0',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginLeft: 30
    },

    year: {
        color: '#AAAAAA',
        fontSize: 14, 
        fontWeight: 'bold',
        marginLeft: 10
    }
})
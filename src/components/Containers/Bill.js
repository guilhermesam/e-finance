import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons';

export default props => {

    return (
        <View style={styles.container}>
            <View>
                {props.enableDelete
                ? <TouchableOpacity>
                    <Feather name="trash-2" size={20} color="red"/>
                </TouchableOpacity>
                : <View></View>   
                }
            </View>
            <View style={styles.containerBuyInfo}>
                <Text style={styles.mainText}>{props.establishmentName}</Text>
                <Text style={styles.subText}>{props.establishmentType}</Text>
            </View>
            <View style={styles.containerBuyInfo}>
                <Text style={styles.mainText}>{props.value}</Text>
                <Text style={styles.subText}>{props.date}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        flexDirection: 'row',
        marginHorizontal: 15,
        alignItems: 'flex-start',
    },

    containerBuyInfo: {
        flex: 1,
        alignItems: 'flex-start',
    },

        mainText: {
            fontSize: 12,
            marginBottom: 5,
        },

        subText: {
            fontSize: 10,
            color: '#AAAAAA',
            marginTop: 3
        }, 
    })
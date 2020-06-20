import React from 'react'
import { Feather } from '@expo/vector-icons'
import { StyleSheet, View } from 'react-native'

export default props => {
    return (
        <View style={props.onCheck ? styles.done : styles.pending}>
            {props.onCheck
            ? <Feather name='check' size={20} color='#FFF'/>
            : <View />}
        </View>
    )
}

const styles = StyleSheet.create({
    pending: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        backgroundColor: '#F8F8F8'
    },

    done: {
        height: 25,
        width: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 13,
        backgroundColor: '#066DFF'
    }
})
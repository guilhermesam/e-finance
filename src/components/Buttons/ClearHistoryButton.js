import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

export default props => {
    return (
        <TouchableOpacity style={styles.clearHistoryButton} onPress={props.onPress}>
            <Text>Limpar Histórico</Text>
            <Feather name="trash-2" size={props.size} color={props.color}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    clearHistoryButton: {
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderRightWidth: StyleSheet.hairlineWidth,
        marginHorizontal: 10,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch'
    }
})
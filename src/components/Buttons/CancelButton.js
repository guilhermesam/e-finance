import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import colors from '../../constants/colors'

export default props => {
    return(
        <TouchableOpacity style={styles.buttonCancel} onPress={props.onPress}>
            <Text style={styles.textButton}>{props.text}</Text>
        </TouchableOpacity> 
    ) 
}

const styles = StyleSheet.create({
    buttonCancel:{
        backgroundColor: colors.cancel,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        width: 130,
        borderRadius: 10,
        overflow: "hidden",
        marginTop: 8,
    },

    textButton: {
        fontSize: 14,
        color: colors.textButtonColor
    }
})
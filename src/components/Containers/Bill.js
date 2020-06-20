import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View, TouchableWithoutFeedbackBase } from 'react-native'
import CheckButton from '../../components/Buttons/CheckButton'

export default props => {

    const doneStyle = props.doneAt != null
    ? { textDecorationLine: 'line-through' }
    : {}

    function getCheckView(doneAt) {
        if (doneAt != null) {
            return (
                <CheckButton onCheck={true} />
            )
        } else {
            return (
                <CheckButton onCheck={false} />
            )
        }
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => props.onPress(props.id)}>
                <View style={styles.checkContainer}>
                    {getCheckView(props.doneAt)}
                </View>
            </TouchableWithoutFeedback>
                <View style={styles.containerBuyInfo}>
                    <Text style={[styles.mainText, doneStyle]}>{props.establishmentName}</Text>
                    <Text style={[styles.subText, doneStyle]}>{props.establishmentType}</Text>
                </View>

                <View style={styles.containerBuyInfo}>
                    <Text style={[styles.mainText, doneStyle]}>{props.value}</Text>
                    <Text style={[styles.subText, doneStyle]}>{props.date + ""}</Text>
                </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 5,
        flexDirection: 'row',
        marginHorizontal: 15,
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    
    containerBuyInfo: {
        flex: 1,
        alignItems: 'center',
    },
    
        mainText: {
            paddingLeft: 10,
            fontSize: 12,
            marginBottom: 5,
        },
    
        subText: {
            fontSize: 10,
            color: '#AAAAAA',
            marginTop: 3
        },  
})
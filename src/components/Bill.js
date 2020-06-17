import React from 'react'
import { Text, View } from 'react-native'

import styles from '../pages/Bill/styles'

export default props => {

    return (
        <View style={styles.billsList}>
            <View style={styles.establishmentInfo}>
                <Text style={styles.mainText}>{props.establishmentName}</Text>
                <Text style={styles.subText}>{props.establishmentType}</Text>
            </View>
            <View style={styles.buyInfo}>
                <Text style={styles.mainText}>{props.value}</Text>
                <Text style={styles.subText}>{props.date}</Text>
            </View>
        </View>
    )
}
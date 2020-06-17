import React from 'react'
import { Text, View } from 'react-native'
import * as Progress from 'react-native-progress';
import styles from './styles'

export default function Statistics() {
    return (
        <View style={styles.container}>
            <View style={styles.mainFrame}>
                <View style={styles.graphicContainer}>
                    <Progress.Circle size={100} progress={0.76} showsText={true} 
                    color={'#006dff'}/>
                    <Text style={styles.graphicLabel}>Quitação do mês atual</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoLabel}>Gasto no mês atual</Text>
                    <Text style={styles.infoText}>R$ 2.457,98</Text>
                    <Text style={styles.infoLabel}>Média de gasto nos últimos 3 meses</Text>
                    <Text style={styles.infoText}>R$ 3.412,50</Text>
                    <Text style={styles.infoLabel}>Total de gastos em tipo de estabelecimento</Text>
                    <Text style={styles.infoText}>R$ 12.412,50 - Supermercado</Text>
                </View>
            </View>
        </View>
    )
}
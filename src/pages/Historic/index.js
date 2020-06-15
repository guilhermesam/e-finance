import React from 'react';
import { FlatList, Picker, View } from 'react-native';
import styles from './styles';

export default function Historic() {
    return (
        <View style={styles.container}>
            <View style={styles.mainFrame}>
                <Picker>
                    <Picker.Item label="Últimos..." color="#999" value="0"/>
                    <Picker.Item label="3 meses..." value="1"/>
                </Picker>
            </View>
        </View>
    ) 
}
import { StyleSheet } from 'react-native';
import colors from '../../constants/colors'

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: colors.backgroundContainer,
        justifyContent: 'flex-end',
    },

    mainFrame: {
        flex: 1,
        marginTop: 100,
        flexDirection: "column",
        alignSelf: 'stretch',
        marginHorizontal: 10,
        borderRadius: 16,
        backgroundColor: '#f8f8f8',
        height: 550,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },

    billPicker:{
        marginLeft: 15,  
    },

    emptyHistoricWarning: {
        alignSelf: "center",
        marginTop: 30,
        color: '#AAAAAA'
    }
})

export default styles;
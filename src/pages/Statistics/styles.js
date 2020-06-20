import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundContainer
    },

    graphicContainer: {
        flex: 1,
        marginHorizontal: 30,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },

        graphicLabel: {
            fontSize: 12,
            color: 'gray',
            marginTop: 10
        },

    infoContainer: {
        flex: 1,
        marginHorizontal: 30,
        marginVertical: 30
    },

        infoLabel: {
            fontSize: 14,
            color: '#999',
            marginTop: 15
        },
        
        infoText: {
            fontSize: 18,
            color: '#006dff'
        },

})

export default styles;
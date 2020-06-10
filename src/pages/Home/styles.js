import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#006DFF'
    },

    billsList: {
        
    },
     
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginHorizontal: 30,
        borderRadius: 16,
        backgroundColor: '#FFF',
        height: 500,
        marginTop: 50
    },

    headerText: {
        color: '#444',
        fontWeight: 'bold',
        marginTop: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    headerContainer: {
       flexDirection: 'row', 
       alignSelf: 'stretch'
    }, 

    month: {
        color: '#C0C0C0',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginLeft: 30
    },

    year: {
        color: '#AAAAAA',
        fontSize: 14, 
        fontWeight: 'bold',
        marginLeft: 10
    }
})

export default styles
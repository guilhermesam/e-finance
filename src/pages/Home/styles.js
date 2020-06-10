import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#006DFF'
    },

    billsList: {
        padding: 5,
        flexDirection: 'row',
        marginHorizontal: 10,
    },

    buyInfo:{
        flex: 1,
        alignSelf: 'flex-end'
    },

    establishmentInfo: {
        flex: 1
    },
     
    form: {
        alignSelf: 'stretch',
        marginHorizontal: 30,
        borderRadius: 16,
        backgroundColor: '#FFF',
        height: 550,
        marginTop: 50,
    },

    headerText: {
        color: '#444',
        fontSize: 16,
        fontWeight: 'bold',
        borderBottomWidth: StyleSheet.hairlineWidth,
        padding: 15,
        color: '#006DFF'
    },

    headerContainer: {
       flexDirection: 'row', 
       alignSelf: 'stretch'
    }, 

    establishmentName: {
        fontSize: 12,
        marginBottom: 5,
    },

    establishmentType: {
        fontSize: 10,
        color: '#AAAAAA',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 5,
    }, 
    
    value: {
        fontSize: 12,
    },

    button: {
        height: 50,
        width: 50,
        backgroundColor: '#4E00FF',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginRight: 30,
        borderRadius: 180
    },

    month: {
        color: '#C0C0C0',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        marginLeft: 30
    },

    year: {
        color: '#AAAAAA',
        fontSize: 14, 
        fontWeight: 'bold',
        marginLeft: 10,
    }
})

export default styles
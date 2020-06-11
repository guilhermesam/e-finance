import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006DFF'
},
    headerContainer: {
        flex: 1,
        flexDirection: 'row', 
        alignSelf: 'stretch'
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
            alignSelf: 'flex-end',
            marginLeft: 10,
        },

    form: {
        flex: 2,
        alignSelf: 'stretch',
        marginHorizontal: 30,
        borderRadius: 16,
        backgroundColor: '#FFF',
        marginTop: 50,
    },

        headerText: {
            fontSize: 16,
            fontWeight: 'bold',
            borderBottomWidth: StyleSheet.hairlineWidth,
            padding: 15,
            color: '#006DFF'
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

                value: {
                    fontSize: 12,
                },

            establishmentInfo: {
                flex: 1
            },
    
                mainText: {
                    fontSize: 12,
                    marginBottom: 5,
                },

                subText: {
                    fontSize: 10,
                    color: '#AAAAAA',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginBottom: 5,
                }, 
    
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 20
    },

    button: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderRightWidth: StyleSheet.hairlineWidth, 
        borderRadius: 5,
        marginLeft: 10,
        backgroundColor: 'rgba(255,255,255,0.20)',
        padding: 10,
        width: 120,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
    }, 

    buttonText: {
        fontSize: 12,
        color: '#FFF'
    },    
})

export default styles
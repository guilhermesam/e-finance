import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    
container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white'
},
    headerContainer: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 20,
        alignItems: 'stretch',
    },

        dateContainer: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-end',
            alignSelf: 'center',
        },

            month: {
                color: '#C0C0C0',
                fontSize: 24,
                fontWeight: 'bold',
            },

            year: {
                color: '#AAAAAA',
                fontSize: 16, 
                fontWeight: 'bold',
            },

        topButtonContainer: {
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
                marginTop: 30
            },

            topButton: {
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderTopWidth: StyleSheet.hairlineWidth,
                borderLeftWidth: StyleSheet.hairlineWidth,
                borderRightWidth: StyleSheet.hairlineWidth, 
                borderRadius: 5,
                marginLeft: 10,
                backgroundColor: '#F8F8F8',
                width: 60,
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
            },
            

    form: {
        flex: 3,
        alignSelf: 'stretch',
        borderRadius: 16,
        backgroundColor: '#FFF',
        marginTop: 50,
    },

        headerText: {
            fontSize: 16,
            fontWeight: 'bold',
            borderBottomWidth: StyleSheet.hairlineWidth,
            padding: 15,
            color: 'rgba(0, 109, 255, 0.6)'
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
    
    bottomButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 20,
        backgroundColor: '#F8F8F8',
    },

        bottomButton: {
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderTopWidth: StyleSheet.hairlineWidth,
            borderLeftWidth: StyleSheet.hairlineWidth,
            borderRightWidth: StyleSheet.hairlineWidth, 
            borderRadius: 5,
            backgroundColor: '#F8F8F8',
            marginLeft: 10,
            padding: 10,
            width: 120,
            height: 120,
            justifyContent: 'space-around',
            alignItems: 'center',
        }, 

        buttonText: {
            fontSize: 10,
            color: 'rgba(0, 109, 255, 0.6)'
        },    
})

export default styles
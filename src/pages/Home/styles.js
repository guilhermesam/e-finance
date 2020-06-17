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
                fontSize: 22,
                fontWeight: 'bold',
            },

            year: {
                color: '#AAAAAA',
                fontSize: 14, 
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
                backgroundColor: 'rgba(255,255,255,0.20)',
                width: 60,
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
            },

            year: {
                color: '#AAAAAA',
                fontSize: 14, 
                fontWeight: 'bold',
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
    
    bottomButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 20,
    },

        bottomButton: {
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderTopWidth: StyleSheet.hairlineWidth,
            borderLeftWidth: StyleSheet.hairlineWidth,
            borderRightWidth: StyleSheet.hairlineWidth, 
            borderRadius: 5,
            marginLeft: 10,
            backgroundColor: 'rgba(0, 109, 255, 0.5)',
            padding: 10,
            width: 100,
            height: 100,
            justifyContent: 'space-around',
            alignItems: 'center',
        }, 

        buttonText: {
            fontSize: 10,
            color: '#FFF'
        },    
})

export default styles
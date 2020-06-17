import {StyleSheet} from 'react-native';

export default StyleSheet.create ({

    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F8F8F8'
    },

        mainFrame: {
            flex: 1,
            alignSelf: 'stretch',
            marginHorizontal: 30,
            borderRadius: 16,
            height: 550,
            margin: 50,
            justifyContent: 'center',            
        },

        billsList: {
            padding: 5,
            flexDirection: 'row',
            marginHorizontal: 10,
            alignItems: 'center'
        },

            buyInfo:{
                flex: 1,
            },

            mainText: {
                fontSize: 12,
                marginBottom: 5,
            },

            subText: {
                fontSize: 10,
                color: '#AAAAAA',
                marginTop: 3
            }, 

                value: {
                    fontSize: 12,
                },

            establishmentInfo: {
                flex: 1
            },

    input : {
        marginBottom: 2,
        backgroundColor: '#fff',
        height: 35,
        width: 250,
        borderRadius: 10,
        marginLeft: 15,
    },

    billPicker:{
        marginLeft: 10, 
        borderRadius: 10, 
    },

    billData : {
        marginLeft: 10,
        height: 35,
        width: 289,
        borderRadius: 10,
    },

    formButton : {
        marginTop: 30,
            justifyContent: "space-between",
            flexDirection: 'row',
            marginHorizontal: 10
    },

    ButtonConfirm:{
    backgroundColor: '#4cd964',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: 130,
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 8,

    },

    ButtonCancel:{
    backgroundColor: '#ff3b30',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: 130,
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 8,
            
        },
        
        textButton : {
            color: '#ffffff',
        
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            textAlign: "center",
        
            fontSize: 16,
        }
    })
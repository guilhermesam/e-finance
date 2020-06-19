import {StyleSheet} from 'react-native';

export default StyleSheet.create ({

    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F8F8F8'
    },

        mainFrame: {
            flex: 1,
            marginHorizontal: 30,
            borderRadius: 16,
            height: 550,
            margin: 50,
            justifyContent: 'space-evenly',            
        },

    input : {
        marginBottom: 2,
        backgroundColor: '#fff',
        height: 35,
        width: 250,
        borderRadius: 10,
        marginLeft: 15,
    },

    billPicker: {
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
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
})
import {StyleSheet} from 'react-native';


export default StyleSheet.create ({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#006DFF'
    },

    headerContainer: {
        flexDirection: 'row', 
        alignSelf: 'stretch',
        justifyContent: 'center',
     }, 

     form: {
        alignSelf: 'stretch',
        marginHorizontal: 30,
        borderRadius: 16,
        backgroundColor: '#FFF',
        height: 550,
        marginTop: 50,
    },

   
    billTitle : {
      marginBottom: 2,
    
         
         fontWeight: 'bold',
         
    },

input : {
    marginBottom: 2
},

    ButtonConfirm:{
backgroundColor: '#237100'
    },

    ButtonCancel:{
        backgroundColor: '#710300'
    },
    
    textButton : {
        color: '#ffffff',
        fontWeight: 'bold'
    }



})
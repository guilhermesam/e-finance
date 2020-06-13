import {StyleSheet} from 'react-native';
import Fonts from '@expo-google-fonts/roboto';


export default StyleSheet.create ({

    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#612f74',
    },

    headerContainer: {
        flexDirection: 'row', 
        alignSelf: 'stretch',
        justifyContent: 'center',
        height: 20
     }, 

     form: {
        alignSelf: 'stretch',
        marginHorizontal: 30,
        borderRadius: 16,
        backgroundColor: '#f8f8f8',
        height: 550,
        margin: 50,
        justifyContent: 'center',
        alignItems: 'stretch',
        
    },

   
    billTitle : {
    marginBottom: 2,
    marginVertical: 17,
    marginLeft: 10,
    color: '#874e84',
    fontFamily: 'Roboto'
         
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
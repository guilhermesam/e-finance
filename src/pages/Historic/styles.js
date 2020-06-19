import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F8F8F8'
    },

        mainFrame: {
            flex: 1,
            marginTop: 50,
            flexDirection: "column",
            alignSelf: 'stretch',
            marginHorizontal: 10,
            borderRadius: 16,
            backgroundColor: '#f8f8f8',
            height: 550,
            justifyContent: 'flex-start',
            alignItems: 'stretch',
        },

            billPicker:{
                marginLeft: 15,  
            },
})

export default styles;
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
            marginHorizontal: 30,
            borderRadius: 16,
            backgroundColor: '#f8f8f8',
            height: 550,
            justifyContent: 'flex-start',
            alignItems: 'stretch',
        },

            billPicker:{
                marginLeft: 10,  
            },

            billsList: {
                padding: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 10,
            },
    
                buyInfo:{
                    flex: 1,
                    alignItems: 'center',
                },
    
                    value: {
                        fontSize: 12,
                    },
    
                establishmentInfo: {
                    flex: 1,
                    alignItems: 'flex-start'
                },
        
                    mainText: {
                        fontSize: 12,
                        marginBottom: 5,
                    },
    
                    subText: {
                        fontSize: 10,
                        color: '#AAAAAA',
                        marginBottom: 5,
                    }, 
                
                trashButton: {
                    flex: 1
                },
        
                clearHistoryButton: {
                    flexDirection: 'row',
                    borderRadius: 10,
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    borderTopWidth: StyleSheet.hairlineWidth,
                    borderLeftWidth: StyleSheet.hairlineWidth,
                    borderRightWidth: StyleSheet.hairlineWidth,
                    marginHorizontal: 10,
                    padding: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'stretch'
                }
})

export default styles;
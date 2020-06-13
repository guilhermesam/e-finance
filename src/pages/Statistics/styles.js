import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#006DFF'
    },

        mainFrame: {
            flexDirection: "column",
            alignSelf: 'stretch',
            marginHorizontal: 30,
            borderRadius: 16,
            backgroundColor: '#f8f8f8',
            height: 550,
            justifyContent: 'flex-start',
            alignItems: 'stretch',
        },

            graphicContainer: {
                flex: 1,
                marginHorizontal: 30,
                alignItems: 'stretch',
                justifyContent: 'center',
            },

                graphicLabel: {
                    fontSize: 12,
                    color: 'gray',
                    marginTop: 10
                },

            infoContainer: {
                flex: 1,
                alignItems: 'stretch',
                marginHorizontal: 30
            },

                infoLabel: {
                    fontSize: 14,
                    color: '#999',
                    marginTop: 15
                },
                
                infoText: {
                    fontSize: 18,
                    color: '#006dff'
                },

})

export default styles;
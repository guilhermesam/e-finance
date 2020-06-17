import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    
container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'white'
},
        headerContainer: {
            flex: 2,
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginTop: 40
        },

            openDrawerButton: {
                padding: 10
            },

            today: {
                color: '#5C5C5C',
                fontSize: 24,
                fontWeight: 'bold',
                alignSelf: 'center'
            },
            
    mainFrame: {
        flex: 8,
        borderRadius: 16,
    },

        headerText: {
            fontSize: 16,
            marginTop: 40,
            fontWeight: 'bold',
            borderBottomWidth: StyleSheet.hairlineWidth,
            padding: 15,
            color: '#006DFF'
        },
    
    bottomButtonContainer: {
        position: 'absolute',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        padding: 20
    },

    addBillButton: {
        borderRadius: 45,
        marginLeft: 10,
        backgroundColor: '#006DFF',
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default styles

// topButtonContainer: {
        //         flex: 1,
        //         flexDirection: 'row',
        //         alignItems: 'center',
        //         justifyContent: 'flex-end',
        //         marginTop: 30
        //     },

        //     topButton: {
                // borderBottomWidth: StyleSheet.hairlineWidth,
                // borderTopWidth: StyleSheet.hairlineWidth,
                // borderLeftWidth: StyleSheet.hairlineWidth,
                // borderRightWidth: StyleSheet.hairlineWidth, 
                // borderRadius: 5,
                // marginLeft: 10,
                // backgroundColor: 'rgba(255,255,255,0.20)',
                // width: 60,
                // height: 60,
                // justifyContent: 'center',
                // alignItems: 'center',
        //     },
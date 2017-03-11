import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
    },
    current_location: {
        marginTop: 90,
        justifyContent: 'center',
        alignItems: 'center',
    },
    country_name: {
        fontSize: 20,
        textAlign: 'center'
    },
    actions: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 280
    },
    connectButtonContainer: {
        backgroundColor: '#4096EE',
        padding: 10,
        height: 40,
        overflow: 'hidden',
        borderRadius: 4,
        width: 250
    },
    connectButton: {
        fontSize: 18,
        color: 'white'
    },
    locationButtonContainer: {
        marginTop:20,
        borderWidth: 1,
        borderColor: '#EEEEEE',
        padding: 10,
        height: 40,
        overflow: 'hidden',
        borderRadius: 4,
        width: 250
    },
    locationButton: {
        fontSize: 18,
        color: '#36393D'
    },
    locationFlag: {
        marginRight: 8
    },
    locationContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;
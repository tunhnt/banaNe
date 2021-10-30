import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        paddingHorizontal: 7,
        margin: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        flexDirection: 'row'
    },
    input: {
        flex: 1,
        //padding: Platform.OS === 'android' ? 5 : 5,
    }
});
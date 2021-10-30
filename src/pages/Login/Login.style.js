import {StyleSheet,Dimensions} from 'react-native';

import colors from '../../styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    logo: {
        height: Dimensions.get('window').height / 3,
        width: Dimensions.get('window').width * 0.9,
        resizeMode: 'contain',
        alignSelf: 'center',
        tintColor: 'white'
    },

    logo_container: {
        flex: 1,
        justifyContent: 'center'
    },

    body_container: {
        flex: 1
    },
    header: {
        color: colors.darkgreen,
        margin: 5,
        fontSize: 160,
    }
});
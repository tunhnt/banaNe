import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../styles/colors';


export default StyleSheet.create({
    container: {
        position: 'absolute',
        top: Dimensions.get('window').height-160,
        right: 20,
        borderRadius: 50,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.darkgreen,
    },
})

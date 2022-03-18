import { StyleSheet, View, Dimensions, StatusBar } from 'react-native';

/* Device dimensions, use to optimize for device of all sizes */
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const sizes = {
    NavBarView: {
        height: 80,
        width: width,
    },
    MusicView: {
        height: height - 80,
        width: width,
    },
    VideoView: {
        height: height - 80,
        width: width,
    }
}
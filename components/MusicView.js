import React, { useState } from "react";
import { StyleSheet, View, Dimensions, StatusBar, Text } from 'react-native';
import { sizes } from "../assets/values/sizes";
import { colors } from '../assets/values/colors.js';
import { theme } from '../assets/values/theme.js';

/* Device dimensions, use to optimize for device of all sizes */
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const MusicView = (props) => {
    return (
        <View style={styles.componentWrapper}>
            <Text>Music</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    componentWrapper: {
        width: sizes.MusicView.width,
        backgroundColor: colors[theme].background,
        height: sizes.MusicView.height,
    },
});


export default MusicView;
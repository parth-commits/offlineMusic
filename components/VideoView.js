import React, { useState } from "react";
import { StyleSheet, View, Text } from 'react-native';
import { sizes } from "../assets/values/sizes";
import { colors } from '../assets/values/colors.js';
import { theme } from '../assets/values/theme.js';
import PasteLinkButton from "./PasteLinkButton";
import SavePathButton from "./SavePathButton";

const VideoView = (props) => {
    return (
        <View style={styles.componentWrapper}>
            <Text style={styles.heading}>Video</Text>
            <SavePathButton text={'/Internal Storage/Videos/0/myVideos/'}></SavePathButton>
            <PasteLinkButton text={'Paste Link'}></PasteLinkButton>
        </View>
    );
}

const styles = StyleSheet.create({
    componentWrapper: {
        width: sizes.MusicView.width,
        backgroundColor: colors[theme].background,
        height: sizes.MusicView.height,
        padding: 20,
    },
    heading: {
        fontFamily: 'PS-bold',
        fontSize: 55,
        color: colors[theme].foreground,
    }
});


export default VideoView;
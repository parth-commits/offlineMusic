import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { sizes } from "../assets/values/sizes";
import { colors } from '../assets/values/colors.js';
import { theme } from '../assets/values/theme.js';
import PasteLinkButton from "./PasteLinkButton";
import SavePathButton from "./SavePathButton";

const VideoView = (props) => {

    
    const pasteLink = () => {
        console.log('video: pasteLink parent function works')
    }

    return (
        <ScrollView style={[styles.componentWrapper, {display: props.show ? 'flex' : 'none'}]}>
            <Text style={styles.heading}>Video</Text>
            <SavePathButton text={'/Internal Storage/Videos/0/myVideos/'}></SavePathButton>
            <PasteLinkButton task={pasteLink} text={'Paste Link'}></PasteLinkButton>
        </ScrollView>
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
        fontSize: 50,
        color: colors[theme].foreground,
    }
});


export default VideoView;
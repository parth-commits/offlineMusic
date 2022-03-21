import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { sizes } from "../assets/values/sizes";
import { colors } from '../assets/values/colors.js';
import { theme } from '../assets/values/theme.js';

const ClearButton = (props) => {
    return (
        <TouchableOpacity onPress={() => props.task()} activeOpacity={0.7} style={[styles.button, styles.savePathButton]}>
            <Text style={[styles.buttonText, styles.savePathButtonText]} numberOfLines={1}>
                {props.text}
            </Text>
        </TouchableOpacity>
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
    },
    button: {
        width: sizes.MusicView.width - 40,
        height: 40,
        borderWidth: 3,
        borderColor: colors[theme].foreground,
        borderRadius: 20,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 30,
        fontFamily: 'PS-bold',
        color: colors[theme].foreground,
    },
    savePathButtonText: {
        color: colors[theme].foreground,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
});


export default ClearButton;
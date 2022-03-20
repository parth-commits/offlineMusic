import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { sizes } from "../assets/values/sizes";
import { colors } from '../assets/values/colors.js';
import { theme } from '../assets/values/theme.js';

const PasteLinkButton = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={[styles.button, styles.pasteLinkButton]}>
            <Text style={[styles.buttonText, styles.pasteLinkButtonText]} numberOfLines={1}>
                {props.text}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
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
    pasteLinkButton: {
        backgroundColor: colors[theme].foreground,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pasteLinkButtonText: {
        color: colors[theme].background,
    }
});


export default PasteLinkButton;
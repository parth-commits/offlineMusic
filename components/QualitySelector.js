import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { sizes } from "../assets/values/sizes";
import { colors } from '../assets/values/colors.js';
import { theme } from '../assets/values/theme.js';


const QualitySelector = (props) => {
    return (
        <View style={styles.componentWrapper}>
            <TouchableOpacity onPress={() => props.setQualityHigh(true)} activeOpacity={0.9} style={[styles.button, props.qualityHigh ? styles.defaultButtonON : styles.defaultButtonOFF]}>
                <Text adjustsFontSizeToFit style={[styles.buttonText, props.qualityHigh ? styles.buttonTextON : styles.buttonTextOFF]}>Highest</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.setQualityHigh(false)} activeOpacity={0.9} style={[styles.button, !props.qualityHigh ? styles.defaultButtonON : styles.defaultButtonOFF]}>
                <Text adjustsFontSizeToFit style={[styles.buttonText, !props.qualityHigh ? styles.buttonTextON : styles.buttonTextOFF]}>Decent</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    componentWrapper: {
        width: sizes.QualitySelector.width,
        height: sizes.QualitySelector.height,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 20,
    },
    button: {
        height: sizes.QualitySelector.height,
        width: (sizes.QualitySelector.width-40)/2,
        borderRadius: sizes.QualitySelector.height,
        marginRight: 10,
        borderColor: colors[theme].foreground,
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    defaultButtonON: {
        backgroundColor: colors[theme].foreground,
    },
    defaultButtonOFF: {
        backgroundColor: colors[theme].background,
    },
    buttonText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'PS-bold',
        fontSize: sizes.QualitySelector.height/1.5,
    },
    buttonTextON: {
        color: colors[theme].background,
    },
    buttonTextOFF: {
        color: colors[theme].foreground,
    },
});


export default QualitySelector;
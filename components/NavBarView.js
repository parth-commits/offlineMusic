import React, { useState } from "react";
import { StyleSheet, View, Dimensions, TouchableOpacity, Text } from 'react-native';
import { sizes } from "../assets/values/sizes";
import { colors } from '../assets/values/colors.js';
import { theme } from '../assets/values/theme.js';

/* Device dimensions, use to optimize for device of all sizes */
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const NavBarView = (props) => {
    const onPress = (type) => {
        props.setMusicPage(type === "music" ? true : false)
    }
    return (
        <View style={styles.componentWrapper}>
            <View style={styles.navBarButtonWrapper}>
                <TouchableOpacity style={[props.MusicPage ? styles.defaultButtonON : styles.defaultButtonOFF, styles.defaultButton]} activeOpacity={0.7} onPress={() => onPress('music')}>
                    <Text adjustsFontSizeToFit style={[styles.defaultButtonText, props.MusicPage ? styles.buttonTextON : styles.buttonTextOFF ]}>Music</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[!props.MusicPage ? styles.defaultButtonON : styles.defaultButtonOFF, styles.defaultButton]} activeOpacity={0.7} onPress={() => onPress('video')}>
                    <Text adjustsFontSizeToFit style={[styles.defaultButtonText, !props.MusicPage ? styles.buttonTextON : styles.buttonTextOFF ]}>Video</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    componentWrapper: {
        width: sizes.NavBarView.width,
        height: sizes.NavBarView.height,
        elevation: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    navBarButtonWrapper: {
        width: sizes.NavBarView.width,
        height: sizes.NavBarView.height * 0.90,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    defaultButton: {
        width: sizes.NavBarView.width / 2.5,
        height: 50,
        borderRadius: sizes.NavBarView.width,
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
    defaultButtonText: {
        fontFamily: 'PS-bold',
        fontSize: sizes.NavBarView.width / 7,
    },
    buttonTextON: {
        color: colors[theme].background,
    },
    buttonTextOFF: {
        color: colors[theme].foreground,
    }
});


export default NavBarView;
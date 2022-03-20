import React, { useState } from "react";
import { StyleSheet, View, Image, TextInput } from 'react-native';
import { sizes } from "../assets/values/sizes";
import { colors } from '../assets/values/colors.js';
import { theme } from '../assets/values/theme.js';

const MediaItem = (props) => {
    return (
        <View style={styles.componentWrapper}>
            <Image style={styles.MediaItemImage} source={{uri:`https://i.ytimg.com/vi/C8x9yBcxOJ8/hqdefault.jpg`}}></Image>
            <View style={styles.MediaImageTextWrapper}>
                <TextInput
                    adjustsFontSizeToFit
                    style={styles.MediaItemTitle}
                    placeholderTextColor={colors[theme].foreground}
                    value="Tere Te"
                    placeholder="A great title!">
                </TextInput>
                <TextInput
                    adjustsFontSizeToFit
                    style={styles.MediaItemAuthor}
                    placeholderTextColor={colors[theme].foreground}
                    value="Guru Randhawa"
                    placeholder="Author">
                </TextInput>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    componentWrapper: {
        width: sizes.MediaItem.width,
        height: sizes.MediaItem.height,
        flexDirection: 'row',
        marginTop: 10,
    },
    MediaItemImage: {
        width: sizes.MediaItem.height,
        height: sizes.MediaItem.height,
        backgroundColor: colors[theme].foreground,
        borderRadius: sizes.MediaItem.height/8,
    },
    MediaImageTextWrapper: {
        height: sizes.MediaItem.height,
        width: sizes.MediaItem.width - sizes.MediaItem.height,
        padding: 5,
    },
    MediaItemTitle: {
        lineHeight: 20,
        fontSize: 20,
        fontFamily: 'PS-bold',
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 20,
        marginBottom: 5,
        borderWidth: 3,
        borderColor: colors[theme].foreground,
        color: colors[theme].foreground,
    },
    MediaItemAuthor: {
        borderColor: colors[theme].foreground,
        color: colors[theme].foreground,
        lineHeight: 20,
        fontSize: 20,
        fontFamily: 'PS-bold',
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 20,
        borderWidth: 3,
    }
});


export default MediaItem;
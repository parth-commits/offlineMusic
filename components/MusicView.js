import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, ToastAndroid, Platform } from 'react-native';
import { sizes } from "../assets/values/sizes";
import { colors } from '../assets/values/colors.js';
import { theme } from '../assets/values/theme.js';
import PasteLinkButton from "./PasteLinkButton";
import SavePathButton from "./SavePathButton";
import MediaItem from "./MediaItem";
import QualitySelector from "./QualitySelector";
import DownloadButton from "./DownloadButton.js";
import * as Clipboard from 'expo-clipboard';
import ClearButton from "./ClearButton";

const MusicView = (props) => {
    const [qualityHigh, setQualityHigh] = useState(true);
    const [mediaTitle, setMediaTitle] = useState('A great song');
    const [author, setAuthor] = useState('A great artist');
    const [thumbnail, setThumbnail] = useState('https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg');
    const [mediaURL, setMediaURL] = useState('');
    const [showInvalidLinkToast, setShowInvalidLinkToast] = useState(false); // only for ios
    const [showContent, setShowContent] = useState(false);

    const pasteLink = () => {
        fetchCopiedText().then((text) => fetchMediaDetails(text))
    }
    const fetchCopiedText = async () => {
        try {
            const text = await Clipboard.getStringAsync();
            setMediaURL(text);
            return text;
        } catch (error) {
            // if cant get from clipboard, it must be issue where user selected text then copied.
            // see : https://github.com/expo/expo/issues/15046
            ToastAndroid.show('Please copy URL directly from Youtube Music', ToastAndroid.LONG);
            resetState();
        }
    };

    const fetchMediaDetails = async (text) => {
        try {
            const fetchURL = `https://www.youtube.com/oembed?url=${text}&format=json`;
            fetch(fetchURL)
                .then(response => response.text())
                .then((responseData) => {
                    try {
                        const data = JSON.parse(responseData);
                        setMediaTitle(data.title);
                        setAuthor(data['author_name']);
                        setThumbnail(data['thumbnail_url']);
                        setShowContent(true);
                    } catch (error) {
                        // if error, link must be wrong, so ask to try again
                        showToastShort();
                        resetState();
                    }
                })
        } catch (error) {
            // if error, link must be wrong, so ask to try again
            showToastShort();
            resetState();
        }
    };

    const showToastShort = () => {
        if (Platform.OS === 'android') {
            ToastAndroid.show('Please enter valid URL and try again.', ToastAndroid.LONG);
        } else {
            setShowInvalidLinkToast(true);
            setTimeout(() => {
                setShowInvalidLinkToast(false);
            }, 5000);
        }
    }

    const resetState = () => {
        setMediaTitle('A great title');
        setAuthor('A great artist');
        setMediaURL('');
        setShowContent(false);
        setThumbnail('https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg');
    }

    const downloadFunc = () => {
        console.log(mediaURL, author, mediaTitle, thumbnail);
    }

    return (
        <ScrollView style={[styles.componentWrapper, {display: props.show ? 'flex' : 'none'}]}>
            <Text style={styles.heading}>Music</Text>
            <SavePathButton text={'/Internal Storage/Music/0/mymusic/'}></SavePathButton>
            <ClearButton text={'Clear'} task={resetState}></ClearButton>
            <PasteLinkButton task={pasteLink} text={'Paste Link'}></PasteLinkButton>
            {showInvalidLinkToast ? <Text style={styles.errorToast}>Please enter valid URL and try again.</Text> : null}
            {showContent ?
                <View>
                    <MediaItem
                        mediaTitle={mediaTitle}
                        setMediaTitle={setMediaTitle}
                        author={author}
                        setAuthor={setAuthor}
                        thumbnail={thumbnail}>
                    </MediaItem>
                    <Text style={[styles.heading, { fontSize: 30, marginBottom: 5, }]}>Quality</Text>
                    <QualitySelector qualityHigh={qualityHigh} setQualityHigh={setQualityHigh}></QualitySelector>
                    <DownloadButton task={downloadFunc}></DownloadButton>
                </View> : null
            }
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
    },
    errorToast: {
        width: sizes.MusicView.width - 40,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'PS-bold',
        fontSize: 20,
        color: colors[theme].foreground,
    },
});


export default MusicView;
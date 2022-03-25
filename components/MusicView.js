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
import StarsImageSVG from "./StarsImageSVG";
import * as DocumentPicker from 'expo-document-picker';
import * as Haptics from 'expo-haptics';

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
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }
    const fetchCopiedText = async () => {
        try {
            const text = await Clipboard.getStringAsync();
            // if "music" isnt in link, its not a music link, so dont proceed
            if (text && !text.includes('music')) {
                ToastAndroid.show('This is video content. Only audio will be downloaded. Ideal for podcasts.', ToastAndroid.SHORT);
            }
            setMediaURL(text);
            return text;
        } catch (error) {
            // if cant get from clipboard, it must be issue where user selected text then copied.
            // see : https://github.com/expo/expo/issues/15046
            ToastAndroid.show('Please copy URL directly from Youtube Music', ToastAndroid.SHORT);
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
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
                        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
                    }
                })
        } catch (error) {
            // if error, link must be wrong, so ask to try again
            showToastShort();
            resetState();
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        }
    };

    const showToastShort = () => {
        if (Platform.OS === 'android') {
            ToastAndroid.show('Please enter valid URL and try again.', ToastAndroid.SHORT);
        } else {
            setShowInvalidLinkToast(true);
            setTimeout(() => {
                setShowInvalidLinkToast(false);
            }, 5000);
        }
    }

    const resetState = (useHaptics) => {
        setMediaTitle('A great title');
        setAuthor('A great artist');
        setMediaURL('');
        setShowContent(false);
        setThumbnail('https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg');
        if (useHaptics) {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        }
    }

    const downloadFunc = () => {
        console.log(mediaURL, author, mediaTitle, thumbnail);
    }

    const newTask = () => {
        
        
        DocumentPicker.getDocumentAsync({
            type:'*/*',
            copyToCacheDirectory: false,
          }).then((result) => {
            console.log(result)
        }).catch((e) => {
            console.log(e);
        })
    }

    return (
        <ScrollView style={[styles.componentWrapper, { display: props.show ? 'flex' : 'none' }]}>
            <Text style={styles.heading}>Music</Text>
            <SavePathButton task={newTask} text={'/Internal Storage/Music/0/mymusic/'}></SavePathButton>
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
                </View> :
                <View>
                    <StarsImageSVG style={{ width: 200, height: 200 }}></StarsImageSVG>
                    <Text style={styles.errorToast}>Click Paste Link and if every atom in the universe is correctly aligned, something magical might happen</Text>
                </View>

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
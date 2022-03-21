import { StyleSheet, Text, View, StatusBar, SafeAreaView, Platform } from 'react-native';
import React, { useState } from 'react';

import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import NavBarView from './components/NavBarView.js';
import MusicView from './components/MusicView.js';
import VideoView from './components/VideoView.js';

import { colors } from './assets/values/colors.js';
import { theme } from './assets/values/theme.js';

/* Fonts to load */
let customFonts = {
	'PS-bold-italic': require('./assets/fonts/ProductSansBoldItalic.ttf'),
	'PS-bold': require('./assets/fonts/ProductSansBold.ttf'),
	'PS-italic': require('./assets/fonts/ProductSansItalic.ttf'),
	'PS-regular': require('./assets/fonts/ProductSansRegular.ttf'),
};

export default function App() {
	/* Page Views*/
	const [MusicPage, setMusicPage] = useState(true);


	// Load in the fonts
	let [fontsLoaded] = useFonts(customFonts);
	Font.loadAsync(customFonts);
	// Hide the status bar, probably only for android
	StatusBar.setHidden(false);


	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<SafeAreaView style={styles.container}>
				<MusicView show={MusicPage}></MusicView>
				<VideoView show={!MusicPage}></VideoView>
				<NavBarView MusicPage={MusicPage} setMusicPage={setMusicPage}></NavBarView>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors[theme].background,
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
});

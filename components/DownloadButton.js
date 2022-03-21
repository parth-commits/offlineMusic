import * as React from "react";
import { View, TouchableOpacity } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';
import { sizes } from "../assets/values/sizes";
import { colors } from '../assets/values/colors.js';
import { theme } from '../assets/values/theme.js';

const DownloadButton = (props) => {
	return (
		<TouchableOpacity onPress={() => props.task()} style={{ width: sizes.MusicView.width - 40, height: sizes.MusicView.width / 1.8, alignItems: 'center', marginBottom: 40, }}>
			<View style={{ width: sizes.MusicView.width / 1.8, height: sizes.MusicView.width / 1.8, }}>
				<Svg height="100%" width="100%" viewBox="0 0 229 229">
					<Rect width="229" height="229" rx="114" fill={colors[theme].foreground} />
					<Path d="M106.929 197.071C110.834 200.976 117.166 200.976 121.071 197.071L184.711 133.431C188.616 129.526 188.616 123.195 184.711 119.289C180.805 115.384 174.474 115.384 170.569 119.289L114 175.858L57.4315 119.289C53.5262 115.384 47.1946 115.384 43.2893 119.289C39.3841 123.195 39.3841 129.526 43.2893 133.431L106.929 197.071ZM104 32L104 190H124L124 32L104 32Z" fill={colors[theme].background} />
				</Svg>
			</View>
		</TouchableOpacity>
	)
}

export default DownloadButton

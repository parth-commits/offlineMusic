import * as React from "react";
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { sizes } from "../assets/values/sizes";
import { colors } from '../assets/values/colors.js';
import { theme } from '../assets/values/theme.js';

const StarsImageSVG = () => {
    return (
        <View style={{ width: sizes.MusicView.width - 40, height: sizes.MusicView.width / 1.8, alignItems: 'center', marginTop: 40, marginBottom: 20, }}>
            <View style={{ width: sizes.MusicView.width / 1.8, height: sizes.MusicView.width / 1.8, }}>
                <Svg height="100%" width="100%" viewBox="0 0 514 501">
                    <Path d="M267.5 110L311.696 190.361L400.172 208.465L339.01 276.235L349.496 367.785L267.5 329.307L185.504 367.785L195.99 276.235L134.828 208.465L223.304 190.361L267.5 110Z" fill={colors[theme].foreground} />
                    <Path d="M378 24L396.059 55.8626L432.21 63.0405L407.219 89.9106L411.504 126.209L378 110.953L344.496 126.209L348.781 89.9106L323.79 63.0405L359.941 55.8626L378 24Z" fill={colors[theme].foreground} />
                    <Path d="M127.5 0L149.836 39.7578L194.549 48.7143L163.64 82.2425L168.939 127.536L127.5 108.499L86.0611 127.536L91.3603 82.2425L60.4505 48.7143L105.164 39.7578L127.5 0Z" fill={colors[theme].foreground} />
                    <Path d="M141 388L159.059 419.863L195.21 427.041L170.219 453.911L174.504 490.209L141 474.953L107.496 490.209L111.781 453.911L86.7898 427.041L122.941 419.863L141 388Z" fill={colors[theme].foreground} />
                    <Path d="M474.5 257L487.014 278.994L512.067 283.948L494.748 302.496L497.718 327.552L474.5 317.021L451.282 327.552L454.252 302.496L436.933 283.948L461.986 278.994L474.5 257Z" fill={colors[theme].foreground} />
                    <Path d="M333.5 418L346.014 439.994L371.067 444.948L353.748 463.496L356.718 488.552L333.5 478.021L310.282 488.552L313.252 463.496L295.933 444.948L320.986 439.994L333.5 418Z" fill={colors[theme].foreground} />
                    <Path d="M48.5 209L63.8656 236.351L94.6262 242.513L73.362 265.578L77.0076 296.737L48.5 283.641L19.9924 296.737L23.638 265.578L2.37376 242.513L33.1344 236.351L48.5 209Z" fill={colors[theme].foreground} />
                </Svg>
            </View>
        </View>
    )
}

export default StarsImageSVG;

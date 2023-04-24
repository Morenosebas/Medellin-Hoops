import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "../stylesheets/NavBar";
import { useWindowDimensions, Animated } from 'react-native';
import { useState } from "react";

export const NavBarTop = ({ navigation, band = false }) => {
    const [showMenu, setShowMenu] = useState(band);
    const { width, height, fontScale } = useWindowDimensions();
    const [slideBarPosition, setSlideBarPosition] = useState(new Animated.Value(-width / 1.5));
    const toggleSlideBar = () => {
        if (showMenu) {
            console.log("ShowMenu", showMenu)
            Animated.timing(slideBarPosition, {
                toValue: -width / 1.5,
                duration: 500,
                useNativeDriver: false,
            }).start(() => setShowMenu(false));
        } else {
            setShowMenu(true);
            Animated.timing(slideBarPosition, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false,
            }).start();
        }
    }

    return (
        <View style={styles.container}>
            {showMenu && <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000 }}>
                <Animated.View style={{ ...styles.slideBar, width: width / 1.5, height: height * 1.1, left: slideBarPosition }}>
                </Animated.View>
            </View>}
            <View style={styles.containerBars}>
                <TouchableOpacity onPress={toggleSlideBar} style={
                    { ...styles.containerBars }} >
                    {
                        showMenu ? <Image source={require('../assets/Icons/barsBlack.png')} /> :
                            <Image source={require('../assets/Icons/bars.png')} />
                    }
                </TouchableOpacity>
            </View>
            <View style={styles.containerMedLogo}>
                <Image source={require('../assets/MEDELLIN.png')} />
            </View>

        </View >
    )

}

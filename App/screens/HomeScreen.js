import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  ImageBackground,
  Button,
} from 'react-native';
import { COLORS, FONTS, ICONS, IMAGES } from '../constants';
import { SIZES, StatusBarHeight } from '../constants/theme';

const HomeScreen = ({navigation}) => {
  return (
    <ImageBackground source={IMAGES.IMG_BACK1} style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(0, 0, 0, 0.20)"
        translucent
      />
      {/* container View */}
      <View>
        {/* header */}
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.headerIconConatiner}
            onPress={() => navigation.openDrawer()}>
            <Image source={ICONS.drawer} style={{width: 25, height: 20}} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Asian Sound Radio</Text>
        </View>
        {/* contents */}
        <View style={styles.contentContainer}>
          <Text style={styles.subHeading}>
            You are currently listening to...
          </Text>
          <Image
            source={IMAGES.ASIAN}
            style={{
              width: SIZES.width / 1.5,
              height: SIZES.width / 5,
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>

      {/* buttons */}
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.buttonIconContainer}>
          <Image source={ICONS.play} style={styles.buttonIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonIconContainer}>
          <Image source={ICONS.pause} style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: 'space-between',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: StatusBarHeight,
    paddingLeft: 20,
  },
  headerText: {
    fontSize: SIZES.h4,
    fontFamily: FONTS.h4.fontFamily,
    lineHeight: FONTS.h3.lineHeight,
    color: COLORS.white,
    paddingLeft: 5,
  },
  headerIconConatiner: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  subHeading: {
    fontSize: SIZES.h3,
    color: COLORS.white,
  },
  contentContainer: {
    alignItems: 'center',
    marginTop: StatusBarHeight / 2,
  },
  buttonView: {
    marginBottom: StatusBarHeight,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  buttonIconContainer: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    margin: 5,
  },
  buttonIcon: {
    width: 50,
    height: 50,
  },
});

export default HomeScreen;

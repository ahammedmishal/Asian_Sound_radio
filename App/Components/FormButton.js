import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimenstions';
import {COLORS, FONTS, SIZES} from '../constants';
import LinearGradient from 'react-native-linear-gradient';

const FormField = ({placeholderText, ...rest}) => {
  return (
    <View style={{width:'100%',alignItems:'center',paddingBottom:15}}>
        <LinearGradient
        angle={100}
        useAngle
        colors={['#00d2f2', '#d81ceb']}
        style={styles.LinearGradientStyle}>
        <TextInput
            placeholder={placeholderText}
            placeholderTextColor={COLORS.black}
            underlineColorAndroid="transparent"
            style={styles.TextInputStyleClass}
        />
        </LinearGradient>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  LinearGradientStyle: {
    height: 70,
    width: '80%',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  TextInputStyleClass: {
    width: '100%',
    height: '100%',
    borderRadius: 35,
    backgroundColor: 'white',
    fontSize: SIZES.h4,
    fontFamily: FONTS.h3.fontFamily,
    lineHeight: FONTS.h3.lineHeight,
    paddingTop: 20,
    paddingLeft: 30,
  },
});

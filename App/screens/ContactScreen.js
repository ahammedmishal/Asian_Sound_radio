import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import {COLORS, FONTS, IMAGES, SIZES} from '../constants';
import {StatusBarHeight} from '../constants/theme';
import FormField from '../Components/FormButton';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons'

import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';;


const ContactScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(0, 0, 0, 0.20)"
        translucent
      />
      {/* container View */}
      <View>
        <Image
          source={IMAGES.ASIAN}
          style={styles.assianLogo}
        />
      </View>

      <View style={styles.formFieldView}>
        <FormField placeholderText={'Full Name'} />
        <FormField placeholderText={'Business Name'} />
        <FormField placeholderText={'Contact  Number'} />
        <FormField placeholderText={'Email Address'} />
        <FormField placeholderText={'City'} />
        <FormField placeholderText={'Country'} />

        <TouchableOpacity style={styles.submitButton} onPress={()=> navigation.navigate("Home")}>
          <LinearGradient
            angle={100}
            useAngle
            colors={['#ff6801', '#ff1700']}
            style={styles.gradient}>
            <Text style={styles.submitButtonText}>Submit</Text>
            <View
              style={styles.submitButtonView}>
              <Icon
                name="ios-chevron-forward-circle-outline"
                size={responsiveWidth(8)}
                color="#da1512"
              />
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.bottomText}>
        Enquire now,and our team of dedicated radio Advertising Specialists are
        waiting to help
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    paddingTop: StatusBarHeight,
  },
  assianLogo:{
    width: responsiveWidth(80),
    height: responsiveHeight(8),
    resizeMode: 'contain',
    marginVertical:responsiveHeight(2)
  },
  formFieldView:{
    width: '100%',
    alignItems: 'center'
  },
  submitButtonView:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: '100%',
    width: responsiveWidth(12),
    borderTopRightRadius: responsiveWidth(10),
    borderBottomRightRadius: responsiveWidth(10),
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
  submitButton: {
    width: responsiveWidth(40),
    height: responsiveHeight(7),
    borderRadius: responsiveWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff1b00',
    marginTop:responsiveHeight(1)
  },
  submitButtonText: {
    color: COLORS.white,
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
    paddingLeft: responsiveWidth(8)
  },
  gradient: {
    flex: 1,
    width: '100%',
    borderRadius: responsiveWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomText: {
    flex:1,
    color: COLORS.white,
    fontSize: responsiveFontSize(2.8),
    fontWeight: 'bold',
    paddingHorizontal:responsiveWidth(7),
    marginTop:responsiveHeight(1),
    fontFamily: FONTS.h3.fontFamily,
  },
});

export default ContactScreen;

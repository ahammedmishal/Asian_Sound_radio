import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {COLORS, FONTS, ICONS, IMAGES, SIZES} from '../constants';
import {StatusBarHeight} from '../constants/theme';
import FormField from '../Components/FormButton';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

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
          style={{
            width: SIZES.width / 1.3,
            height: SIZES.width / 5,
            resizeMode: 'contain',
          }}
        />
      </View>

      <View style={{width: '100%', alignItems: 'center'}}>
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
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                height: '100%',
                width: '25%',
                borderTopRightRadius: 35,
                borderBottomRightRadius: 35,
              }}>
              <Icon
                name="ios-chevron-forward-circle-outline"
                size={30}
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
    width: 200,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff1b00',
  },
  submitButtonText: {
    color: COLORS.white,
    fontSize: SIZES.h4,
    fontWeight: 'bold',
    paddingLeft: 40,
  },
  gradient: {
    flex: 1,
    width: '100%',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomText: {
    color: COLORS.white,
    fontSize: SIZES.h3,
    fontWeight: 'bold',
    paddingHorizontal:30,
    marginTop:20,
    fontFamily: FONTS.h3.fontFamily,
  },
});

export default ContactScreen;

import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5F8EF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  element: {
    marginTop: -hp('18%'),
    marginLeft: -wp('35%'),
    position: "absolute",
  },

  elementBottom: {
    resizeMode: 'cover',
    marginTop: -hp('88%'),
    marginLeft: -wp('50%'),
    position: "absolute",
    zIndex: -99,
  },

  started: {
    marginTop: hp('10%'),
    textAlign: 'left',
    fontSize: wp('9%'),
    fontWeight: 'bold',
    color: '#00B761',
  },

  inputBox: {
    width: wp('70%'),
    height: hp('6%'),
    backgroundColor: '#fff',
    borderRadius: wp('2%'),
    paddingLeft: wp('2%'),
    fontSize: 16,
    color: '#828282',
    backgroundColor: 'white',
    margin: 8,
  },

  textOr: {
    fontWeight: 'bold',
    color: '#E5F8EF',
    margin: 8,
    justifyContent: 'center',
    textAlign: 'center',
  },

  textBig: {
    textAlign: 'left',
    fontSize: wp('15%'),
    fontWeight: 'bold',
    color: '#00B761',
  },

  textSmall: {
    marginBottom: -hp('2%'),
    marginTop: hp('10%'),
    textAlign: 'left',
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: '#00B761',
  },

  textMini: {
    textAlign: 'center',
    fontSize: wp('3.7%'),
    color: '#00B761',
  },

  buttonBox: {
    backgroundColor: '#00B761',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('2%'),
    width: wp('70%'),
    height: hp('6%'),
    marginTop: hp('1%'),
    marginBottom: hp('2%'),
  },

  buttonGoogle: {
    backgroundColor: '#E5F8EF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('2%'),
    width: wp('70%'),
    height: hp('6%'),
    padding: 8,
    margin: 8,
  },
});

import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#E5F8EF',
    width: wp('100%'),
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: wp('3%'),
    paddingTop: hp('2%'),
  },
  cardBox: {
    backgroundColor: '#FFFFFF',
    // width: 360,
    height: hp('17%'),
    // marginVertical: hp('1%'),
    alignItems: 'center',
    // flex: 1,
    flexDirection: 'row',
    borderRadius: wp('2%'),
    paddingLeft: wp('5%')
  },

  cardImg: {
    width: hp('12%'),
    height: hp('12%'),
    borderRadius: hp('50%'),
    marginRight: wp('4%'),
    resizeMode: 'cover',
    borderWidth: 4,
    borderColor: '#00B761'
  },

  cardTitle: {
    fontSize: wp('6%')
  },

  seeDetail: {
    marginTop: hp('1%'),
    fontSize: wp('3.5%'),
    backgroundColor: '#BCECD6',
    borderRadius: wp('2%'),
    height: hp('4.5%'),
    width: wp('28%'),
    justifyContent: 'center',
    alignItems: 'center'
  },

  seeDetailText: {
    color: '#00B761',
    fontSize: wp('3.5%')
  },

  daun: {
    position: "absolute",
    marginTop: -hp('3.5%'),
    marginLeft: -wp('16%'),
    zIndex: -99,
    borderTopRightRadius: wp('2%'),
    borderBottomRightRadius: wp('2%'),
  }
});

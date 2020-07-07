import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  fruitCardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    flex: 1,
  },

  overlay: {
    borderRadius: wp('3%'),
    width: wp('43%'),
    height: hp('30%'),
    backgroundColor: '#00000050',
    opacity: 100,
    marginBottom: -hp('30%'),
    zIndex: 2,
  },

  fruitCard: {
    overflow: 'hidden',
    borderRadius: wp('3%'),
    width: wp('43%'),
    height: hp('30%'),
    marginBottom: -hp('30%'),
  },

  fruitCardTitle: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
    color: 'white',
    marginTop: -hp('30%'),
    paddingLeft: 16,
    marginTop: hp('25%'),
    zIndex: 4,
  },

  vegeCard: {
    overflow: 'hidden',
    borderRadius: wp('3%'),
    width: wp('45%'),
    height: hp('30%'),
    // marginBottom: -hp('30%'),
  },

  vegeCardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    flex: 1,
  },

  vegeCardTitle: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
    color: 'white',
    marginTop: -hp('5%'),
    paddingLeft: 16,
    // marginTop: hp('25%'),
    zIndex: 4,
  },
});

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
    paddingHorizontal: wp('5%'),
  },

  scroll: {
    flex: 1,
    backgroundColor: '#E5F8EF',
  },

  divider: {
    marginTop: hp('3%'),
    borderBottomColor: '#DEDEDE',
    borderBottomWidth: 1,
  },

  fruitTitle: {
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
    color: '#323232',
    marginTop: hp('3%'),
  },

  poster: {
    marginTop: hp('2%'),
    borderRadius: wp('5%'),
    width: wp('90%'),
    height: hp('27%'),
    resizeMode: 'cover',
  },
});

import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({

  heloUsername: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    marginTop: hp('2%'),
    paddingLeft: wp('3%'),
    color: '#323232'
  },

  planToWater: {
    fontSize: wp('4%'),
    color: '#707070',
    paddingLeft: wp('3%'),
    marginTop: hp('1%'),
  },

  horizontalScroll: {
    flexDirection: 'row',
    marginTop: 8,
  },
});

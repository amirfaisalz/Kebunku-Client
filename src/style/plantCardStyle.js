import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  containerCard: {
    marginTop: hp('1%'),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    marginRight: hp('0.7%'),
    width: wp('20%'),
    height: hp('11.3%'),
    borderRadius: 50,
    overflow: 'hidden',
    padding: wp('2%'),
    borderColor: '#00B761',
    borderWidth: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  cardImage: {
    width: wp('20%'),
    height: hp('11.3%'),
  },

  cardTitle: {
    marginTop: hp('0.5%'),
    fontSize: 16,
    fontWeight: 'bold',
    color: '#323232',
  },
});

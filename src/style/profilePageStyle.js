import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5F8EF',
    paddingHorizontal: wp('3%'),
  },
  header: {
    flexDirection: 'row',
  },
  tinyLogo: {
    width: wp('27%'),
    height: wp('27%'),
    borderRadius: wp('50%'),
    marginTop: hp('2%'),
    borderWidth: wp('1%'),
    borderColor: '#00B761',
  },
  headerBoxInfo: {
    width: wp('70%'),
    marginLeft: wp('6%'),
  },

  textName: {
    marginTop: hp('2%'),
    fontSize: wp('7%'),
    textAlign: 'left',
    borderColor: 'red',
    fontWeight: 'bold',
  },

  textEmail: {
    color: '#A7A7A7',
    textAlign: 'left',
    fontSize: wp('4%'),
  },

  boxNumPlant: {
    backgroundColor: '#BCECD6',
    borderRadius: wp('10%'),
    width: wp('55%'),
    height: hp('3.5%'),
    marginTop: hp('1%'),
    marginLeft: -wp('3%'),
    paddingLeft: wp('3%'),
  },

  textNumPlant: {
    color: '#00B761',
    textAlign: 'left',
    marginTop: hp('0.3%'),
    fontSize: wp('3.5%'),
  },

  myPlant: {
    marginTop: hp('2%'),
    fontSize: wp('4%'),
  },

  fruitContainer: {
    backgroundColor: '#E5F8EF',
    marginTop: hp('2%'),
    marginRight: wp('3%'),
    height: hp('30%'),
  },

  overlay: {
    borderRadius: wp('3%'),
    width: wp('45%'),
    height: hp('30%'),
    backgroundColor: '#00000050',
    opacity: 100,
    marginBottom: -hp('30%'),
    zIndex: 2,
  },

  fruitCard: {
    overflow: 'hidden',
    borderRadius: wp('3%'),
    width: wp('45%'),
    height: hp('30%'),
    marginBottom: -hp('30%'),
  },

  fruitCardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    flex: 1,
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
  logout: {
    marginTop: hp('5%'),
    width: wp('50%'),
    height: hp('5%'),
    borderRadius: wp('2%'),
    backgroundColor: '#00B761',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    color: 'white',
    fontSize: wp('4%')
  },
});

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

  headerText: {
    marginTop: hp('2%'),
    fontSize: wp('6%'),
  },

  boxFav: {
    width: wp('9%'),
    height: hp('5%'),
    marginLeft: wp('85%'),
    marginTop: -hp('4%'),
    marginBottom: hp('2%'),
    backgroundColor: '#BCECD6',
    borderRadius: wp('1%'),
    alignItems: 'center',
    justifyContent: 'center',
  },

  saveBtnTrue: {
    color: '#00B761',
    fontSize: wp('6%')
  },

  saveBtnBottom: {
    color: 'white',
    fontSize: wp('8%')
  },

  detailImg: {
    width: wp('94%'),
    borderRadius: wp('5%'),
  },

  paragrafTitle: {
    marginTop: hp('2%'),
    fontSize: wp('5%'),
  },

  paragrafText: {
    color: '#828282',
    fontSize: wp('4%'),
    textAlign: 'justify'
  },

  action: {
    marginTop: -hp('2%'),
    backgroundColor: '#00B761',
    width: wp('90%'),
    height: hp('7%'),
    borderRadius: wp('2%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  actionText: {
    fontSize: wp('5%'),
    color: 'white',
  },

  actionFavFalse: {
    alignItems: 'center',
    marginTop: hp('1%'),
    marginLeft: wp('19%')
  },

  navMenuIcon: {
    alignSelf: 'center',
    height: 40,
    width: 40,
  },

  containerSteps: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: hp('2%')
  },

  kotakSteps: {
    width: wp('3%'),
    height: wp('3%'),
    backgroundColor: '#00B761',
    borderRadius: wp('0.7%')
  },

  langkah: {
    color: '#00B761',
    fontSize: wp('4%'),
    marginLeft: wp('2%'),
    marginTop: -hp('0.8%')
  },

  langkahText: {
    marginTop: hp('1%'),
    fontSize: wp('4%'),
    color: '#828282'
  },
  
  divider: {
    marginTop: hp('3%'),
    borderBottomColor: '#DEDEDE',
    borderBottomWidth: 1,
  },

});

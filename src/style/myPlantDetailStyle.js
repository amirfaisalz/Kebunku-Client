import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },

  background: {
    width: wp('100%'),
    height: hp('75%'),
    backgroundColor: '#00B761',
    paddingTop: hp('3%'),
    paddingHorizontal: wp('4%'),
  },

  backBtn: {
    color: 'white',
    fontSize: wp('7%'),
    marginBottom: hp('3%'),
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.4)',
    marginTop: -hp('1%'),
    // marginBottom: hp('2%'),
    height: hp('150%')
    // position: 'absolute'
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: '#e83f4e',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textStyleBatal: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  containerDelete: {
    // flex: 1,
    flexDirection: 'row',
    // justifyContent: "space-between",
    // height: hp('20%'),
    // width: wp('90%'),
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'yellow',
  },

  containerHapus: {
    width: wp('50%'),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  pencil: {
    color: 'white',
    fontSize: wp('7%'),
    // position: 'absolute',
    marginLeft: wp('73%'),
    // marginTop: -hp('1%'),
    zIndex: 99999,
    width: wp('10%'),
    // borderWidth: 1,
    // borderColor: 'red',
  },
  delete: {
    color: 'white',
    fontSize: wp('7%'),
    // position: 'absolute',
    // marginLeft: wp('82%'),
    // marginTop: hp('5%'),
    zIndex: 99999,
    width: wp('100%'),
  },

  paragrafTitle: {
    fontSize: wp('10%'),
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    // marginTop: hp('2%'),
    // borderWidth: 1,
    // borderColor: 'red',
    zIndex: -99999,
  },

  backgroundWhite: {
    width: wp('100%'),
    marginTop: hp('14%'),
    height: hp('30%'),
    backgroundColor: '#E5F8EF',
    borderTopLeftRadius: wp('7%'),
    borderTopRightRadius: wp('7%'),
    paddingHorizontal: wp('3%'),
    alignItems: 'center',
  },

  button: {
    width: wp('90%'),
    height: hp('6%'),
    backgroundColor: '#00B761',
    marginTop: hp('2%'),
    borderRadius: wp('2%'),
  },

  textButton: {
    textAlign: 'center',
    marginTop: hp('1%'),
    fontSize: wp('4%'),
    color: 'white',
  },

  

  subtitle: {
    marginTop: hp('2%'),
    fontSize: wp('5%'),
    color: 'white',
    fontWeight: 'bold',
  },

  plantAge: {
    fontSize: wp('4%'),
    color: 'white',
  },

  imagePlant: {
    width: wp('40%'),
    height: hp('30%'),
    backgroundColor: 'red',
    borderRadius: wp('5%'),
    marginLeft: wp('55%'),
    marginTop: -hp('55%'),
    borderWidth: wp('1%'),
    borderColor: 'white',
  },

  noteText: {
    fontSize: 16,
    color: '#828282',
  },

  paragrafText: {
    fontSize: 14,
    color: '#828282',
  },
});

import React, { useState } from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { useDispatch } from 'react-redux';
import { postUserPlant, putUserPlant } from '../store/actions/index';

export default function PlantThisPage({ route, navigation }) {
  let PlantId;

  if (route.params && route.params.PlantId) {
    PlantId = route.params.PlantId;
  }

  let plant;

  if(route.params && route.params.plant) {
    plant = route.params.plant;
    PlantId = plant._id;
  }

  const dispatch = useDispatch();

  const [ValidationText, setValid] = useState('');
  const [notes, setNotes] = useState(plant ? plant.notes : '');
  const [reminder, setReminder] = useState( plant ? plant.water_reminder.toString() : '');
  const [plantedDate, setDate] = useState(plant ? plant.planted_date : '');
  const [pupuk, setPupuk] = useState(plant ? plant.pupuk : '');

  const selectedItem = function () {
    if (plant)
      return (
        <TextInput
          style={styles.inputBoxDisable}
          placeholderTextColor="#828282"
          multiline={true}
          onChange={(e) => setNotes(e.nativeEvent.text)}
          editable={false}
          selectTextOnFocus={false}
          value={plant.PlantId.name}
        />
      );
  };

  const submitPlant = function () {
    if (plant) {
      let dataEditPlant = {
        PlantId: plant._id,
        notes,
        reminder,
        plantedDate,
        pupuk,
      };
      setNotes('');
      setReminder(1);
      setDate('');
      setPupuk('');
      dispatch(putUserPlant(dataEditPlant));
      navigation.navigate('Home');
    } else {
      if (notes && reminder && pupuk) {
        let dataPlant = { PlantId, notes, reminder, plantedDate, pupuk };
        setNotes('');
        setReminder(1);
        setDate('');
        setPupuk('');
        dispatch(postUserPlant(dataPlant));
        navigation.navigate('Home');
      } else {
        setValid('Data belum Lengkap');
      }
    }
  };
  const cancle = function () {
    setNotes('');
    setReminder(1);
    setDate('');
    setPupuk('');
    navigation.goBack()
  };

  return (
    <View style={styles.container}>
      <Text>{ValidationText}</Text>

      <View style={styles.form}>
        {selectedItem()}
        <TextInput
          style={styles.inputBox}
          placeholder="Catatan"
          placeholderTextColor="#828282"
          multiline={true}
          onChange={(e) => setNotes(e.nativeEvent.text)}
          value={notes}
        />

        <TextInput
          style={styles.inputBox}
          placeholder="Reminder (dalam jam)"
          placeholderTextColor="#828282"
          onChange={(e) => setReminder(e.nativeEvent.text)}
          keyboardType={'numeric'}
          value={reminder}
        />

        <DatePicker
          style={styles.inputDate}
          date={plantedDate} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="Pilih Tanggal"
          format="YYYY-MM-DD"
          minDate="2016-01-01"
          maxDate="2026-01-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />

        <TextInput
          style={styles.inputBox}
          placeholder="Pupuk"
          placeholderTextColor="#828282"
          onChange={(e) => setPupuk(e.nativeEvent.text)}
          value={pupuk}
        />
        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={submitPlant}>
          <Text style={styles.buttonCancle}>{ plant ? 'Simpan' : 'Tanam'}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={cancle}>
            <Text style={styles.buttonSubmit}>Batal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5F8EF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imgPlantThis: {
    width: wp('40%'),
    height: wp('45%'),
    padding: hp('1%'),
    marginHorizontal: hp('10%'),
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 15,
  },

  textPlantThis: {
    width: wp('20%'),
  },

  inputBox: {
    backgroundColor: 'white',
    padding: hp('1%'),
    margin: hp('1%'),
    width: wp('70%'),
    borderRadius: 15,
  },

  inputBoxDisable: {
    color: 'grey',
    backgroundColor: 'white',
    padding: hp('1%'),
    margin: hp('1%'),
    width: wp('70%'),
    borderRadius: 15,
  },

  form: {
    alignItems: 'center',
    padding: hp('2%'),
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#00B761',
  },

  inputDate: {
    padding: hp('1%'),
    margin: hp('1%'),
    width: wp('70%'),
    borderRadius: 15,
    backgroundColor: 'white',
  },

  rowContainer: {
    flexDirection: 'row',
  },

  rowContainerImg: {
    flex: 1,
    flexDirection: 'row',
    width: wp('70%'),
    paddingTop: wp('15%'),
    padding: wp('2%'),
  },

  buttonSubmit: {
    borderRadius: 15,
    width: wp('30%'),
    height: hp('5%'),
    padding: hp('1%'),
    margin: hp('1%'),
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#00B761',
  },

  buttonCancle: {
    backgroundColor: '#00B761',
    borderRadius: 15,
    width: wp('30%'),
    height: hp('5%'),
    padding: hp('1%'),
    margin: hp('1%'),
    textAlign: 'center',
  },
});

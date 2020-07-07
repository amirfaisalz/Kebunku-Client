import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, AsyncStorage } from 'react-native';
import styles from '../style/plantToWaterStyle';
import PlantCard from '../component/PlantCard';
import { fetchAllMyPlant } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function PlantToWaterBox() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  useEffect(() => {
    dispatch(fetchAllMyPlant());
    AsyncStorage.getItem('name').then((result) => {
      setName(result);
    });
  }, [dispatch]);

  const myPlant = useSelector((state) => state.userPlantReducer.myPlant);

  const notWateredList = myPlant.filter((element) => {
    return element.watered == false;
  });

  return (
    <View style={styles.waterToday}>
      <Text style={styles.heloUsername}>Halo {name}</Text>
      {(!notWateredList.length && myPlant.length) ? (
        <Text style={styles.planToWater}>Sudah disiram semua, Yey!</Text>
      ) : !myPlant.length && !notWateredList.length ? (
        <Text style={styles.planToWater}>Kamu belum menanam apapun :(</Text>
      ) : (
        <Text style={styles.planToWater}>
          {notWateredList.length} tanaman belum disiram hari ini
        </Text>
      )}
      <ScrollView
        horizontal
        style={styles.horizontalScroll}
        showsHorizontalScrollIndicator={false}>
        <PlantCard notWateredList={notWateredList} />
      </ScrollView>
    </View>
  );
}

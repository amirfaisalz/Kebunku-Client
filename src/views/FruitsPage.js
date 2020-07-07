import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPlant } from '../store/actions/index';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button,
  ImageBackground,
} from 'react-native';
import BottomNavBar from '../component/BottomNavBar';
import FruitPageCard from '../component/FruitPageCard';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function FruitPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPlant());
  }, [dispatch]);

  const plantList = useSelector((state) => state.plantReducer.plantList);
  const error = useSelector((state) => state.plantReducer.error);
  const loading = useSelector((state) => state.plantReducer.loading);

  // console.log(plantList, "plantlist vegetable =========")

  const fruitList = plantList.filter((element) => {
    return element.category == 'Buah';
  });

  // console.log(fruitList, "vegetableList =========")
  return (
    <View style={styles.container}>
      <ScrollView>
        {loading ? (
          <Text style={{ marginTop: 50 }}>Loading...</Text>
        ) : (
          <>
            {error ? (
              <Text style={{ marginTop: 50 }}>{error}</Text>
            ) : (
              <>
                <Text style={styles.rekomendasi}>
                  Rekomendasi Buah Untuk di Tanam
                </Text>
                {fruitList.map((fruit, i) => {
                  return <FruitPageCard key={i} fruit={fruit} />;
                })}
                <View style={{marginTop: hp('5%')}}></View>
              </>
            )}
          </>
        )}
      </ScrollView>
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
  rekomendasi: {
    marginLeft: wp('3%'),
    marginTop: hp('2%'),
    fontSize: wp('4%')
  },
});

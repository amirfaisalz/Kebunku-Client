import React, { useState, useEffect } from 'react';
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
import { useNavigation } from '@react-navigation/native';
import allPlantImage from '../../assets/image/allPlant/allPlantImage';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllFav } from '../store/actions';
import styles from '../style/fruitPageCardStyle';

export default function VegetablePageCard(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllFav());
  }, [dispatch]);

  const toDetailPage = (obj) => {
    navigation.navigate('FruitDetail', {
      obj,
    });
  };

  let image;

  for (let i = 0; i < allPlantImage.length; i++) {
    if (allPlantImage[i].imgName === props.vegetable.name) {
      image = allPlantImage[i].uri;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardBox}>
        <Image style={styles.cardImg} source={image} />
        <View>
          <Text style={styles.cardTitle}>{props.vegetable.name}</Text>
          <TouchableOpacity
            style={styles.seeDetail}
            onPress={() => toDetailPage(props.vegetable)}>
            <Text style={styles.seeDetailText}>Lihat Detail</Text>
          </TouchableOpacity>
          <Image
            style={styles.daun}
            source={require('../../assets/image/element/daun_kecil.png')}
          />
        </View>
      </View>
    </View>
  );
}

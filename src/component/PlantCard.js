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
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllMyPlant } from '../store/actions';
import detailImage from '../../assets/image/detail/detailImage';
import styles from '../style/plantCardStyle';

const PlantCard = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { notWateredList } = props;
  console.log(notWateredList);

  useEffect(() => {
    dispatch(fetchAllMyPlant());
  }, [dispatch]);

  const myPlant = useSelector((state) => state.userPlantReducer.myPlant);

  const toDetailPage = (plant) => {
    navigation.navigate('MyPlant', {
      obj: plant
    });
  };

  let image;

  return (
    <>
      {notWateredList.map((plant, i) => {
        for (let i = 0; i < detailImage.length; i++) {
          if (detailImage[i].imgName === plant.PlantId.name) {
            image = detailImage[i].uri;
          }
        }

        return (
          <TouchableOpacity key={i} onPress={() => toDetailPage(plant)}>
            <View style={styles.containerCard}>
              <View style={styles.card}>
                <ImageBackground
                  style={styles.cardImage}
                  source={image}></ImageBackground>
              </View>
              <Text style={styles.cardTitle}>{plant.PlantId.name}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </>
  );
};

export default PlantCard;

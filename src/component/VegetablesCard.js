import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, Button, ImageBackground} from 'react-native';
// import styles from '../style/fruitVegeCardStyle'
import styles from '../style/fruitVegeCardStyle'
import { useNavigation } from '@react-navigation/native';

export default function VegetablesCard() {
  const navigation = useNavigation();

  const toTomatPage = () => {
    navigation.navigate('FruitDetail', {
      obj: {
        "_id": "5ef849e4ac76c3346ce34aa0",
        "name": "Tomat",
        "scientific_name": "Solanum lycopersicum",
        "overview": "Tomat (Solanum lycopersicum syn. Lycopersicum esculentum) adalah tumbuhan dari keluarga Solanaceae, tumbuhan asli Amerika Tengah dan Selatan, dari Meksiko sampai Peru. Tomat merupakan tumbuhan siklus hidup singkat, dapat tumbuh setinggi 1 sampai 3 meter. Tumbuhan ini memiliki buah berawarna hijau, kuning, dan merah yang biasa dipakai sebagai sayur dalam masakan atau dimakan secara langsung tanpa diproses. Tomat memiliki batang dan daun yang tidak dapat dikonsumsi karena masih sekeluarga dengan kentang dan Terung yang mengadung Alkaloid.",
        "fase_vegetatif": "15-35",
        "fase_generatif": "30-80",
        "category": "Sayuran",
        "__v": 0
      },
    });
  };

  const toWortelPage = () => {
    navigation.navigate('FruitDetail', {
      obj: {
      "_id": "5ef849e4ac76c3346ce34aa7",
      "name": "Wortel",
      "scientific_name": "Daucus carota",
      "overview": "Wortel adalah tumbuhan biennial (siklus hidup 12 - 24 bulan) yang menyimpan karbohidrat dalam jumlah besar untuk tumbuhan tersebut berbunga pada tahun kedua. Batang bunga tumbuh setinggi sekitar 1 m, dengan bunga berwarna putih, dan rasa yang manis langu. Bagian yang dapat dimakan dari wortel adalah bagian umbi atau akarnya.",
      "fase_vegetatif": "15-25",
      "fase_generatif": "50-100",
      "category": "Sayuran",
      "__v": 0
    },
    });
  };

  return (
    <>
      <TouchableOpacity onPress={() => toTomatPage()}>
      <View style={styles.overlay}>
          <Text></Text>
        </View>
        <View style={styles.vegeCard}>
          <ImageBackground
            style={styles.vegeCardImage}
            source={require('../../assets/image/detail/Tomat.jpg')}
          >
            
          </ImageBackground>
        </View>
        <Text style={styles.vegeCardTitle}>Tomat</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => toWortelPage()}>
      <View style={styles.overlay}>
          <Text></Text>
        </View>
        <View style={styles.fruitCard}>
          <ImageBackground
            style={styles.fruitCardImage}
            source={require('../../assets/image/detail/Wortel.jpg')}
          >
           
          </ImageBackground>
        </View>
        <Text style={styles.fruitCardTitle}>Wortel</Text>
      </TouchableOpacity>
    </>
  );
}

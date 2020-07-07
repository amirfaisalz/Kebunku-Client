import React, { useState } from 'react';
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
import styles from '../style/homePageStyle';
import {
  PlantToWaterBox,
  FruitsCard,
  VegetablesCard,
  BottomNavBar,
} from '../component';
import { useNavigation } from '@react-navigation/native';

export default function HomePage() {
  const navigation = useNavigation();

  const toAllFruit = () => {
    navigation.navigate('FruitsPage');
  };

  const toAllVegetable = () => {
    navigation.navigate('VegetablesPage');
  };

  // PROPS
  return (
    <View style={styles.container}>
     
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <PlantToWaterBox />

        <View style={styles.divider}></View>

        {/* Yang di bawah ini Komponen My Fruits */}

        <Text style={styles.fruitTitle}>Rekomendasi Buah</Text>

        <TouchableOpacity onPress={() => toAllFruit()}>
          <Image
            style={styles.poster}
            source={require('../../assets/image/element/fruitRecommendation.jpg')}
          />
        </TouchableOpacity>

        <Text style={styles.fruitTitle}>Rekomendasi Sayuran</Text>
        <TouchableOpacity onPress={() => toAllVegetable()}>
          <Image
            style={styles.poster}
            source={require('../../assets/image/element/vegeRecommendation.jpg')}
          />
        </TouchableOpacity>

        <View style={{ marginBottom: 30 }}>
          <Text></Text>
        </View>
      </ScrollView>
    </View>
  );
}

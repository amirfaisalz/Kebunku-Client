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
import styles from '../style/fruitVegeCardStyle';
import { useNavigation } from '@react-navigation/native';

export default function FruitsCard() {
  const navigation = useNavigation();

  const toApplePage = () => {
    navigation.navigate('FruitDetail', {
      obj: {
        _id: '5ef849e4ac76c3346ce34ab3',
        name: 'Apel',
        scientific_name: 'Malus domestica',
        overview:
          'Apel adalah jenis buah-buahan, atau buah yang dihasilkan dari pohon buah apel. Buah apel biasanya berwarna merah kulitnya jika masak dan (siap dimakan), namun bisa juga kulitnya berwarna hijau atau kuning. Kulit buahnya agak lembek, daging buahnya keras. Buah ini memiliki beberapa biji di dalamnya. Orang mulai pertama kali menanam apel di Asia Tengah. Kini apel berkembang di banyak daerah di dunia yang suhu udaranya lebih dingin. Nama ilmiah pohon apel dalam bahasa Latin ialah Malus domestica. Apel budidaya adalah keturunan dari Malus sieversii asal Asia Tengah, dengan sebagian genom dari Malus sylvestris (apel hutan/apel liar). Kebanyakan apel bagus dimakan mentah-mentah (tak dimasak), dan juga digunakan banyak jenis makanan pesta. Apel dimasak sampai lembek untuk dibuat saus apel. Apel juga dibuat untuk menjadi minuman sari buah apel.',
        fase_vegetatif: '50-100',
        fase_generatif: '150-170',
        category: 'Buah',
        __v: 0,
      },
    });
  };

  const toAnggurPage = () => {
    navigation.navigate('FruitDetail', {
      obj: {
        _id: '5ef849e4ac76c3346ce34ab4',
        name: 'Anggur',
        scientific_name: 'Persea americana',
        overview:
          'Anggur merupakan tanaman buah berupa perdu merambat yang termasuk ke dalam keluarga Vitaceae. Buah ini biasanya digunakan untuk membuat jus anggur, jelly, minuman anggur, minyak biji anggur dan kismis, atau dimakan langsung. Buah ini juga dikenal karena mengandung banyak senyawa polifenol dan resveratol yang berperan aktif dalam berbagai metabolisme tubuh, serta mampu mencegah terbentuknya sel kanker dan berbagai penyakit lainnya. Aktivitas ini juga terkait dengan adanya senyawa metabolit sekunder di dalam buah anggur yang berperan sebagai senyawa antioksidan yang mampu menangkal radikal bebas. Tanaman ini sudah dibudidayakan sejak tahun 4000 SM di Timur Tengah. Akan tetapi, proses pengolahan buah anggur menjadi minuman anggur baru ditemukan pada tahun 2500 SM oleh bangsa Mesir. Hanya beberapa waktu berselang, proses pengolahan ini segera tersebar luas ke berbagai penjuru dunia, mulai dari daerah di Laut Hitam, Spanyol, Jerman, Prancis, dan Austria. Penyebaran buah ini berkembang samakin pesat dengan adanya perjalanan Colombus yang membawa buah ini mengitari dunia.',
        fase_vegetatif: '50-100',
        fase_generatif: '80-90',
        category: 'Buah',
        __v: 0,
      },
    });
  };

  return (
    // React fragment sementara biar bisa liat kalau data nya banyak
    <View style={styles.container}>
      <TouchableOpacity onPress={() => toApplePage()}>
        <View style={styles.overlay}>
          <Text></Text>
        </View>
        <View style={styles.fruitCard}>
          <ImageBackground
            style={styles.fruitCardImage}
            source={require('../../assets/image/detail/Apel.jpg')}></ImageBackground>
        </View>
        <Text style={styles.fruitCardTitle}>Apel</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => toAnggurPage()}>
        <View style={styles.overlay}>
          <Text></Text>
        </View>
        <View style={styles.fruitCard}>
          <ImageBackground
            style={styles.fruitCardImage}
            source={require('../../assets/image/detail/Anggur.jpg')}>
            <Text style={styles.fruitCardTitle}>Anggur</Text>
          </ImageBackground>
        </View>
        <Text style={styles.fruitCardTitle}>Anggur</Text>
      </TouchableOpacity>
    </View>
  );
}

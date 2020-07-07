import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPlant } from '../store/actions/index';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import VegetablePageCard from '../component/VegetablePageCard';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function VegetablesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPlant());
  }, [dispatch]);

  const plantList = useSelector((state) => state.plantReducer.plantList);
  const error = useSelector((state) => state.plantReducer.error);
  const loading = useSelector((state) => state.plantReducer.loading);

  const vegetableList = plantList.filter((element) => {
    return element.category == 'Sayuran';
  });

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
                  Rekomendasi Sayuran Untuk di Tanam
                </Text>
                {vegetableList.map((vegetable, i) => {
                  return <VegetablePageCard key={i} vegetable={vegetable} />;
                })}
                <View style={{ marginTop: hp('5%') }}></View>
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
    fontSize: wp('4%'),
  },
});

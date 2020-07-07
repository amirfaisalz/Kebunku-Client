import React, { useRef, useState, useEffect } from 'react';
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
  AsyncStorage,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {
  postFavorite,
  deleteFavorite,
  postUserPlant,
} from '../store/actions/index';
import styles from '../style/fruitDetailStyle';
import detailImage from '../../assets/image/detail/detailImage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function FruitDetail({ route, navigation }) {
  const fruit = route.params.obj;
  const [favor, setFavor] = useState();
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const dispatch = useDispatch();

  const myFav = useSelector((state) => state.favReducer.favList);

  useEffect(() => {
    for(let i = 0; i < myFav.length; i++) {
      if(myFav[i].PlantId._id == fruit._id) {
        setFavor(true);
      }
    }
  }, [myFav]);
  // console.log(myFav);

  const checkIfFavorTop = function () {
    // TESTING IF PROPS APAAN GITU NTAR IJO / PUTIH
    if (favor)
      return (
        <TouchableOpacity
          style={styles.boxFav}
          onPress={() => toogleFav(fruit._id)}>
          <MaterialCommunityIcons name="bookmark" style={styles.saveBtnTrue} />
        </TouchableOpacity>
      );
    return (
      <TouchableOpacity
        style={styles.boxFav}
        onPress={() => toogleFav(fruit._id)}>
        <MaterialCommunityIcons
          name="bookmark-outline"
          style={styles.saveBtnTrue}
        />
      </TouchableOpacity>
    );
  };

  const plantThis = function (PlantId) {
    navigation.navigate('PlantThisPage', {
      PlantId,
    });
  };

  const toogleFav = async function (PlantId) {
    if (!favor) {
      setFavor(!favor);
      dispatch(postFavorite(PlantId));
    } else {
      setFavor(!favor);
      dispatch(deleteFavorite(PlantId));
    }
  };

  const checkIfFavorBot = function () {
    if (!favor) {
      return (
        <TouchableOpacity onPress={() => toogleFav(fruit._id)}>
          <View style={styles.actionFavFalse}>
            <MaterialCommunityIcons
              name="bookmark-outline"
              style={styles.saveBtnBottom}
            />
            <Text style={styles.actionText}>Favorit</Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={() => toogleFav(fruit._id)}>
          <View style={styles.actionFavFalse}>
            <MaterialCommunityIcons
              name="bookmark"
              style={styles.saveBtnBottom}
            />
            <Text style={styles.actionText}>Favorit</Text>
          </View>
        </TouchableOpacity>
      );
    }
  };

  let image;

  for (let i = 0; i < detailImage.length; i++) {
    if (detailImage[i].imgName === fruit.name) {
      image = detailImage[i].uri;
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.headerText}>{fruit.name}</Text>
        {checkIfFavorTop()}

        <Image style={styles.detailImg} source={image} />
        <Text style={styles.paragrafTitle}>Nama Buah</Text>
        <Text style={styles.paragrafText}>{fruit.name}</Text>

        <Text style={styles.paragrafTitle}>Nama Latin</Text>
        <Text style={styles.paragrafText}>{fruit.scientific_name}</Text>

        <Text style={styles.paragrafTitle}>Deskripsi</Text>
        <Text style={styles.paragrafText}>{fruit.overview}</Text>

        <Text style={styles.paragrafTitle}>Pertumbuhan</Text>
        <Text style={styles.paragrafText}>
          {fruit.fase_generatif} hari setelah tanam
        </Text>

        <Text style={styles.paragrafTitle}>Waktu Panen</Text>
        <Text style={styles.paragrafText}>
          {fruit.fase_vegetatif} hari setelah tanam
        </Text>

        {/* cara menanam */}
        {fruit.howto[0] ? (
          <>
            <Text style={styles.paragrafTitle}>{fruit.howto[0].title}</Text>
            {/* step */}
            {fruit.howto[0].steps.map((buah, i) => {
              return (
                <View key={i}>
                  <View style={styles.containerSteps}>
                    <View style={styles.kotakSteps}></View>
                    <Text style={styles.langkah}>Langkah {i + 1}</Text>
                  </View>
                  <Text style={styles.langkahText}>{buah}</Text>
                </View>
              );
            })}
          </>
        ) : null}

        <View style={styles.divider}></View>

        <Text style={styles.paragrafTitle}>Video Tutorial</Text>
        <View style={{ marginBottom: 30 }}></View>
        <View
          style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
          <YoutubePlayer
            ref={playerRef}
            height={300}
            width={wp('90%')}
            videoId={fruit.video}
            play={playing}
            onChangeState={(event) => console.log(event)}
            onReady={() => console.log('ready')}
            onError={(e) => console.log(e)}
            onPlaybackQualityChange={(q) => console.log(q)}
            volume={50}
            playbackRate={1}
            playerParams={{
              cc_lang_pref: 'us',
              showClosedCaptions: true,
            }}
          />
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.action}
            onPress={() => plantThis(fruit._id)}>
            <View>
              <Text style={styles.actionText}>Tanam</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 50 }}></View>
      </ScrollView>
    </View>
  );
}

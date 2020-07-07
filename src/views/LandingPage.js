import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  StatusBar,
} from 'react-native';
import styles from '../style/loginStyle';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import registerforPushNotifications from '../../registerforPushNotificationsAsync';
import server from '../store/config.js';

const Stack = createStackNavigator();

export default function LandingPage() {
  const navigation = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem('token').then((result) => {
      if (result) {
        navigation.navigate('Home');
      }
    });
  }, []);

  const [register, setRegister] = useState(false);
  const [textRegLog, setText] = useState('Belum punya akun? Daftar');
  const [ValidationText, setValid] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');

  const regLogHandle = function () {
    setRegister(!register);
    if (!register) setText('Sudah punya akun? Masuk');
    if (register) setText('Belum punya akun? Daftar');
  };

  const isRegisterName = function () {
    if (register) {
      return (
        <TextInput
          style={styles.inputBox}
          placeholder="Nama"
          placeholderTextColor="#828282"
          onChange={(e) => setName(e.nativeEvent.text)}
        />
      );
    }
  };

  const isRegister2ndPas = function () {
    if (register) {
      return (
        <TextInput
          style={styles.inputBox}
          placeholder="Ulangi Password"
          placeholderTextColor="#828282"
          secureTextEntry={true}
          onChange={(e) => setConPassword(e.nativeEvent.text)}
        />
      );
    }
  };

  const LoginGoogle = function () {
    if (!register) {
      return (
        <>
          <Text style={styles.textOr}> ──────── OR ────────</Text>
          {/* Button Handel nya nanti di Ganti Tambak API GOOGLE */}
          <TouchableOpacity style={styles.button} onPress={btnHandle}>
            <View style={styles.buttonGoogle}>
              <Text style={{ color: '#E5F8EF', fontSize: 16 }}>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </>
      );
    }
  };

  const btnHandle = function () {
    if (!register) {
      return server
        .post('/login', {
          email: email,
          password: password,
        })
        .then((result) => {
          if (result.data.token) {
            AsyncStorage.setItem('token', result.data.token);
            AsyncStorage.setItem('name', result.data.name);
            AsyncStorage.setItem('email', result.data.email);
            registerforPushNotifications(result.data.token);
            AsyncStorage.getItem('token').then((result) => {
            });
            setName('');
            setEmail('');
            setPassword('');
            setConPassword('');
            navigation.navigate('Home');
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      if ((name, email, password, conPassword)) {
        if (password === conPassword) {
          return server
            .post('/register', {
              name: name,
              email: email,
              password: password,
            })
            .then((result) => {
              setRegister(!register);
              setName('');
              setEmail('');
              setPassword('');
              setConPassword('');
            })
            .catch((err) => {
              console.log(err.message);
            });
        } else {
          setValid('Harap masukkan data dengan benar');
        }
      }
    }
  };

  const isRegisterMsg = function () {
    if (register) {
      return (
        <View>
          <Text style={styles.started}>Mari Berkebun!</Text>
          <Text style={styles.textMini}>Daftar akun dan mulai menanam.</Text>
        </View>
      );
    } else {
      return (
        <View>
          <Text style={styles.textSmall}>Selamat Datang di</Text>
          <Text style={styles.textBig}>KEBUNKU</Text>
        </View>
      );
    }
  };

  return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View>
          <Image
            style={styles.element}
            source={require('../../assets/image/element/daun_top.png')}
          />
        </View>

        {isRegisterMsg()}

        <Text>{ValidationText}</Text>

        {isRegisterName()}
        <TextInput
          style={styles.inputBox}
          placeholder="Email"
          placeholderTextColor="#707070"
          onChange={(e) => setEmail(e.nativeEvent.text)}
        />

        <TextInput
          style={styles.inputBox}
          placeholder="Password"
          placeholderTextColor="#707070"
          secureTextEntry={true}
          onChange={(e) => setPassword(e.nativeEvent.text)}
        />

        {isRegister2ndPas()}

        <TouchableOpacity style={styles.buttonBox} onPress={btnHandle}>
          <View>
            <Text style={{ color: 'white', fontSize: 16 }}>
              {register ? 'Daftar' : 'Masuk'}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={regLogHandle} style={{ marginTop: 8 }}>
          <Text style={{ color: '#323232' }}>{textRegLog}</Text>
        </TouchableOpacity>

        {LoginGoogle()}

        <View>
          <Image
            style={styles.elementBottom}
            source={require('../../assets/image/element/daun_bottom.png')}
          />
        </View>
      </View>
  );
}

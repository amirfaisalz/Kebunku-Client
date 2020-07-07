import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AsyncStorage } from 'react-native';
import {
  LandingPage,
  HomePage,
  FruitsPage,
  FruitDetail,
  VegetablesPage,
  ProfilePage,
  MyPlantDetail,
  PlantThisPage,
} from './src/views';
import { Provider } from 'react-redux';
import store from './src/store/index';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  const navigation = useNavigation();
  useEffect(() => {
    if (AsyncStorage.getItem('token')) {
      navigation.navigate('Home');
    }
  }, []);

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomePage}
        // untuk menghilangkan back button ==> headerLeft: null
        options={{
          title: 'Beranda',
          headerTitleAlign: 'center',
          headerLeft: null,
          headerStyle: {
            backgroundColor: '#00B761',
            height: hp('8%'),
          },
          headerTitleStyle: {
            color: 'white',
          },
        }}
      />
      <Stack.Screen
        name="FruitsPage"
        component={FruitsPage}
        options={{
          title: 'Buah',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#00B761',
            height: hp('8%'),
          },
          headerTitleStyle: {
            color: 'white',
          },
        }}
      />
      <Stack.Screen
        name="MyPlant"
        component={MyPlantDetail}
        options={{
          title: 'Kebunku',
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FruitDetail"
        component={FruitDetail}
        options={{
          title: 'Panduan Menanam',
          headerTitleAlign: 'center',
          tabBarVisible: false,
          headerStyle: {
            backgroundColor: '#00B761',
            height: hp('8%'),
          },
          headerTitleStyle: {
            color: 'white',
          },
        }}
      />
      <Stack.Screen
        name="PlantThisPage"
        component={PlantThisPage}
        options={{
          title: 'Tambah tanaman',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#00B761',
            height: hp('8%'),
          },
          headerTitleStyle: {
            color: 'white',
          },
        }}
      />
      <Stack.Screen
        name="VegetablesPage"
        component={VegetablesPage}
        options={{
          title: 'Sayuran',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#00B761',
            height: hp('8%'),
          },
          headerTitleStyle: {
            color: 'white',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const ProfileNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          headerLeft: null,
          title: 'Profile',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#00B761',
            height: hp('8%'),
          },
          headerTitleStyle: {
            color: 'white',
          },
        }}
      />
      <Stack.Screen
        name="MyPlant"
        component={MyPlantDetail}
        options={{
          title: 'Kebunku',
          headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#00B761',
            height: hp('8%'),
          },
          headerTitleStyle: {
            color: 'white',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const bottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#00B761',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  //buat disable warning
  console.disableYellowBox = true;

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Landing"
            component={LandingPage}
            options={{
              title: 'Landing',
              headerTitleAlign: 'center',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={bottomTabNavigator}
            options={{
              title: 'Landing',
              headerTitleAlign: 'center',
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

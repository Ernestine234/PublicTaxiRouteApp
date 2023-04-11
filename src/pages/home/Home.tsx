import {View, Text, ScrollView, PermissionsAndroid} from 'react-native';
import React from 'react';
import HomeAppBar from './components/HomeAppBar';
import CurrentLocationMapCard from './components/CurrentLocationMapCard';
import RoutesHistoryContainer from './components/RoutesHistoryContainer';
import Geolocation from '@react-native-community/geolocation';
import ElevatedButton from '../../components/buttons/ElevatedButton';

const requestLocation = () =>{

}

export type Position={
  lat: number,
  lng: number,
}

const Home = ({navigation}) => {

  const [position, setPosition] = React.useState<Position | null>(null);

  // initial position
  const [initialPos, setInitialPos] = React.useState<Position | null>(null);
 

  React.useEffect(()=>{
     // request location permission first so as to get user's current location
      Geolocation.requestAuthorization(
        ()=>{
          // console.log('location permission granted');
          Geolocation.watchPosition(
            pos => {
              // console.log(JSON.stringify(pos))
              // set position
              setPosition({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude,
              })
            },
            err => {
              console.log(err)
            },
            {enableHighAccuracy: true}
          );
          // get current location
          // Geolocation.getCurrentPosition(
          //   currentLoc =>{
          //     // console.log(JSON.stringify(currentLoc), 'ggggg')
          //     // set intial position
          //     setInitialPos({
          //       lat: currentLoc.coords.latitude,
          //       lng: currentLoc.coords.longitude
          //     })
             
            
          //   },
          //   err => {
          //     console.log(err.message)
          //   },
          //   {enableHighAccuracy: true}
          // );
        },
        err => {
          console.error(err)
        }
      )
    }
  );
   
  return (
    <ScrollView >
      <HomeAppBar navigation={navigation}/>
      {position ?
        <CurrentLocationMapCard
          lat={position.lat}
          lng={position.lng}
          latDelta={0.0922}
          lngDelta={0.0421}
        /> : 
        <View className='bg-slate-600 self-center rounded-md items-center justify-center shadow-md h-60 w-11/12'>
          <Text className='text-slate-50 text-2xl text-center'>Getting current location....</Text>
        </View>
      }
      {/* <RoutesHistoryContainer/> */}
      <View
        className='flex flex-row justify-between my-6 items-center px-4'
      >
        <Text
          className='text-xl font-bold'
        >Recent route</Text>
        
        <ElevatedButton
          onPress={()=>{}}
          title='View history'
          backgroundColor='bg-slate-300'
          textColor='text-slate-800'
          width='w-32'
          height='h-8'
          fontSize='text-sm'
        />
      </View>
      <RoutesHistoryContainer />
     </ScrollView>
  );
};

export default Home;

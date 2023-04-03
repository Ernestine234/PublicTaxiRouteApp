import {View, Text, ScrollView, PermissionsAndroid} from 'react-native';
import React from 'react';
import HomeAppBar from './components/HomeAppBar';
import CurrentLocationMapCard from './components/CurrentLocationMapCard';
import RidesHistoryContainer from './components/RidesHistoryContainer';
import Geolocation from '@react-native-community/geolocation';

const requestLocation = () =>{

}

type Position={
  lat:string,
  lng:string,
}

const Home = () => {

  const [position, setPosition] = React.useState<Position | null>(null);
 

  React.useEffect(()=>{
     // request location permission first so as to get user's current location
    Geolocation.requestAuthorization(
      ()=>{
        console.log('location permission granted');
        // get current location
        Geolocation.getCurrentPosition(
          pos => {
            // set position
            setPosition({
              lat: pos.coords.latitude.toString(),
              lng: pos.coords.longitude.toString(),
            })
          }
        );
      },
      err => {
        console.error(err)
      }
    )}
    );
   
  return (
    <ScrollView className=' flex flex-col justify-center'>
      <HomeAppBar />
      <CurrentLocationMapCard/>
      <RidesHistoryContainer/>
      {position && <Text>{position.lat}</Text>}
    </ScrollView>
  );
};

export default Home;

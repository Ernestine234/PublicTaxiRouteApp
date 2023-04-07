import {View, Text, ScrollView, PermissionsAndroid} from 'react-native';
import React from 'react';
import HomeAppBar from './components/HomeAppBar';
import CurrentLocationMapCard from './components/CurrentLocationMapCard';
import RoutesHistoryContainer from './components/RoutesHistoryContainer';
import Geolocation from '@react-native-community/geolocation';

const requestLocation = () =>{

}

type Position={
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
      {position == null ? <Text>Loading</Text> : <Text>Herr</Text>}
      {position && 
        <CurrentLocationMapCard
          lat={position.lat}
          lng={position.lng}
          latDelta={0.0922}
          lngDelta={0.0421}
      />
      }
      {/* <RoutesHistoryContainer/> */}
      {position && <Text>{position.lat}</Text>}
    </ScrollView>
  );
};

export default Home;

import {View, Text, ScrollView, PermissionsAndroid, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import HomeAppBar from './components/HomeAppBar';
import CurrentLocationMapCard from './components/CurrentLocationMapCard';
import RoutesHistoryContainer from './components/RoutesHistoryContainer';
import Geolocation, {getCurrentPosition, watchPosition} from 'react-native-geolocation-service';
import ElevatedButton from '../../components/buttons/ElevatedButton';
import { getLocationPermission } from '../../helpers/map/location.helpers';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GMAP_KEY } from '../../utils/strings/app.strings';

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
      getLocationPermission().then(res=>{
        if(res){
          Geolocation.watchPosition(
            pos => {
              setPosition({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
              })
            }
          )
        }
      })
    }
  );
   
  return (
    <View className='h-full bg-slate-900 flex flex-col'>
      <HomeAppBar navigation={navigation}/>
      {/* <View className='absolute bottom-8 z-10 w-11/12 self-center'>
        <GooglePlacesAutocomplete
          styles={{
            textInput: {
              color: 'black'
            }
          }}
          placeholder="Search destination"
          onPress={(data, details=null)=>{
              console.log(data,details)
          }}
          query={{
              key:{GMAP_KEY},
              language: 'en',
          }}
          // currentLocation={true}
      />
      </View> */}
      {position ?
        <CurrentLocationMapCard
          lat={position.lat}
          lng={position.lng}
          latDelta={0.0922}
          lngDelta={0.0421}
        /> 
        : 
        <View className='bg-slate-600 self-center rounded-md items-center justify-center shadow-md h-60 w-11/12'>
          <Text className='text-slate-50 text-2xl text-center'>Getting current location....</Text>
        </View>
      }
      {/* <RoutesHistoryContainer/> */}
      {/* <View
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
      <RoutesHistoryContainer /> */}
     </View>
  );
};

const styles = StyleSheet.create({
  searchContainer:{
    flex:1,
    padding:10,
    color: 'black',
  }
})

export default Home;

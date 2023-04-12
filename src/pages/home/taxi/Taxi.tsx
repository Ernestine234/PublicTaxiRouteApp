import React,{useState, useContext, useEffect} from "react";
import { ScrollView, Text, View } from "react-native";
import { Position } from "../Home";
import MapView, { Marker } from "react-native-maps";
import Geolocation,{ clearWatch, watchPosition } from "react-native-geolocation-service";
import { getLocationPermission } from "../../../helpers/map/location.helpers";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GMAP_KEY } from "../../../utils/strings/app.strings";

const Taxi = () =>{
    // location state
    const [pos,setPosition] = useState<Position|null>(null)
    // location watch id as to dismiss it on page unmount
    const [locWatchID, setLocWatchID] = useState<number | null>(null)

    // watch current user location
    function watchCurrentLocation(){
        // wrap it try catch block to catch any errors
        try {
            // watch location
            const watchID = Geolocation.watchPosition(
                loc => {
                    setPosition({
                        lat: loc.coords.latitude,
                        lng: loc.coords.longitude
                    })
                },
                err => {
                    // log the error
                    console.log(err)
                },
                {enableHighAccuracy:true}
            );
            // set our watch id
            setLocWatchID(watchID)
        } catch (error) {
            // log the error
            console.log(error)
        }
    }

    // clear all active watch
    function clearSubscriptions(){
        // clear watch id if not null
        locWatchID !== null && clearWatch(locWatchID)
        // reset it to null
        setLocWatchID(null)
        // reset position
        setPosition(null)
    }

    // get location on page mount
    React.useEffect(()=>{
        // watch location
        getLocationPermission().then(res=>{
            if(res){
                console.log(`location permission status ${res}`)
              Geolocation.watchPosition(
                pos => {
                    console.log(pos)
                  setPosition({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                  })
                }
              )
            }
          })
    });

    return(
            <View className="w-full bg-slate-900 h-full">
                {pos && <Text>Hello {pos.lat}</Text>}
                <Text>Hello</Text>
                {pos &&
                    <MapView
                        initialRegion={{
                            latitude: pos!.lat,
                            longitude: pos!.lng,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        }}
                        loadingEnabled={true}
                    >
                        <Marker
                            coordinate={{
                                latitude: pos.lat,
                                longitude: pos.lng
                            }}
                        />
                    </MapView>
                }
                <GooglePlacesAutocomplete
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
            </View>
    )
}

export default Taxi;
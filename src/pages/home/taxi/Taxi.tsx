import React,{useState, useContext, useEffect} from "react";
import { ScrollView, Text, View } from "react-native";
import { Position } from "../Home";
import Geolocation from '@react-native-community/geolocation'
import MapView, { Marker } from "react-native-maps";

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
        locWatchID !== null && Geolocation.clearWatch(locWatchID)
        // reset it to null
        setLocWatchID(null)
        // reset position
        setPosition(null)
    }

    // get location on page mount
    useEffect(()=>{
        // watch location
        Geolocation.watchPosition(
            loc => {
                console.log(JSON.stringify(loc))
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
        
        // return our clear subscription
        // return ()=>{
        //     clearSubscriptions()
        // }
    });

    return(
        
        <ScrollView>
            <View className="w-full h-full">
                {pos ?
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
                    :
                    <View>
                        <Text>Loading....</Text>
                    </View>
                }
            </View>
        </ScrollView>
    )
}

export default Taxi;
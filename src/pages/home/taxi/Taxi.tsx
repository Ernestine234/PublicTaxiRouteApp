import React,{useState, useContext, useEffect} from "react";
import { ScrollView, Text, View } from "react-native";
import { Position } from "../Home";
import Geolocation from '@react-native-community/geolocation'
import MapView from "react-native-maps";

const Taxi = () =>{
    // location state
    const [pos,setPosition] = useState<Position|null>(null)

    // get location on page mount
    useEffect(()=>{
        // use geolocation package to get location
        Geolocation.watchPosition(
            loc => {
                setPosition({
                    lat: loc.coords.latitude,
                    lng: loc.coords.longitude
                })
            }
        )
    });

    return(
        <ScrollView>
            <View className="w-full h-full">
                <MapView
                    initialRegion={{
                        latitude: pos!.lat,
                        longitude: pos!.lng,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                    loadingEnabled={true}
                >
                    
                </MapView>
            </View>
        </ScrollView>
    )
}

export default Taxi;
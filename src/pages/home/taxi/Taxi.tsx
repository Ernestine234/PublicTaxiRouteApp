import React,{useState, useContext, useEffect} from "react";
import { ScrollView, Text } from "react-native";
import { Position } from "../Home";
import Geolocation from '@react-native-community/geolocation'

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
            <Text>Hello</Text>
        </ScrollView>
    )
}

export default Taxi;
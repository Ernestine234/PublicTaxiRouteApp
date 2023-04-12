import { useState } from "react";
import { Text, View } from "react-native";
import MapView, {Animated, AnimatedRegion, Marker} from 'react-native-maps'
import MapViewDirections from "react-native-maps-directions";
import SelectDropdown from "react-native-select-dropdown";
import { GMAP_KEY } from "../../../utils/strings/app.strings";

// map region props
export type CurrentLocationMapRegionProp= {
    lat: number,
    lng: number,
    latDelta: number | 0.0922,
    lngDelta: number | 0.0421
}

// dropdown props to select from map
type DropdownButtonProps ={
    buttonLabel:string,
    data: Array<{
        place:string,
        lat:number,
        lng:number
    }>,
    onSelect:(item:{
        place:string,
        lat:number,
        lng:number
    })=>void;

}

// places
const places =[
    {
        lat: -24.66028,
        lng: 25.93091,
        name: 'University of Botswana'
    },
    {
        lat: -24.66781,
        lng: 25.97479,
        name: 'Tlokweng',
    },
    {
        lat: -24.62912,
        lng: 25.89733,
        name: 'BA ISAGO University'
    }
]

const initialLoc={
    lat: -24.65495,
    lng: 25.90514,
    name: 'The Fields Mall'
}

// a map component that displays the current location of the user
const CurrentLocationMapCard = (props?:CurrentLocationMapRegionProp) => {

    const [destination, setDestination] = useState<{lat:number, lng:number} | null>(null)
    
    //todo: implement map component
    return (
        <View className=" bg-slate-600 self-center overflow-hidden shadow-xl shadow-black h-full w-full">
            <MapView 
                initialRegion={{
                    latitude: initialLoc.lat,
                    longitude: initialLoc.lng,
                    latitudeDelta: props!.latDelta,
                    longitudeDelta: props!.lngDelta,
                }}
                loadingEnabled={true}
                className="flex-auto"
            >
                <Marker
                    coordinate={{
                        latitude: initialLoc.lat,
                        longitude: initialLoc.lng,
                    }}
                    title="cu"
                />
                {places.map(ma=>{
                    return <Marker
                        coordinate={{
                            latitude: ma.lat,
                            longitude: ma.lng
                        }}
                    />
                })}
                {destination &&

                <MapViewDirections
                    origin={{
                        latitude:initialLoc.lat,
                        longitude: initialLoc.lng
                    }}
                    destination={{
                        latitude: destination!.lat,
                        longitude: destination!.lng
                    }}
                    apikey={GMAP_KEY}
                />
                }
            </MapView>
            <View className="absolute top-0 z-10 bg-white w-full">
                <Text>Current position: {initialLoc.name}</Text>
                <SelectDropdown
                    data={places}
                    onSelect={(selectedItem,index)=>{
                        setDestination({
                            lat: selectedItem.lat,
                            lng: selectedItem.lng
                        })
                    }}
                    buttonTextAfterSelection={(selectedItem,index)=>{
                        return selectedItem.name
                    }}
                    rowTextForSelection={(item,index)=>{
                        return item.name
                    }}
                />
            </View>
        </View>
    )
};

export default CurrentLocationMapCard; 
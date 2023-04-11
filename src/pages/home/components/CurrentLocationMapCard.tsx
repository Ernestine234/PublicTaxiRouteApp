import { Text, View } from "react-native";
import MapView, {Animated, AnimatedRegion, Marker} from 'react-native-maps'

// map region props
export type CurrentLocationMapRegionProp= {
    lat: number,
    lng:<View className=" bg-slate-600 rounded-md shadow-md p-4 h-60 w-11/12">
            <Text>CurrentLocationMapCard</Text>
        </View>umber | 0.0421
}

// a map component that displays the current location of the user
const CurrentLocationMapCard = (props?:CurrentLocationMapRegionProp) => {
    
    //todo: implement map component
    return (
        <View className=" bg-slate-600 self-center rounded-xl overflow-hidden shadow-xl shadow-black h-60 w-11/12">
            <MapView 
                initialRegion={{
                    latitude: props!.lat,
                    longitude: props!.lng,
                    latitudeDelta: props!.latDelta,
                    longitudeDelta: props!.lngDelta,
                }}
                loadingEnabled={true}
                className="flex-auto"
            >
                <Marker
                    coordinate={{
                        latitude: props!.lat,
                        longitude: props!.lng
                    }}
                    title="cu"
                />
            </MapView>
        </View>
    )
};

export default CurrentLocationMapCard;
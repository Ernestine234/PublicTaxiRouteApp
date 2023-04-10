import { Text, View } from "react-native";
import MapView, {Animated, AnimatedRegion, Marker} from 'react-native-maps'

// map region props
type CurrentLocationMapRegionProp= {
    lat: number,
    lng: number,
    latDelta: number | 0.0922,
    lngDelta: number | 0.0421
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
                    title="My location"
                />
            </MapView>
        </View>
    )
};

export default CurrentLocationMapCard;
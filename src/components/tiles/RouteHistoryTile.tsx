import { Text, View } from "react-native";
import { Ride } from "../../utils/types/rides.types";




// a component that shows a single ride history of a user
const RouteHistoryTile = (props:Ride) => {
    return (
        <View className="bg-slate-300 h-fit w-11/12 my-2">
            <Text>Route: {props.routeId}</Text>
            <Text>Distance covered: {props.distance}</Text>
            <Text>Ride price {props.price}</Text>
        </View>
    )
};

export default RouteHistoryTile;
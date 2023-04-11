import { ScrollView, Text, View } from "react-native";
import { Rides } from "../../../utils/types/rides.types";
import RouteHistoryTile from "../../../components/tiles/RouteHistoryTile";

const RoutesHistoryContainer = () => {

    // dummy data of 20 rides with different dates, times, from, to, price, distance with increasing id
    const rides:Rides = [
        {
          rideId: 1,
          routeId: 1001,
          taxiId: 101,
          date: '2021-01-01',
          time: '08:00',
          from: 'Phakalane',
          to: 'Block 9',
          price: 30.0,
          distance: 20,
        } ,
        {
          rideId: 2,
          routeId: 1002,
          taxiId: 102,
          date: '2021-01-03',
          time: '14:30',
          from: 'Gaborone West',
          to: 'Tlokweng',
          price: 50.0,
          distance: 27,
        },
        {
          rideId: 3,
          routeId: 1003,
          taxiId: 103,
          date: '2021-01-04',
          time: '10:15',
          from: 'Broadhurst',
          to: 'Mogoditshane',
          price: 40.0,
          distance: 15,
        },
        {
          rideId: 4,
          routeId: 1004,
          taxiId: 104,
          date: '2021-01-07',
          time: '18:00',
          from: 'Phakalane',
          to: 'Game City',
          price: 25.0,
          distance: 12,
        },
        {
          rideId: 5,
          routeId: 1005,
          taxiId: 105,
          date: '2021-01-10',
          time: '11:45',
          from: 'Gaborone North',
          to: 'Gaborone Central',
          price: 15.0,
          distance: 7,
        },
        {
          rideId: 6,
          routeId: 1006,
          taxiId: 106,
          date: '2021-01-12',
          time: '09:30',
          from: 'Mogoditshane',
          to: 'Gaborone West',
          price: 35.0,
          distance: 18,
        },
        {
          rideId: 7,
          routeId: 1007,
          taxiId: 107,
          date: '2021-01-14',
          time: '13:15',
          from: 'Block 6',
          to: 'Broadhurst',
          price: 20.0,
          distance: 10,
        },
        {
          rideId: 8,
          routeId: 1008,
          taxiId: 108,
          date: '2021-01-16',
          time: '17:00',
          from: 'Tlokweng',
          to: 'Phakalane',
          price: 40.0,
          distance: 22,
        },
        {
          rideId: 9,
          routeId: 1009,
          taxiId: 109,
          date: '2021-01-18',
          time: '10:45',
          from: 'Gaborone Central',
          to: 'Block 10',
          price: 25.0,
          distance: 14,
        },
        {
          rideId: 10,
          routeId: 1010,
          taxiId: 110,
          date: '2021-01-20',
          time: '12:30',
          from: 'Game City',
          to: 'Main mall',
          price: 30,
          distance: 13,
         }
      ]

    return (
        <View className="w-full items-center flex-auto">
                <Text>User recent taken routes will show here</Text>
        </View>
    )
};

export default RoutesHistoryContainer;
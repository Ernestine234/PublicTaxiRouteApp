export declare interface Ride {
        rideId: number,
        routeId: number,
        taxiId: number,
        date: string,
        time: string,
        from: string,
        to: string,
        price: number,
        distance: number,
    }


// rides interface
export type Rides = Ride[]
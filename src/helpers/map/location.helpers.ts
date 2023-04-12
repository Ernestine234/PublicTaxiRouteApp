import {PermissionsAndroid, Permission} from 'react-native'

// get permission first
export async function getLocationPermission(){
    try {
        // permission status
        const status = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Geolocation Permission',
                message: 'Can app access your location?',
                buttonPositive: 'Yes'
            }
        );
        // return true if granted
        if(status === 'granted'){
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}
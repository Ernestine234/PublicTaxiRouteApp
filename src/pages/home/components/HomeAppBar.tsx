import React from "react"
import { Text, View } from "react-native"
import {Icon} from '@rneui/themed'
import IconButton from "../../../components/buttons/IconButton"
import { signOut } from "../../../helpers/firebase/auth.helpers"

const HomeAppBar = (props) => {
    return (
        <View className="h-fit p-2 flex flex-row justify-between">
            <Text>Hello Erne</Text>
            <View
                className=""
            >
                <IconButton
                   iconName="exit-outline"
                   iconType="ionicon"
                   circle={true}
                   onPress={async()=>{
                      await signOut()
                      props.navigation.navigate('Login')
                   }}
                />
            </View>
        </View>
    )
}

export default HomeAppBar;
import React from "react"
import { Text, View } from "react-native"
import {Icon} from '@rneui/themed'
import IconButton from "../../../components/buttons/IconButton"
import { signOut } from "../../../helpers/firebase/auth.helpers"
import { useUser } from "../../../helpers/controllers/user.controller"

const HomeAppBar = (props) => {

    // get user info from context
    const user = useUser();
    return (
        <View className="h-fit px-4 py-6 flex flex-row justify-between">
            <Text className="text-xl text-black font-bold">Hello {user?.email}</Text>
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
/* eslint-disable quotes */
import {View, Text, TextInput, Button, TouchableOpacity} from "react-native";
import React from "react";
import ElevatedButton from "../../../components/buttons/ElevatedButton";

const Login = ({navigation}) => {

  // empty email and password strings
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");


  var buttonProps = [
    {
      title: "Login with Email",
      textColor:"text-white",
      backgroundColor:"bg-green-500",
      onPress: () => {
        console.log("Login with Email");
        navigation.navigate("Home");
      },
    },
    {
      title: "Login with Google",
      onPress: () => {
        console.log("Login with Google");
      },
      textColor:"text-white",
      backgroundColor:"bg-red-500",
    },
    {
      title: "Login with Facebook",
      textColor:"text-white",
      backgroundColor:"bg-blue-500",
      onPress: () => {
        console.log("Login with Facebook");
      },
    },
  ]
  return (
    <View className=" bg-slate-300 flex flex-col flex-auto justify-center px-4">
      <Text>Login Page</Text>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        defaultValue={email}
        className=" border-2 rounded-md my-4 p-4 max-w-sm w-full"
      />
      <TextInput
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        defaultValue={email}
        className=" border-2 rounded-md my-4 p-4 max-w-sm w-full"
      />
      {buttonProps.map((button, index) => (
        <View className="my-2">
          <ElevatedButton
            key={index}
            title={button.title}
            onPress={button.onPress}
            textColor={button.textColor}
            backgroundColor={button.backgroundColor}
          />
        </View>
      ))}
    </View>
  );
};

export default Login;

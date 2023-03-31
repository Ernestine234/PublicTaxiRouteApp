/* eslint-disable quotes */
import {View, Text, TextInput, Button, TouchableOpacity} from "react-native";
import React from "react";
import {Dialog} from '@rneui/base';
import ElevatedButton from "../../../components/buttons/ElevatedButton";
import { useUser } from "../../../helpers/controllers/user.controller";
import { signInWithEmailAndPassword, signOut } from "../../../helpers/firebase/auth.helpers";
import { useLoginWithEmailAndPassword } from "../../../helpers/controllers/auth.hooks";

type DialogProps = {
  title: string;
  message: string;
};

const Login = ({navigation}) => {

  // get user from context
  const user = useUser();

  // empty email and password strings
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // show modal when logging in
  const [showDialog, setShowDialog] = React.useState(false);

  // dialog props
  const [dialogProps, setDialogProps] = React.useState<DialogProps | null>(null);

  // login with email and password
  const {login, loading, userData, error}  = useLoginWithEmailAndPassword(email,password);



  var buttonProps = [
    {
      title: "Login with Email",
      textColor:"text-white",
      backgroundColor:"bg-green-500",
      onPress: async() => {
       await login();
      },
    },
    {
      title: "Login with Google",
      onPress: () => {
        setShowDialog(true);
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
    <View className=" bg-slate-300 flex flex-col flex-auto  px-4">
      <Text className="text-3xl font-bold mt-20">
        Welcome!
      </Text>
      <Text className="mb-12">
        Login in right now to access our services
      </Text>
      {loading && <Text>Loading...</Text>}
      {error && <Text>{error.message}</Text>}
      {userData && <Text>{userData.email}</Text>}
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        defaultValue={email}
        inputMode="email"
        className=" border-2 rounded-md my-4 p-4 max-w-sm w-full"
      />
      <TextInput
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        defaultValue={password}
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
      <ElevatedButton
        title="log out"
        onPress={async() => {
          setDialogProps({
            title: "Logging out",
            message: "Please wait...",
          });
          setShowDialog(true);
          await signOut();
          console.log("log out");
          setShowDialog(false);
          navigation.navigate("WelcomeScreen");
        }}
        textColor="text-white"
        backgroundColor="bg-red-500"
      />
    </View>
  );
};

export default Login;

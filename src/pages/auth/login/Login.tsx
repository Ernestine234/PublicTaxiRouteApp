/* eslint-disable quotes */
import {View, Text, TextInput, Button, TouchableOpacity, Pressable} from "react-native";
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
  const {login, loading, userData, error, setError}  = useLoginWithEmailAndPassword(email,password);



  var buttonProps = [
    {
      title: "Login with Email",
      textColor:"text-white",
      backgroundColor:"bg-green-500",
      onPress: async() => {
       await login()
       if(userData){
        navigation.navigate('Home')
       }
      },
    },
    {
      title: "Login with Google",
      onPress: () => {
        navigation.navigate('Home')
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
      {error && 
        <Dialog
          onBackdropPress={()=>{
            // reset error to dismiss dialog
            setError(null)
          }}
        >
          <Dialog.Title>{error.name}</Dialog.Title>
        </Dialog>
        }
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
      <Pressable
        onPress={()=>{
          //todo: add navigate to forgot password page
        }}
      >
        <Text className=" self-end text-blue-600">Forgot password?</Text>
      </Pressable>
      
        <View className="my-2">
          <ElevatedButton
            
            title={buttonProps[0].title}
            onPress={buttonProps[0].onPress}
            textColor={buttonProps[0].textColor}
            backgroundColor={buttonProps[0].backgroundColor}
          />
        </View>
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
      <Text className="my-2 text-center box-border">
        Don't have an account?
        <Pressable
         onPress={()=>{
          // navigate to create account page
          navigation.navigate('SignUp')
         }}
        >
          <Text className="text-blue-500">Create one</Text>
        </Pressable>
      </Text>
    </View>
  );
};

export default Login;

/* eslint-disable quotes */
import {View, Text, TextInput, Pressable} from 'react-native';
import React from 'react';
import { useCreateUserWithEmailAndPassword } from '../../../helpers/controllers/auth.hooks';
import ElevatedButton from '../../../components/buttons/ElevatedButton';
import { signOut } from '../../../helpers/firebase/auth.helpers';
import { SIGNUP_MESSAGE } from '../../../utils/strings/app.strings';

const SignUp = ({navigation}) => {
  // email 
  const [email, setEmail]= React.useState('');
  //password
  const [password, setPassword] = React.useState('');
  // use signup hook
  const {
    register,
    loading,
    error,
    userData
  } = useCreateUserWithEmailAndPassword(email,password);


  return (
    <View className=" bg-slate-300 flex flex-col flex-auto  px-4">
      <Text className="text-3xl font-bold mt-20">
        Welcome!
      </Text>
      <Text className="mb-12 text-base">
        {SIGNUP_MESSAGE}
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
      
        <View className="my-2">
          <ElevatedButton
            
            title='Create an account'
            onPress = {async()=>{
              await register()
              if(userData){
                navigation.navigate('Home')
              }
            }}
            textColor='text-white'
            backgroundColor='bg-blue-500'
          />
        </View>
      <Text className="my-2 text-center">
        Already have an account?
        <Pressable
         onPress={()=>{
          // navigate to create account page
          navigation.navigate('Login')
         }}
        >
          <Text className="text-blue-500">Log in</Text>
        </Pressable>
      </Text>
    </View>
  );
};

export default SignUp;

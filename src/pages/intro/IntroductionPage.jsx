import {
  Button,
  Image,
  ImageBackground,
  // StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { signInAnonymously } from "../../helpers/firebase/auth.helpers";
import { WELCOME_MESSAGE } from "../../utils/strings/app.strings";
import ElevatedButton from "../../components/buttons/ElevatedButton";

const IntroductionPage = ({navigation}) => {
  return (
    <View className="bg-black">
      <ImageBackground
        resizeMode="cover"
        className="h-full flex flex-col justify-end"
        source={require("../../../assets/images/taxi-welcome.jpg")}>
        <View className="h-fit bg-slate-700 flex flex-col w-11/12 justify-self-center self-center mb-6 p-6 rounded-xl">
          <Text className=" text-white text-md mb-4 text-center font-bold text-xl">
            {WELCOME_MESSAGE}
          </Text>
          <View>
            {/* TODO use custom button */}
            <ElevatedButton
              title="Get started"
              onPress={async() => {
                // await signInAnonymously()
                navigation.navigate("Login");
              }}
              backgroundColor="bg-slate-500"
              textColor="text-white"
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

// styles for welcome screen
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     width: '100%',
//     height: '100%',
//   },
//   imageContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   introContainer: {
//     marginTop: 'auto',
//     backgroundColor: 'red',
//     alignSelf: 'center',
//     width: '100%',
//     marginBottom: '8%',
//     borderRadius: 16,
//     height: '30%',
//     padding: 14,
//     maxWidth: '80%',
//   },
//   introText: {
//     color: 'white',
//     fontSize: 20,
//     textAlign: 'center',
//   },
//   getStartedButton: {
//     marginTop: 'auto',
//     borderRadius: 16,
//     overflow: 'hidden',
//   },
// });

export default IntroductionPage;

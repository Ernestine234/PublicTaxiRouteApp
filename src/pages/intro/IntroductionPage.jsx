import {
  Button,
  Image,
  ImageBackground,
  // StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const IntroductionPage = ({navigation}) => {
  return (
    <View className="bg-black">
      <ImageBackground
        resizeMode="cover"
        className="h-full flex flex-col justify-end"
        source={require("../../../assets/images/taxi-welcome.jpg")}>
        <View className="h-32 bg-slate-700 flex flex-col w-4/5 justify-self-center self-center mb-6 p-6 rounded-xl">
          <Text className=" text-white text-md mb-4">
            Welcome to the taxi app. This is a sample app to demonstrate the
          </Text>
          <View>
            {/* TODO use custom button */}
            <Button
              title="Get started"
              onPress={() => {
                navigation.navigate("Login");
              }}
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

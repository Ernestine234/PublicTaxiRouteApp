import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const WelcomePage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/images/taxi-welcome.jpg')}>
        <Text>WELCOME</Text>
      </ImageBackground>
    </View>
  );
};

// styles for welcome screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    height: '100vh',
  },
});

export default WelcomePage;

import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import HomeAppBar from './components/HomeAppBar';
import CurrentLocationMapCard from './components/CurrentLocationMapCard';
import RidesHistoryContainer from './components/RidesHistoryContainer';

const Home = () => {
  return (
    <ScrollView>
      <HomeAppBar />
      <CurrentLocationMapCard/>
      <RidesHistoryContainer/>
    </ScrollView>
  );
};

export default Home;

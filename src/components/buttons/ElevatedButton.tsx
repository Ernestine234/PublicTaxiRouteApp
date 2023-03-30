import { Button, Pressable, Text } from 'react-native';
import React from 'react';

// declare props interface
export interface ButtonProps {
  title: string;
  onPress: () => void;
  textColor: string;
  backgroundColor: string;
}

const ElevatedButton = (props:ButtonProps,) => {
  return (
    <Pressable
      className={`${props.backgroundColor} flex flex-row 
      justify-center items-center rounded-md shadow-md h-12 max-w-sm w-full self-center`}
      onPress={props.onPress}
    >
      <Text className={`${props.textColor} text-base `}>
        {props.title}
      </Text>
    </Pressable>
  );
};

export default ElevatedButton;

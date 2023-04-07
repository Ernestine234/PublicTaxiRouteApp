import { Button, Pressable, Text } from 'react-native';
import React from 'react';

// declare props interface
export interface ButtonProps {
  title: string;
  onPress: () => void;
  textColor: string;
  backgroundColor: string;
  height?: string;
  width?: string;
  fontSize?: string;
}

const ElevatedButton = (props:ButtonProps,) => {
  return (
    <Pressable
      className={`${props.backgroundColor} flex flex-row 
      justify-center items-center rounded-md shadow-md 
      ${props.height ? props.height : 'h-12'} 
      ${props.width ? props.width : 'w-full'} max-w-sm self-center`}
      onPress={props.onPress}
    >
      <Text className={`${props.textColor} ${props.fontSize ? props.fontSize : 'text-base'} `}>
        {props.title}
      </Text>
    </Pressable>
  );
};

export default ElevatedButton;

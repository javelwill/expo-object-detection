import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';

type Props = {
  message: string;
};

const LoadingView = ({message}: Props) => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>{message}</Text>
      <ActivityIndicator />
    </View>
  );
};

export default LoadingView;

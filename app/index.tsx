import {Camera} from 'expo-camera';
import React from 'react';
import {Button, Text, View} from 'react-native';

const Page = () => {
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <View className="flex-1">
      <Camera className="flex-1"></Camera>
    </View>
  );
};

export default Page;

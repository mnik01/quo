import { VFC } from "react";
import { View, Text } from "react-native";
import { Fetcher } from '../components/Fetcher';

export const Auth: VFC = () => {

  return (
    <View className="flex-1 items-center justify-center bg-red-300">
      <Fetcher />
      <Text className="text-white text-3xl">Auth</Text>
    </View>
  );
}

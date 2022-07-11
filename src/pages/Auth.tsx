import { VFC } from "react";
import { View, Text } from "react-native";
import { Fetcher } from '../components/Fetcher';


export const Auth: VFC = () => {

  return (
    <View className="flex w-full items-center bg-red-300 p-24 h-full">
      <Fetcher />
      <Text className="text-white text-3xl">Auth</Text>
    </View>
  );
}

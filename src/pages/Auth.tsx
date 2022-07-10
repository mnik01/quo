import { VFC } from "react";
import { View, Text } from "react-native";
import { Fetcher } from '../components/Fetcher';


export const Auth: VFC = () => {

  return (
    <View style="flex w-full items-center bg-red-300 p-24 h-full">
      <Fetcher />
      <Text style="text-white text-blue-600 text-3xl">Auth</Text>
    </View>
  );
}

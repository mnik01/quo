import { VFC } from "react";
import { View, Text } from "react-native";
import { Fetcher } from '../components/Fetcher';
import { useTailwind } from 'tailwind-rn';


export const Auth: VFC = () => {
  const tw = useTailwind();

  return (
    <View style={tw("flex-1 items-center justify-center bg-red-300")}>
      <Fetcher />
      <Text style={tw("text-white text-blue-600 text-3xl")}>Auth</Text>
    </View>
  );
}

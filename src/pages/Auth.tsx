import { VFC } from "react";
import { View, Text } from "react-native";
import { Fetcher } from '../components/Fetcher';


export const Auth: VFC = () => {
  // const [isLoading, setIsLoading] = useState(false)

  return (
    <View className="flex w-full items-center bg-white-100 p-24 h-full">
      <Fetcher />
      {/* <Button onPress={() => {setIsLoading(true); sendSMS(number)}} type isLoading={false}>Выслать код</Button> */}
      <Text className="text-black-100 text-3xl">Auth</Text>
    </View>
  );
}

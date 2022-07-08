import { TailwindProvider } from 'tailwindcss-react-native';
import { StatusBar } from 'expo-status-bar';
import { VFC } from 'react';
import { View, Text } from './components/Natives';

const App: VFC = () => (
  <TailwindProvider>
    <View className="flex-1 items-center justify-center bg-red-300">
      <Text className="text-white text-3xl">Quo Vadis?</Text>
      <StatusBar style="auto" />
    </View>
  </TailwindProvider>
)

export default App;

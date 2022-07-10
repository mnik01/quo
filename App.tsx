import { QueryClient, QueryClientProvider, onlineManager } from 'react-query'
import { TailwindProvider } from 'tailwindcss-react-native';
import NetInfo from '@react-native-community/netinfo'
import { View, Text } from './components/Natives';
import { Fetcher } from './components/Fetcher';
import { StatusBar } from 'expo-status-bar';
import { VFC } from 'react';

onlineManager.setEventListener(setOnline =>
  NetInfo.addEventListener(state => {
    setOnline(state.isConnected)
  })
)

const queryClient = new QueryClient()

const App: VFC = () => (
  <QueryClientProvider client={queryClient}>
    <TailwindProvider>
      <View className="flex-1 items-center justify-center bg-red-300">
        <Text className="text-white text-3xl">Quo Vadis?</Text>
        <Fetcher />
        <StatusBar style="dark" />
      </View>
    </TailwindProvider>
  </QueryClientProvider>
)

export default App;

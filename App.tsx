import { QueryClient, QueryClientProvider, focusManager, onlineManager } from 'react-query'
import { TailwindProvider } from 'tailwindcss-react-native';
import NetInfo from '@react-native-community/netinfo'
import { View, Text } from './components/Natives';
import { Fetcher } from './components/Fetcher';
import { StatusBar } from 'expo-status-bar';
import { useEffect, VFC } from 'react';
import { AppState, AppStateStatus, Platform } from 'react-native';

// Refetch all data when App get internet connection
onlineManager.setEventListener(setOnline =>
  NetInfo.addEventListener(state => {
    setOnline(state.isConnected)
  })
)

// If i need to refetch all data when specific route (screen) get focus
// https://react-query-v3.tanstack.com/react-native#refresh-on-screen-focus

// Refetch all data when App get focused
function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active')
  }
}

const queryClient = new QueryClient()

const App: VFC = () => {
  // Refetch all data when App get focused
  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange)

    return () => subscription.remove()
  }, [])

  return (
  <QueryClientProvider client={queryClient}>
    <TailwindProvider>
      <View className="flex-1 items-center justify-center bg-red-300">
        <Text className="text-white text-3xl">Quo Vadis?</Text>
        <Fetcher />
        <StatusBar style="dark" />
      </View>
    </TailwindProvider>
  </QueryClientProvider>
)}

export default App;

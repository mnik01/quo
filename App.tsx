import { QueryClient, QueryClientProvider, focusManager, onlineManager } from 'react-query'
import NetInfo from '@react-native-community/netinfo'
import { useEffect, VFC } from 'react';
import { AppState, AppStateStatus, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyMusic } from './src/pages/MyMusic';
import { StatusBar } from 'expo-status-bar';
import { Profile } from './src/pages/Profile';
import { Settings } from './src/pages/Settings';
import { Auth } from './src/pages/Auth';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';

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
const Stack = createNativeStackNavigator();

const App: VFC = () => {
  // Refetch all data when App get focused
  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange)

    return () => subscription.remove()
  }, [])

  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <StatusBar style="dark" />
          <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="Авторизация" component={Auth} />
            <Stack.Screen name="Моя музыка" component={MyMusic} />
            <Stack.Screen name="Профиль" component={Profile} />
            <Stack.Screen name="Настройки" component={Settings} />
          </Stack.Navigator>
        </QueryClientProvider>
      </NavigationContainer>
    </TailwindProvider>
)}
export default App;

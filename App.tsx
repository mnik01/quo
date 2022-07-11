import { QueryClient, QueryClientProvider, focusManager, onlineManager } from 'react-query'
import NetInfo from '@react-native-community/netinfo'
import { useCallback, useEffect, useState, VFC } from 'react';
import { AppState, AppStateStatus, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyMusic } from './src/pages/MyMusic';
import { StatusBar } from 'expo-status-bar';
import { Profile } from './src/pages/Profile';
import { Settings } from './src/pages/Settings';
import { Auth } from './src/pages/Auth';
import { View, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';


// Refetch all data when App get internet connection
onlineManager.setEventListener(setOnline =>
  NetInfo.addEventListener(state => {
    setOnline(state.isConnected)
  })
)

// If i need to refetch all data when specific route (screen) get focus
// https://react-query-v3.tanstack.com/react-native#refresh-on-screen-focus

// Refetch all data when App get focused
const onAppStateChange = (status: AppStateStatus) => {
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
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    // https://docs.expo.dev/versions/v45.0.0/sdk/font/
    // If there be white screen for moment read link for fix. onLayoutRootView part
    const prepare = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          'Museo-Sans-Cyrl': require('./assets/fonts/MuseoSansCyrl-300.ttf'),
          'Museo-Sans-Cyrl-500': require('./assets/fonts/MuseoSansCyrl-500.ttf'),
          'Museo-Sans-Cyrl-700': require('./assets/fonts/MuseoSansCyrl-700.ttf'),
        });
        await SplashScreen.hideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);


  if (!appIsReady) {
    return <Text className="text-black-100 text-3xl">NOT LOADED</Text>    ;
  }

  return (
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
)}
export default App;

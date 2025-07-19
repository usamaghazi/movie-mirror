import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from '../components/Loader';
import StatusBarController from '../components/StatusBarController';
import { useCustomFonts } from '../constants/Fonts';
import store, { persistor } from '../store';



export default function RootLayout() {

  const [fontLoaded] = useCustomFonts()

  if(!fontLoaded) return null
  
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader/>} persistor={persistor}>
    <PaperProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(stack)" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBarController/>
    </PaperProvider>
    </PersistGate>
    </Provider>
  );
}
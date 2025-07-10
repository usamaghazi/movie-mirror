import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import StatusBarController from '../components/StatusBarController';
import { useCustomFonts } from '../constants/Fonts';
import store from '../store';



export default function RootLayout() {

  const [fontLoaded] = useCustomFonts()

  if(!fontLoaded) return null
  
  return (
    <Provider store={store}>
    <PaperProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBarController/>
    </PaperProvider>
    </Provider>
  );
}
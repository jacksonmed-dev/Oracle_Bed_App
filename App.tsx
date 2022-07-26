import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import { BleManager } from 'react-native-ble-plx';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const BTmanager = new BleManager();

  async function scan() {
    BTmanager.startDeviceScan(null, null, (error, device) => {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log(device);
    //   }

    //   if(device && device.name === 'BLE_Sensor') {
    //     BTmanager.stopDeviceScan();
    //   }
      console.log(device);
    });

    setTimeout(() => {
      BTmanager.stopDeviceScan();
    }, 5000);
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import AutoFunctions from '../views/autofunctions';
import { Button } from 'react-native-elements';


export default function TabThreeScreen() {
  return (
    <View>
      <Text>Hello World</Text>
      <Button 
        title="Scan"
        onPress={() => {
          console.log("Scanning");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

import {ScrollView} from 'react-native';
import { Text } from "@rneui/themed";
import {View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Patient from '../views/patient';
import Bed from '../views/bed';
import RiskSummary from '../views/risksummary';
import styles from '../styles/defaultstyles';

/**
 *  PatientScreen: Currently the main screen for the App.
 *  Currently shows the patient information, bed information, and risk summary.
 */
export default function PatientScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text h2>Bed Status</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Patient/>
        <View style={styles.mid}>
          <RiskSummary/>
          <Bed/>
        </View>
      </View>
    </ScrollView>
  );
}

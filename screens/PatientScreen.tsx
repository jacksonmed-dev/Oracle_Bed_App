import {ScrollView} from 'react-native';
import {View} from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Patient from '../views/patient';
import Bed from '../views/bed';
import RiskSummary from '../views/risksummary';

/**
 *  PatientScreen: Currently the main screen for the App.
 *  Currently shows the patient information, bed information, and risk summary.
 */
export default function PatientScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <ScrollView>
      <View style={{alignItems:'center'}}>
        <Patient/>
        <RiskSummary/>
        <Bed/>
      </View>
    </ScrollView>
  );
}

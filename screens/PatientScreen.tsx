import {ScrollView, Dimensions } from 'react-native';
import {View} from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Patient from '../views/patient';
import Bed from '../views/bed';
import RiskSummary from '../views/risksummary';
import AutoFunctions from '../views/autofunctions';

/**
 *  PatientScreen: Currently the main screen for the App.
 *  Currently shows the patient information, bed information, and risk summary.
 */
export default function PatientScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const w=Dimensions.get('window').width;
  return (
    <ScrollView>
      <View style={{alignItems:'center'}}>
        {/* <View style={w<1000?{width:'90%'}:{width:'40%'}}> */}
          <View style={w<1000?{width:'90%'}:{flexDirection:'row', width:'30%'}}>
            <Patient />
            <AutoFunctions/>
          </View>
          <View style={w<1000?{width:'90%'}:{flexDirection:'row'}}>
            <Bed/>
            <RiskSummary/>
          </View>
        </View>
      {/* </View> */}
    </ScrollView>
  );
}

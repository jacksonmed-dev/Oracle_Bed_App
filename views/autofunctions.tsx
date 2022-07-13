import {View } from '../components/Themed';
import { Card} from "@rneui/themed"; //React Native Elements
import {Button} from '@rneui/base';
/*
*   View for the automatic functions.
*   Standard - Inflates every other cell
*   Massage - Goes in a massage like pattern
*/
let standard = () => {
    alert('Standard');
}

let massage = () => {
    alert('Massage');
}

const AutoFunctions: React.FC = () => {
    return(
        <View style={{width:'90%'}}>
            <Card>
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <View>
                        <Button 
                            title = "Standard"
                            onPress = {standard}
                            buttonStyle={{
                                backgroundColor: '#27346F',
                                borderWidth: 2,
                                borderColor: 'white',
                                borderRadius: 30,
                              }}
                        />
                    </View>
                    <View>
                        <Button 
                            title = "Massage"
                            onPress = {massage}
                            buttonStyle={{
                                backgroundColor: '#27346F',
                                borderWidth: 2,
                                borderColor: 'white',
                                borderRadius: 30,
                              }}
                        />
                    </View>
                </View>
            </Card>          
        </View>
    );
}

export default AutoFunctions;
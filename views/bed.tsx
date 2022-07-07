import {View} from '../components/Themed';
import {Card} from '@rneui/themed';
import {Dimensions, Button, Alert, Image, StyleSheet, ColorValue} from 'react-native';
import { useState } from 'react';



/**
 *   Bed View: Shows the current status of 20 cells in the bed.
 *   The cells are colored based on the current status of the cell.
 *    - Green: No Issues
 *    - Yellow: Warning
 *    - Red: Danger
 *   Need to add functionality to control each cell.
 */
const Bed: React.FC = () => {

    //TESTING PURPOSES ONLY ------------------------------------------------------------
    //Will need to replace this with a better system to hold all 20 states of the bed
    const [isActive, setIsActive] = useState(false);

    const handlePress = () => {
        setIsActive(!isActive);
    }
    //---------------------------------------------------------------------------------
    
    return(
        <View>
            <Card containerStyle={{width: Dimensions.get('window').width/6}}>
            <Card.Title>Sensors</Card.Title>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                <View>
                    <Image source={require('../assets/images/body.png')} style={specialStyle.image}/>
                </View>
                <View>
                <Button
                    title="Cell 1"
                    color={isActive ? '#265828' : '#FFDA00'}
                    onPress={() => handlePress()}
                />
                <Button
                    title="Cell 2"
                    color="#265828"
                    onPress={() => {Alert.alert('Cell 2 Activated')}}
                />
                <Button
                    title="Cell 3"
                    color="#265828"
                    onPress={() => {Alert.alert('Cell 3 Activated')}}
                />
                <Button
                    title="Cell 4"
                    color="#FFDA00"
                    onPress={() => {Alert.alert('Cell 4 Activated')}}
                />
                <Button
                    title="Cell 5"
                    color="#800000"
                    onPress={() => {Alert.alert('Cell 5 Activated')}}
                />
                <Button
                    title="Cell 6"
                    color="#265828"
                    onPress={() => {Alert.alert('Cell 6 Activated')}}
                />
                <Button
                    title="Cell 7"
                    color="#265828"
                    onPress={() => {Alert.alert('Cell 7 Activated')}}
                />
                <Button
                    title="Cell 8"
                    color="#265828"
                    onPress={() => {Alert.alert('Cell 8 Activated')}}
                />
                <Button
                    title="Cell 9"
                    color="#265828"
                    onPress={() => {Alert.alert('Cell 9 Activated')}}
                />
                <Button
                    title="Cell 10"
                    color="#265828"
                    onPress={() => {Alert.alert('Cell 10 Activated')}}
                />
                </View>
            </View>
            </Card>
        </View>
    );
}

const specialStyle = StyleSheet.create({
    image: {
        height: 400,
        width: 200,
    },
    normal: {
        color: '#265828',
    },
});

export default Bed;

import {View} from '../components/Themed';
import {Card} from '@rneui/themed';
import {Button} from '@rneui/base';
import {Image, StyleSheet} from 'react-native';



/**
 *   Bed View: Shows the current status of 20 cells in the bed.
 *   The cells are colored based on the current status of the cell.
 *    - Green: No Issues
 *    - Yellow: Warning
 *    - Red: Danger
 *   Need to add functionality to control each cell.
 */
const Bed: React.FC = () => {

    return(
        <Card containerStyle={{alignItems:'center'}}>
            <View style={{flexDirection: 'row', flexWrap: 'nowrap'}}>
                <View style={{flexDirection: 'column', flexWrap: 'nowrap'}}>
                    <Button
                        buttonStyle={specialStyle.button}
                        containerStyle={specialStyle.buttonContainer}
                        onPress={() => alert('Button Pressed')}
                    />
                    <Button
                        buttonStyle={specialStyle.warning}
                        containerStyle={specialStyle.buttonContainer}
                        onPress={() => alert('Button Pressed')}
                    />
                    <Button
                        buttonStyle={specialStyle.button}
                        containerStyle={specialStyle.buttonContainer}
                        onPress={() => alert('Button Pressed')}
                    />
                    <Button
                        buttonStyle={specialStyle.warning}
                        containerStyle={specialStyle.buttonContainer}
                        onPress={() => alert('Button Pressed')}
                    />
                    <Button
                        buttonStyle={specialStyle.button}
                        containerStyle={specialStyle.buttonContainer}
                        onPress={() => alert('Button Pressed')}
                    />
                    <Button
                        buttonStyle={specialStyle.button}
                        containerStyle={specialStyle.buttonContainer}
                        onPress={() => alert('Button Pressed')}
                    />
                    <Button
                        buttonStyle={specialStyle.button}
                        containerStyle={specialStyle.buttonContainer}
                        onPress={() => alert('Button Pressed')}
                    />
                    <Button
                        buttonStyle={specialStyle.danger}
                        containerStyle={specialStyle.buttonContainer}
                        onPress={() => alert('Button Pressed')}
                    />
                    <Button
                        buttonStyle={specialStyle.warning}
                        containerStyle={specialStyle.buttonContainer}
                        onPress={() => alert('Button Pressed')}
                    />
                    <Button
                        buttonStyle={specialStyle.danger}
                        containerStyle={specialStyle.buttonContainer}
                        onPress={() => alert('Button Pressed')}
                    />
                    <Button
                        buttonStyle={specialStyle.button}
                        containerStyle={specialStyle.buttonContainer}
                        onPress={() => alert('Button Pressed')}
                    />
                    <Button
                        buttonStyle={specialStyle.button}
                        containerStyle={specialStyle.buttonContainer}
                        onPress={() => alert('Button Pressed')}
                    />
                    <Button
                        buttonStyle={specialStyle.button}
                        containerStyle={specialStyle.buttonContainer}
                        onPress={() => alert('Button Pressed')}
                    />
                    <Button
                        buttonStyle={specialStyle.button}
                        containerStyle={specialStyle.buttonContainer}
                        onPress={() => alert('Button Pressed')}
                    />
                    <Button
                        buttonStyle={specialStyle.button}
                        containerStyle={specialStyle.buttonContainer}
                        onPress={() => alert('Button Pressed')}
                    />
                    <Button
                        buttonStyle={specialStyle.button}
                        containerStyle={specialStyle.buttonContainer}
                        onPress={() => alert('Button Pressed')}
                    />
                    <Button
                        buttonStyle={specialStyle.button}
                        containerStyle={specialStyle.buttonContainer}
                        onPress={() => alert('Button Pressed')}
                    />
                    <Button
                        buttonStyle={specialStyle.button}
                        containerStyle={specialStyle.buttonContainer}
                        onPress={() => alert('Button Pressed')}
                    />
                    <Button
                        buttonStyle={specialStyle.button}
                        containerStyle={specialStyle.buttonContainer}
                        onPress={() => alert('Button Pressed')}
                    />
                    <Button
                        buttonStyle={specialStyle.button}
                        containerStyle={specialStyle.buttonContainer}
                        onPress={() => alert('Button Pressed')}
                    />
                </View>
                <View>
                    <Image source={require('../assets/images/body.png')} style={specialStyle.image}/>
                </View>
            </View>
        </Card>
    );
}

const specialStyle = StyleSheet.create({
    image: {
        height: 25*20,
        width: 250,
    },
    button: {
        backgroundColor: 'green'
    },
    buttonContainer: {
        height: 25,
        width: 50,
        marginVertical: 0,
        paddingVertical: 0,
    },
    warning:{
        backgroundColor: 'yellow'
    },
    danger:{
        backgroundColor: 'red'
    }
});

export default Bed;

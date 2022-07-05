import {View} from '../components/Themed';
import {Card} from '@rneui/themed';
import {Dimensions, Button} from 'react-native';



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
        <View>
            <Card containerStyle={{width: Dimensions.get('window').width/3}}>
            <Card.Title>Sensors</Card.Title>
            <Button
                title="Cell 1"
                color="#265828"
            />
            <Button
                title="Cell 2"
                color="#265828"
            />
            <Button
                title="Cell 3"
                color="#265828"
            />
            <Button
                title="Cell 4"
                color="#FFDA00"
            />
            <Button
                title="Cell 5"
                color="#800000"
            />
            <Button
                title="Cell 6"
                color="#265828"
            />
            <Button
                title="Cell 7"
                color="#265828"
            />
            <Button
                title="Cell 8"
                color="#265828"
            />
            <Button
                title="Cell 9"
                color="#265828"
            />
            <Button
                title="Cell 10"
                color="#265828"
            />
            </Card>
        </View>
    );
}

export default Bed;

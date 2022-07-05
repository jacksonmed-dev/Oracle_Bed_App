import {View } from '../components/Themed';
import {Dimensions} from 'react-native';
import { Card, Text } from "@rneui/themed";
import Patients from '../testdata/patients';
import { Avatar } from '@rneui/themed';

/*
*   View for the basic patient information.
*   - Name
*   - Age
*   - Sex
*   - Weight
*   - Avatar
*   - Currently pulls fake information (would like to randomly pull)
*/

const Patient: React.FC = () => {
    const data=Patients[0];
    console.log(data.avatar);
    return(
        <View>
                <Card containerStyle={{width: Dimensions.get('window').width/3}}>
                <Card.Title>Patient</Card.Title>
                <Card.Divider />
                <Text h4>{data.name}</Text>
                <Text>Age: {data.age}</Text>
                <Text>Sex: {data.sex}</Text>
                <Text>Weight: {data.weight} lbs</Text>
                <Avatar
                    containerStyle={{justifyContent: 'flex-end'}}
                    size={64}
                    rounded
                    source={data.avatar?{uri:data.avatar}:{}}
                />
            </Card>
        </View>
    );
}

export default Patient;
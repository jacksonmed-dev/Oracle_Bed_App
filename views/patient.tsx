import {View } from '../components/Themed';
import {StyleSheet, Dimensions} from 'react-native';
import { Card, Text } from "@rneui/themed";
import Patients from '../testdata/patients';
import { Avatar } from '@rneui/themed';
import styles from '../styles/defaultstyles';


// type data = {
//     title: string,
// }

const Patient: React.FC = () => {
    // console.log(Patients);
    const data=Patients[0];
    console.log(data.avatar);
    return(
        <View>
                <Card containerStyle={{width: Dimensions.get('window').width/3}}>
                <Card.Title>Patient</Card.Title>
                <Card.Divider />
                {/* <Text h3>{data}</Text> */}
                {/* <Text h5>{data[0].title===null?'Loading':data[0].title}</Text> */}
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

const styles2 = StyleSheet.create({
    container: {
        flex: 1,
        flexDirections: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    item: {
        width: '50%',
    },
}) 

export default Patient;
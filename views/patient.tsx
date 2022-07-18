import {View } from '../components/Themed';
import { Card, Text, Avatar } from "@rneui/themed"; //React Native Elements
import Patients from '../testdata/patients';

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
     //TESTING PURPOSES ONLY ------------------------------------------------------------
    const randomNum=Math.floor(Math.random() * 5);
    const data=Patients[randomNum];
    //----------------------------------------------------------------------------------
    
    console.log(data.avatar);//Currently a hack to get the avatar to show during initial load. Will need to fix later.
    return(
        <Card containerStyle={{width:'60%'}}>
            <View style={{flexDirection:'row'}}>
                <View style={{padding: 5}}>
                    <Avatar
                        containerStyle={{justifyContent: 'flex-end'}}
                        size={64}
                        rounded
                        source={data.avatar?{uri:data.avatar}:{}}
                    />
                </View>
                <View>
                    <Card.Title>{data.name}</Card.Title>
                    <Text>Age: {data.age}</Text>
                    <Text>Sex: {data.sex}</Text>
                    <Text>Weight: {data.weight} lbs</Text>
                </View>
            </View>
        </Card>
    );
}

export default Patient;
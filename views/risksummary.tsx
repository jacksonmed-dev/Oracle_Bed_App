import {View} from '../components/Themed';
import {Card} from '@rneui/themed';
import {Dimensions} from 'react-native';
import { ListItem } from 'react-native-elements';

//Fake data for testing
const data = [
  {
    perception: 3,
    moisture: 4,
    activity: 2,
    mobility: 4,
    nutrition: 1,
    friction: 0,
  }
]

const perception=(num:number)=>{
  switch(num){
    case 1:
      return 'Completely Limited (1)';
    case 2:
      return 'Very Limited (2)';
    case 3:
      return 'Slightly Limited (3)';
    case 4:
      return 'No Impairment (4)';
  }
}

const moisture=(num:number)=>{
  switch(num){
    case 1:
      return 'Constantly Moist (1)';
    case 2:
      return 'Very Moist (2)';
    case 3:
      return 'Occasionally Moist (3)';
    case 4:
      return 'Rarely Moist (4)';
  }
}

const activity=(num:number)=>{
  switch(num){
    case 1:
      return 'Bedfast (1)';
    case 2:
      return 'Chairfast (2)';
    case 3:
      return 'Occasionally Walks (3)';
    case 4:
      return 'Frequently Walks (4)';
  }
}

const mobility=(num:number)=>{
  switch(num){
    case 1:
      return 'Completely Immobile (1)';
    case 2:
      return 'Very Limited (2)';
    case 3:
      return 'Slightly Limited (3)';
    case 4:
      return 'No Limitations (4)';
  }
}

const nutrition=(num:number)=>{
  switch(num){
    case 1:
      return 'Very Poor (1)';
    case 2:
      return 'Probably Inadequate (2)';
    case 3:
      return 'Adequate (3)';
    case 4:
      return 'Excellent (4)';
  }
}

const friction=(num:number)=>{
  switch(num){
    case 1:
      return 'Problem (1)';
    case 2:
      return 'Potential Problem (2)';
    case 3:
      return 'No Apparent Problem (3)';
    case 4:
      return 'Error';
  }
}

/*
*   Risk Summary: Shows the Braden Scale for Predicting Pressure Sore Risk
*   Currently just shows the number for each category.
*   Need to add functionality to show the actual description. 
*/

const RiskSummary: React.FC<{}> = () => {
  return (
    <View>
      <Card containerStyle={{width: Dimensions.get('window').width/3}}>
        <Card.Title>Risk Summary</Card.Title>
        <Card.Divider />
        {
          data.map((item, index) => (
            <ListItem key={index} hasTVPreferredFocus={undefined} tvParallaxProperties={undefined} >
              <ListItem.Content>
                <ListItem.Title>Sensor Perception: {perception(item.perception)}</ListItem.Title>
                <ListItem.Title>Moisture: {moisture(item.moisture)}</ListItem.Title>
                <ListItem.Title>Activity: {activity(item.activity)}</ListItem.Title>
                <ListItem.Title>Mobility: {mobility(item.mobility)}</ListItem.Title>
                <ListItem.Title>Nutrition: {nutrition(item.nutrition)}</ListItem.Title>
                <ListItem.Title>Sensor Friction: {friction(item.friction)}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))
        }
      </Card>
    </View>
  );
}

export default RiskSummary;
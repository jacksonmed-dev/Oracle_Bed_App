import {View} from '../components/Themed';
import styles from '../styles/defaultstyles';
import {Card, Text} from '@rneui/themed';
import {Dimensions} from 'react-native';
import { ListItem } from 'react-native-elements';

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

const RiskSummary: React.FC<{}> = () => {
  return (
    <View>
      <Card containerStyle={{width: Dimensions.get('window').width/3}}>
        <Card.Title>Risk Summary</Card.Title>
        <Card.Divider />
        {
          data.map((item, index) => (
            <ListItem key={index} >
              <ListItem.Content>
                <ListItem.Title>Sensor Perception: {item.perception}</ListItem.Title>
                <ListItem.Title>Moisture: {item.moisture}</ListItem.Title>
                <ListItem.Title>Activity: {item.activity}</ListItem.Title>
                <ListItem.Title>Mobility: {item.mobility}</ListItem.Title>
                <ListItem.Title>Nutrition: {item.nutrition}</ListItem.Title>
                <ListItem.Title>Sensor Friction: {item.friction}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))
        }
      </Card>
    </View>
  );
}

export default RiskSummary;
import {View} from '../components/Themed';
import {useState} from 'react';
import {Card, ListItem, Text} from '@rneui/themed'; //React Native Elements
import { StyleSheet } from 'react-native';

/*
*  View for the risk summary
*  Based on Braden Scale for Predicting Pressure Sore Risk
*  https://www.ahrq.gov/patient-safety/settings/hospital/resource/pressureulcer/tool/pu7b.html#:~:text=The%20scale%20consists%20of%20six,less%20indicates%20at%2Drisk%20status
*/

//Fake data for testing
const data = [
  {
    perception: 3,
    moisture: 4,
    activity: 2,
    mobility: 4,
    nutrition: 1,
    friction: 1,
  }
]

//Functions to convert the numerical data from the server into text
//Todo: Move these to a separate file
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
*/



const RiskSummary: React.FC<{}> = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={{width:'90%'}}>
      <Card>
        <ListItem.Accordion
          containerStyle={{margin:0, padding:0}}
          content={
            <View>              
              <Card.Title>Risk Summary</Card.Title>
              <Text>Click to Expand</Text>
            </View>
          }
          noIcon={true}
          isExpanded={expanded}
          onPress={() => {
            setExpanded(!expanded);
          }}
          >
          {
            data.map((item, index) => (
              <ListItem key={index} hasTVPreferredFocus={undefined} tvParallaxProperties={undefined} >
                <ListItem.Content style={{margin:-10}}>
                  <ListItem><View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', flex: 1}}><Text>Sensor Perception: </Text></View><Text>{perception(item.perception)}</Text></ListItem>
                  <ListItem><View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', flex: 1}}><Text>Moisture: </Text></View><Text>{moisture(item.moisture)}</Text></ListItem>
                  <ListItem><View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', flex: 1}}><Text>Activity: </Text></View><Text>{activity(item.activity)}</Text></ListItem>
                  <ListItem><View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', flex: 1}}><Text>Mobility: </Text></View><Text>{mobility(item.mobility)}</Text></ListItem>
                  <ListItem><View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', flex: 1}}><Text>Nutrition: </Text></View><Text>{nutrition(item.nutrition)}</Text></ListItem>
                  <ListItem><View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', flex: 1}}><Text>Sensor Friction: </Text></View><Text>{friction(item.friction)}</Text></ListItem>
                </ListItem.Content>
              </ListItem>
            ))
          }
        </ListItem.Accordion>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' // if you want to fill rows left to right
  },
  item: {
    width: '50%' // is 50% of container width
  }
})

export default RiskSummary;
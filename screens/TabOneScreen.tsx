import { Alert, Image, Button, StyleSheet, Switch, ScrollView, Dimensions } from 'react-native';
import {useState, useEffect} from 'react';
import { Card, Text } from "@rneui/themed";
import {View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Patient from '../views/patient';
import Bed from '../views/bed';
import RiskSummary from '../views/risksummary';
import styles from '../styles/defaultstyles';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [data, setData] = useState(['Loading...']);
  const [switchOne, setSwitchOne] = useState(false);
  const [switchTwo, setSwitchTwo] = useState(false);
  const [switchThree, setSwitchThree] = useState(false);
  
  const toggleSwitch = (toggle: number) =>{
    if(toggle === 1)setSwitchOne(previousState => !previousState);
    else if(toggle === 2){
      setSwitchTwo(previousState => !previousState);
      //pick random message from data
      const random = Math.floor(Math.random() * data.length);
      setMessage(data[random]);
    }
    else if(toggle === 3)setSwitchThree(previousState => !previousState);
  }

  useEffect(() => {
    console.log("test");
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
  }, []);

  const [message, setMessage] = useState('');
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <Text style={styles.title}>Bed Status</Text> */}
        <Text h2>Bed Status</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        {/* <Image source={require('../assets/images/sensor.png')} style={styles.image} /> */}
        {/* <View style={styles.toggles}>
          <Switch
            trackColor={{ false: "#767577", true: "#5DADEC" }}
            thumbColor={switchOne ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => toggleSwitch(1)}
            value={switchOne}
          />
          <View style={styles.separator}/>
          <Button
            onPress={()=>alert('Place holder retrieve data from server')}
            title="Get Bed Status"
            color="#5DADEC"
            accessibilityLabel="Get Bed Status"
          />
          <View style={styles.separator}/>
        </View> */}
        <Patient/>
        <View style={styles.mid}>
          <RiskSummary/>
          <Bed/>
        </View>
        {/* <View style={styles.mid}>
          <Card containerStyle={{width: Dimensions.get('window').width/3}}>
            <Card.Title>Massage</Card.Title>
            <Card.Divider />
            <Text h5>{message.title===null?'Loading':message.title}</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={switchTwo ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => toggleSwitch(2)}
              value={switchTwo}
            />
          </Card>
          <Card containerStyle={{width: Dimensions.get('window').width/3}}>
            <Card.Title>Bed Response</Card.Title>
            <Card.Divider />
            <Text h5>{data[0].title===null?'Loading':data[0].title}</Text>
          </Card>
        </View>
        <Text style={styles.title}>In-Depth View</Text>
        <Image source={require('../assets/images/body_3d.png')} style={styles.image} />
        <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={switchThree ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => toggleSwitch(3)}
              value={switchThree}
            /> */}
      </View>
    </ScrollView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     borderWidth: 1,
//     // justifyContent: 'space-between',
//     margin: 10,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 3,
//     height: 0.5,
//     width: '80%',
//   },
//   lgseparator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
//   toggles:{
//     alignSelf: 'flex-end',
//     padding: 10,
//   },
//   image: {
//     width: Dimensions.get('window').width/3,
//     height: undefined,
//     aspectRatio: 1.5,
//     resizeMode: 'contain',
//   },
//   mid:{
//     flexDirection: 'row',
//     alignSelf: 'center',
//   },
//   item:{
//     // width: '50%',
//     borderColor: '#000',
//     borderWidth: 1,
//     margin: 10,
//     padding: 10,

//   },
//   i:{
//     width: '40%',
//   }
// });

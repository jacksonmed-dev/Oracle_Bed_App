import { FlatList, StyleSheet } from 'react-native';
import { Card, Text } from "@rneui/themed";
import { useState, useEffect } from 'react';

import EditScreenInfo from '../components/EditScreenInfo';
import {View } from '../components/Themed';

export default function TabTwoScreen() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(json => setData(json.fact))
      .catch(error => console.error(error))
  }, []);

  return (
    <View style={styles.container}>
      <Text h1>All Registered Beds</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Card>
        <Card.Title>Cat Facts</Card.Title>
        <Card.Divider />
        <Text h3>{data}</Text>
      </Card>
    </View>
  );
}

async function getCatFact() {
  const response = await fetch('https://catfact.ninja/fact');
  const data = await response.json();
  return data.fact;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

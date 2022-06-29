import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      borderWidth: 1,
      // justifyContent: 'space-between',
      margin: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 3,
      height: 0.5,
      width: '80%',
    },
    lgseparator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    toggles:{
      alignSelf: 'flex-end',
      padding: 10,
    },
    image: {
      width: Dimensions.get('window').width/3,
      height: undefined,
      aspectRatio: 1.5,
      resizeMode: 'contain',
    },
    mid:{
      flexDirection: 'row',
      alignSelf: 'center',
    },
    item:{
      // width: '50%',
      borderColor: '#000',
      borderWidth: 1,
      margin: 10,
      padding: 10,
  
    },
    i:{
      width: '40%',
    }
  });

  export default styles;
import {StyleSheet, Dimensions} from 'react-native';

/*
*   This is the default stylesheet for the application.
*   
*/

const styles = StyleSheet.create({
    // This is the style for the separator between components.
    separator: {
      marginVertical: 3,    // This is the space between the components.
      height: 1,            // This is the height of the line
      width: '80%',         // This is the width of the line
      alignSelf: 'center',  // This is the alignment of the line.
    },
    container: {
      flex: 1,
      alignItems: 'center',
      borderWidth: 1,
      margin: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
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
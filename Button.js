import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, image, SafeAreaView, SafeAreaProvider } from 'react-native';
import React, { useState } from 'react';


export default function App() {
  const [pressed, setPressed] = useState(false);

  const toggleButtonStyle = () => {
    setPressed(prev => !prev);
  };

  const DisplayImage = () => {
    return (
     
          <image 
          style={styles.containerImage}
          source={'./assets/Logo.png'}
          />

    );
  };

  return (
    <View style={styles.container}>
      <View 
      style={pressed ? styles.button1 : styles.button2}
      />
      <Button
        title="Aperta aqui"
        onPress={toggleButtonStyle}
        />   
    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#b13030',
    alingItems: 'center',
    justifyContent: 'center',
  },
  button1: {
    width: 100,
    height: 100,
    backgroundColor: '#d62d2d',
    marginBottom: 20,
  },
   button2: {
    width: 100,
    height: 100,
    backgroundColor: '#144794',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  containerImage: {

    height: 100,
    width: 100,
  },
});

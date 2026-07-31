import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text style={styles.textLogo}>APP Legal</Text>
        
      </View>

              <View style={styles.usuario}>
                  <image
                  style={styles.tinyLogo}
                  source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                  }}
                />
              </View>

      <View style={styles.box2}></View>

       <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#569c27',
  },
  box: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e62a7',
    padding: 20,
    gap: 20
  },
  box2: {
    flex: 1,
    backgroundColor: '#569c27'
  },
  tinyLogo: {
    width: 60,
    height: 60,
  },
  textLogo: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  usuario: {
    height: 200,
    width: 400,
    backgroundColor: '#fff',
    borderRadius: 10,

    gap: 200,
  } 
});
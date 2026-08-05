import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Link } from 'expo-router'

export default function HomeScreen() {

  



  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text style={styles.textLogo}>Home</Text>
        <Link style={styles.icon} href="/contact">
          <MaterialCommunityIcons  name="contacts-outline" size={40} color="white" />
</Link>
      </View>
      <View style={styles.box2}>
        <View style={styles.user}>
          <Image
            style={styles.userAvatar}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />

          <View style={styles.userInfo}>
            <Text style={styles.userName}>Sample name</Text>
            <Text style={styles.userEmail}>Sample@email.com</Text>
          </View>
        </View>
      </View>
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
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#bb1ca0',
    padding: 20,
    gap: 20
  },
  box2: {
    flex: 1,
    backgroundColor: '#569c27',
    justifyContent: 'flex-start',
    width: 400,
  },
  tinyLogo: {
    width: 60,
    height: 60,
    allignSelf: 'center'
  },
  textLogo: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#f5e4e4',
    borderRadius: 10,
    margin: 20,
    padding: 20,
  },

  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userInfo: {
    marginLeft: 20,
  },
  userName:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  userEmail:{
    fontSize: 14, 
    color: '#666',
  },
  icon: {
    marginLeft: 'auto',  
  }
});
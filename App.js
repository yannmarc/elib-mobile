import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [name, setName] = useState('shaun')
  
  const clickHandler = () => {
    setName('yann')
  }
  return (

    // Taking this as the body of the main application
    <NavigationContainer>
      <View style={[styles.container, styles.logoColor]}>
      <View style={styles.logoContainer}>
        <View style={{
          padding: 20,
          borderWidth: 2,
          borderColor: '#fff',
          width: 200,
          height: 200,
          borderRadius: 15

        }}>
          <Image 
            style={{
              resizeMode: 'cover',
              width: '100%',
              height: '100%'
            }}
            source={require('./assets/imgs/logo-01.png')}
          />
        </View>
        <Button 
          title='update me'
          onPress={clickHandler}
        />
      </View>
      <StatusBar
        barStyle="light-content"
        style="light"
        translucent={true}
      />

    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoColor: {
      backgroundColor: 'blue'
  },
  logoContainer: {
    width: '100%',
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold'
  },
  moveTop: {
    marginTop: '500px',
    padding: 20
  }

});

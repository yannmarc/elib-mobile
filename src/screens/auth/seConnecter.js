import { StyleSheet, View, Text, Image, Pressable, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SlidingUpPanel from 'rn-sliding-up-panel';

const seConnecter = () => {
  return (
    <SafeAreaView>
      <View style={styles.signInContainer}>
        {/* Here is the sign in page  */}
        <ImageBackground style={styles.image} source={require('../../../assets/imgs/se-connecter.jpg')} />
        <TouchableOpacity 
          style={styles.btnSeconnecter} 
          onPress={() => {this._panel.show()}}
        >
          <Text>Se connecter</Text>
        </TouchableOpacity>
        <SlidingUpPanel ref={c => this._panel = c} height={10}>
          <View style={{
            backgroundColor: '#003399',
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            paddingVertical: 100,
            width: '100%'
            }}>
            {/* Creating a container for the different signIn buttons */}
            <View style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%'
              }}>
              <Pressable style={[styles.seperate, styles.pressableBtn]}>
                <Text style={{color: '#6783b8'}}>Continuer avec Google</Text>
              </Pressable>
              <Pressable>
                <Text style={{color: '#6783b8'}}>Continuer avec Facebook</Text>
              </Pressable>
              <Pressable>
                <Text style={{color: '#ffffff'}}>Continuer avec un e-mail</Text>
              </Pressable>
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    signInContainer: {
        width: '100%',
        heigth: '100%',
        flex: 1,
        position: 'relative'

    },
    image: {
        with: '100%',
        heigth: '100%',
        resizeMode: 'cover'
    },
    btnSeconnecter: {
        padding: 15,
        borderRadius: 15,
        backgroundColor: '#ccd6e7',
        marginTop: 30,
        position: 'absolute',
        top: 200
    },
    seperate: {
      marginTop: 40
    },
    pressableBtn: {
      paddingVertical: 30,
      paddingHorizontal: 20,
      textAlign: 'center'
    }
})

export default seConnecter
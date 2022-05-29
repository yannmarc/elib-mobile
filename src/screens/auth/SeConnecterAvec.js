import { View, Text, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';

const SeConnecterAvec = () => {
  return (
    <SafeAreaView>
        <View style={styles.signInContainer}>
            {/* Here is the sign in page  */}
            <ImageBackground style={styles.image} source={require('../../../assets/imgs/se-connecter.jpg')}>
                
            {/* Creating the component view for the Seconnecter avc */}
            <View>
                
            </View>
                
            </ImageBackground>   
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
    }
})

export default seConnecter
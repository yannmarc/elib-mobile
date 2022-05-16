import { View, Text, Image, Button, ImageBackground } from 'react-native'
import React from 'react'

const seConnecter = () => {
  return (
    <View style={styles.signInContainer}>
      {/* Here is the sign in page  */}
        <ImageBackground style={styles.image} source={require('../../../assets/imgs/se-connecter.jpg')}>
            
        </ImageBackground> 
        <Button 
        title='se connecter'
        color='#6783b8'
        style={styles.btnSeconnecter}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    signInContainer: {
        width: '100%',
        heigth: '100%',
        flex: 1
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
        marginTop: 30
    }
})

export default seConnecter
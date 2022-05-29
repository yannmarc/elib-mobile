import React from 'react';
import { StyleSheet, View, Text, Image, Pressable, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SlidingUpPanel from 'rn-sliding-up-panel';


const {height} = Dimensions.get('window')

const authAccounts = {
  accountName1: 'Google',
  accountName2: 'Facebook',
  accountName3: 'Email'
}

class BottomSheet extends React.Component {
  state = {
    visible: false
  }

  
  
  
  render  () {

    const imagePath = require('../../../assets/imgs/se-connecter-02.png');

    return (
      <SafeAreaView style={{flex: 1}}>
          <ImageBackground source={imagePath} resizeMode='cover' resizeMethod='resize' style={[styles.image, {padding: 0, margin: 0}]}>
            <View style={[styles.signInContainer, {marginTop: 0}]}>
              {/* Here is the sign in page  */}
              <View style={[styles.bodyPadding]}>
                <View style={styles.viewImage}><Image source={imagePath} resizeMode='contain' style={styles.image}/></View>
                <TouchableOpacity style={styles.btnSeconnecter} onPress={() => this._panel.show()}>
                  <Text style={styles.text}>Se connecter</Text>
                </TouchableOpacity>
                <SlidingUpPanel ref={c => (this._panel = c)} draggableRange={{top: height /.75, bottom: 100}} animatedValue={this._draggedValue}>
                  {/* panel view */}
                    <View style={{backgroundColor: '#003399', color: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 30, height: '50%', position: 'absolute', top: 1000, width: '100%'}}>
                      <View style={{flex: 1, justifyContent: 'center', alignContent:'center'}}>
                        <Pressable style={{padding: 20, borderRadius: 30, backgroundColor: '#ffffff', marginBottom: 20}}>
                          {
                            
                          }
                          <Text style={{color: '#3459a0', textAlign: 'center'}}>Connecter avec {authAccounts.accountName1}</Text></Pressable>
                         <Pressable style={{padding: 20, borderRadius: 30, backgroundColor: '#99accf', marginBottom: 20}}><Text style={{textAlign: 'center'}}>Connecter avec {authAccounts.accountName2}</Text></Pressable>
                        <Pressable style={{padding: 20, borderRadius: 30, backgroundColor: '#585858'}}><Text style={{color: '#ffffff', textAlign: 'center'}}>Connecter avec {authAccounts.accountName3}</Text></Pressable>
                      </View>
                    </View>
                </SlidingUpPanel>
              </View>
            </View>
          </ImageBackground>
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
    signInContainer: {
        flex: 1,
        position: 'relative'
    },
    image: {
      flex: 1,
      justifyContent: 'center'
    },
    center: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center'
    },
    bodyPadding: {
      paddingLeft: 20,
      paddingRight: 20
    },
    btnSeconnecter: {
        padding: 15,
        borderRadius: 30,
        backgroundColor: '#ccd6e7',
        position: 'absolute',
        top: 550,
        left: '5%',
        width: '100%'
    },
    seperate: {
      marginTop: 40
    },
    pressableBtn: {
      paddingVertical: 30,
      paddingHorizontal: 20,
      textAlign: 'center'
    },
    text: {
      textAlign: 'center',
      fontSize: 20,
      color: '#3459a0'
    },
    viewImage: {
      width: '100%',
      height: 0,
      display: 'flex',
      alignContent: 'center'
    }
})

export default BottomSheet
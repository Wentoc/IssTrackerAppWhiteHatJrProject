import * as React from 'react';
import { View, Text, SafeAreaView, Platform, StatusBar, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
        <SafeAreaView style={styles.androidsav}/>
        <ImageBackground
         source={require('../assets/iss_bg.jpg')}
         style={styles.bgImage}
        >
          <View style={styles.titleBar}>
            <Text style={styles.headerTitle}> ISS Tracker App </Text>
          </View>
          <TouchableOpacity style={styles.btn} onPress={()=>this.props.navigation.navigate('IssLocation')}>
            <Text style={styles.btnText}>ISS Location</Text>
            <Text style={styles.knowMore}>{"Know More --->"}</Text>
            <Text style={styles.bgDigit}>1</Text>
            <Image 
              source={require('../assets/iss_icon.png')}
              style={styles.issIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={()=>this.props.navigation.navigate('Meteors')}>
            <Text style={styles.btnText}>Meteors</Text>
            <Image 
              source={require('../assets/meteor_icon.png')}
              style={styles.issIcon}
            />
            <Text style={styles.knowMore}>{"Know More --->"}</Text>
            <Text style={styles.bgDigit}>2</Text>
          </TouchableOpacity>
        </ImageBackground>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  androidsav: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  headerTitle:{textAlign: 'center', fontSize: 20, color: '#fff', overflow: 'hidden',},
  btn: {
    flex: 0.25,
    marginTop: 70,
    marginRight: 50,
    marginLeft: 50,
    marginBottom: 50,
    borderRadius: 30,
    backgroundColor: '#ffffff',
    width: 280, height: 80
  },
  btnText: {
    fontSize: 35,
    fontWeight: "bold",
    color: '#000',
    paddingLeft: 30,
    marginTop: 75,
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover"
  },
  issIcon: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    position: 'absolute', 
    right: 20,
    top: -80,
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 40,
    color: '#ffffff'
  },
  knowMore: {
    paddingLeft: 30,
    color: 'red',
    fontSize: 15
  },
  bgDigit:{
    position: 'absolute',
    color: 'rgba(183, 183, 183, 0.5)',
    fontSize: 150,
    right: 20,
    bottom: -15,
    zIndex: -1
  }
})
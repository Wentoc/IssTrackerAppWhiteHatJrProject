import axios from 'axios';
import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, StatusBar, SafeAreaView, SafeAreaViewBase, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
const axios = require("react-native-axios")

export default class IssLocation extends Component {
constructor(props) {
  super(props)
  this.state = {
     location: {}
  };
};

componentDidMount(){
  this.getIssLocation()
}

getIssLocation=()=>{
  axios.get('https://api.wheretheiss.at/v1/satellites/25544').then(response=>{this.setState({location: response.data})})
  .catch(error=>{alert(error.message)})
}

  render() {
    if(Object.keys(this.state.location).length === 0) {
      return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 300}}>
          <Text>Loading...</Text>
        </View>
      )
    }else {
      return (
        <View style={{flex: 1}}>
          <SafeAreaView style={styles.androidsav}>
           <ImageBackground style={styles.bgImage} source={require('../assets/iss_bg.jpg')}>
             <View style={styles.titleContainer}>
               <Text style={styles.titleTxt}>ISS Location</Text>
             </View>
             <View style={styles.mapContainer}>
               <MapView
                 style={styles.map}
                 region={{
                   latitude: this.state.location.latitude,
                   longitude: this.state.location.longitude,
                   latitudeDelta: 100,
                   longitudeDelta: 100
                 }}>
               <Marker
                 coordinate={{
                  latitude: this.state.location.latitude,
                  longitude: this.state.location.longitude,
                 }}
               >
                 <Image style={{width: 50, height: 50}} source={require('../assets/iss_icon.png')}/>
               </Marker>
              </MapView>
             </View>
           </ImageBackground>
          </SafeAreaView>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  androidsav: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  bgImage: {
    flex: 1,
    resizeMode: "contain"
  },
  titleContainer: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleTxt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  mapContainer: {
    flex: 0.6
  },
  map: {
    width: '100%',
    height: '100%'
  }
})
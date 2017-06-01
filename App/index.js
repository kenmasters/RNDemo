import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Meteor, { createContainer, connectMeteor } from 'react-native-meteor';
import { NetworkInfo } from 'react-native-network-info';
import styles from './styles';
import Realm from 'realm';
import { ListView } from 'realm/react-native';
const { width, height } = Dimensions.get('window');


const SERVER_URL = 'ws://192.168.2.12:3030/websocket';
// const Realm = require('realm');
import SignIn from './SignIn';
import SignOut from './SignOut';

// @connectMeteor
class App extends Component {
  constructor(props) {
    super(props);
    this.data = {};

    // Initialize the component with an empty data source
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = { dataSource: ds };

    // // Get Local IP 
    // NetworkInfo.getIPAddress(ip => {
    //   console.log(ip);
    // });
     
    // // Get IPv4 IP (Android Only) 
    // NetworkInfo.getIPV4Address(ipv4 => {
    //   console.log(ipv4);
    // });
     
    // // Get SSID 
    // NetworkInfo.getSSID(ssid => {
    //   console.log(ssid);
    // });
     
    // // Get BSSID 
    // NetworkInfo.getBSSID(ssid => {
    //   console.log(ssid);
    // });
  }

  componentWillMount() {
    Meteor.connect(SERVER_URL);  
    let realm = new Realm({
       schema: [
       	{name: 'Dog', properties: {name: 'string'}}
       ]
     });

    const dogs = realm.objects('Dog');
    this.setState({ realm, dataSource: this.state.dataSource.cloneWithRows(dogs) });
	dogs.addListener(() => this.forceUpdate());
  }

  componentDidMount() {
    
  }

  // getMeteorData() {
  //   return {
  //     user: Meteor.user(),
  //   };
  // }

  //render for realm 
  render() {
  	return (
  		<ListView 
  		dataSource={this.state.dataSource} 
  		renderRow={(item) => <Text style={styles.H3}>{item.name}</Text>} 
  		/>
  	);

     // realm.write(() => {
     //   realm.create('Dog', {name: 'Rex'});
     // });

     // return (
     //   <View style={styles.container}>
     //     <Text style={styles.welcome}>
     //       Count of Dogs in Realm: {realm.objects('Dog').length}
     //       {realm.objects('Dog').map((dog) => <Text key={dog.name}>{dog.name}</Text>)}
     //     </Text>
     //   </View>
     // );
   }

  render1() {
      if (this.props.user) {
        return <SignOut user={this.props.user} />;
      }
      return <SignIn />;
  }
  render2() {
    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>

        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>

        <Text style={styles.instructions}>
          Item Count: {this.props.count}
        </Text>


        <TouchableOpacity style={styles.button} onPress={this.handleAddItem}>
          <Text>Add Item</Text>
        </TouchableOpacity>

      </View>
    );
  }

  // ADDED
  handleAddItem() {
    console.log('Adding item...');
    const name = Math.floor(Math.random() * 10); // just generate some random number
    Meteor.call('Items.addOne', { name }, (err, res) => {
      // Do whatever you want with the response
      console.log('Items.addOne', err, res);
    });
  }
}

export default createContainer(() => {
  Meteor.subscribe('items');
  return {
    user: Meteor.user(),
    items: Meteor.collection('items').find(),
    count: Meteor.collection('items').find().length
  };
}, App);


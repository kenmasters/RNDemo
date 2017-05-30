import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity, // ADDED
  View
} from 'react-native';
import Meteor, { createContainer, connectMeteor } from 'react-native-meteor';

import styles from './styles';

const SERVER_URL = 'ws://192.168.2.9:3030/websocket';

import SignIn from './SignIn';
import SignOut from './SignOut';

// @connectMeteor
class App extends Component {
  constructor(props) {
    super(props);
    this.data = {};
  }
  componentWillMount() {
    Meteor.connect(SERVER_URL);  
  }

  // getMeteorData() {
  //   return {
  //     user: Meteor.user(),
  //   };
  // }

  render() {
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
import Meteor, { Accounts } from 'react-native-meteor';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

import ChangePassword from './ChangePassword';

class SignOut extends Component {
  constructor(props){
    super(props);
    this.state = {
      showChangePasswordForm: false
    };
  }
  render() {
    console.log(this.props.user);
    if (this.state.showChangePasswordForm) {
      return <ChangePassword />
    }
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Welcome</Text>
        <Text style={styles.h3}>{this.props.user.emails[0].address}</Text>

        <TouchableOpacity style={styles.button} onPress={() => this.changePassword()}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
     
        <TouchableOpacity style={styles.button} onPress={() => Meteor.logout()}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    );
  }

  changePassword() {
    console.log('show changePassword form');
    this.setState({showChangePasswordForm: true});
  }
}


const ELEMENT_WIDTH = width - 40;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  h1: {
    fontSize: 26,
    marginBottom:15
  },
  h2: {
    fontSize: 24,
    marginBottom:15
  },
  h3: {
    fontSize: 22,
    marginBottom:15
  },
  button: {
    backgroundColor: '#3B5998',
    width: ELEMENT_WIDTH,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default SignOut;
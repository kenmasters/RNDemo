import Meteor, { Accounts } from 'react-native-meteor';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPassword: '',
      newPassword: '',
      error: null
    };
    this.onChangePassword = this.onChangePassword.bind(this);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Change Password</Text>
        

        <TextInput
          style={styles.input}
          onChangeText={(oldPassword) => this.setState({oldPassword})}
          placeholder="Current Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />

        <TextInput
          style={styles.input}
          onChangeText={(newPassword) => this.setState({newPassword})}
          placeholder="New Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />

        <Text style={styles.error}>{this.state.error}</Text>

        <TouchableOpacity style={styles.button} onPress={this.onChangePassword}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>

      </View>
    );
  }

  isValid() {
    let { oldPassword, newPassword } = this.state;
    let valid = false;

    oldPassword = oldPassword.trim().replace('/\s+/g',' ');
    newPassword = newPassword.trim().replace('/\s+/g',' ');

    if (oldPassword.length > 0 && newPassword.length > 0) {
      valid = true;
    }

    if (oldPassword.length === 0 || newPassword.length === 0) {
      this.setState({ error: 'You must enter password on both fields' });
    }

    return valid;
  }

  onChangePassword() {
    console.log('trying to change password...');
    
    let { oldPassword, newPassword } = this.state;

    if (this.isValid()) {
      // try to change user password
      
    }
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
  input: {
    width: ELEMENT_WIDTH,
    fontSize: 16,
    height: 36,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderColor: '#888888',
    borderWidth: 1,
    marginHorizontal: 20,
    marginBottom: 10,
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
  error: {
    color: 'red',
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 10
  }
});

export default ChangePassword;
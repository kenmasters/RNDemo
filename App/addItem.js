import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

class AddItem extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	render() {
	    return (
	      <View style={styles.container}>
	        <Text style={styles.h1}>Add Item</Text>
	        <TextInput
	          style={styles.input}
	          onChangeText={(item) => this.setState({item})}
	          placeholder="Item Name"
	          autoCapitalize="true"
	          autoCorrect={false}
	        />
	        
	        <TouchableOpacity style={styles.button} onPress=''>
	          <Text style={styles.buttonText}>Add</Text>
	        </TouchableOpacity>

	      </View>
	    );
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
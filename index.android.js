// import { AppRegistry } from 'react-native';
// import App from './App';

// AppRegistry.registerComponent('RNDemo', () => App);

import React, {Component} from 'react';
import {
  AppRegistry,
  Button,
  Text,
  View,
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    let user 	= 'Marvin';
    let title 	= `Chat with ${user}`;
    return (
      <View>
        <Text style={{margin:12,fontSize:20}}>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat', {user:user})}
          title={title}
        />
      </View>
    );
  }
}

class ChatScreen extends Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => {
    const {state, setParams} = navigation;
    const isInfo = state.params.mode === 'info';
    const {user} = state.params;
    return {
      title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
      headerRight: (
        <Button
          title={isInfo ? 'Done' : `${user}'s info`}
          onPress={() => setParams({ mode: isInfo ? 'none' : 'info'})}
        />
      ),
    };
  };
  
  render() {
      // The screen's current route is passed in to `props.navigation.state`:
      const { params } = this.props.navigation.state;
      return (
		<View>
			<Text style={{margin:12,fontSize:20}}>Hello {params.user}</Text>
		</View>
      );
    }
}

class RecentChatsScreen extends Component {
  render() {
    return (
    	<View>
	    	<Text onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })} style={{margin:12,fontSize:20}}>User Lucy</Text>
	    	<Text onPress={() => this.props.navigation.navigate('Chat', { user: 'James' })} style={{margin:12,fontSize:20}}>User James</Text>
	    	<Text onPress={() => this.props.navigation.navigate('Chat', { user: 'Patrick' })} style={{margin:12,fontSize:20}}>User Patrick</Text>
	    	<Text onPress={() => this.props.navigation.navigate('Chat', { user: 'Ben' })} style={{margin:12,fontSize:20}}>User Ben</Text>
	    	<Text onPress={() => this.props.navigation.navigate('Chat', { user: 'Martin' })} style={{margin:12,fontSize:20}}>User Martin</Text>
	    	<Text onPress={() => this.props.navigation.navigate('Chat', { user: 'Jacobs' })} style={{margin:12,fontSize:20}}>User Jacobs</Text>
			<Button
			onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
			title="Chat with Lucy"
			/>
    	</View>
    );
    
  }
}

class AllContactsScreen extends Component {
  render() {
    return (
    	<View>
    	<Text onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })} style={{margin:12,fontSize:20}}>User Lucy</Text>
    	<Text onPress={() => this.props.navigation.navigate('Chat', { user: 'James' })} style={{margin:12,fontSize:20}}>User James</Text>
    	<Text onPress={() => this.props.navigation.navigate('Chat', { user: 'Patrick' })} style={{margin:12,fontSize:20}}>User Patrick</Text>
    	<Text onPress={() => this.props.navigation.navigate('Chat', { user: 'Ben' })} style={{margin:12,fontSize:20}}>User Ben</Text>
    	<Text onPress={() => this.props.navigation.navigate('Chat', { user: 'Martin' })} style={{margin:12,fontSize:20}}>User Martin</Text>
    	<Text onPress={() => this.props.navigation.navigate('Chat', { user: 'Jacobs' })} style={{margin:12,fontSize:20}}>User Jacobs</Text>
    	<Text onPress={() => this.props.navigation.navigate('Chat', { user: 'Sandy' })} style={{margin:12,fontSize:20}}>User Sandy</Text>
    	<Text onPress={() => this.props.navigation.navigate('Chat', { user: 'Mary' })} style={{margin:12,fontSize:20}}>User Mary</Text>
			
			
    	</View>
    );
    
  }
}

class AnotherScreen extends Component {
  render() {
    return (
    	<View>
	    	<Text style={{margin:12,fontSize:20}}>Another Tab</Text>
	    	<Button
			onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
			title="BUTTON"
			/>
    	</View>
    );
    
  }
}

class MoreScreen extends Component {
  render() {
    return (
    	<View>
    	<Text style={{margin:12,fontSize:20}}>More Actions Tab</Text>
    	<Button
			onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
			title="BUTTON"
			/>
    	</View>
    );
    
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
  Another: { screen: AnotherScreen },
  More: { screen: MoreScreen },
});

MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
};

const SimpleApp = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
});

AppRegistry.registerComponent('RNDemo', () => SimpleApp);
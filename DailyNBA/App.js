import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, } from 'react-navigation';
import { Icon } from 'react-native-elements'

class MatchDetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

class GamesScreen extends Component {
  static navigationOptions = {
    title: `${Date().slice(0,15)}`,
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Games</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class MeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Me</Text>
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: GamesScreen,
  Details: MatchDetailsScreen,
});

const TabNavigator = createBottomTabNavigator(
  {
    Games: HomeStack,
    Me: MeScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName, iconType;
        if (routeName === 'Games') {
          iconName = `ios-basketball`;
          iconType = `ionicon`
          // Sometimes we want to add badges to some icons. 
          // You can check the implementation below.
          //IconComponent = <ion-icon name="basketball"></ion-icon>; 
        } else if (routeName === 'Me') {
          iconName = `person`;
          iconType = `material`
        }

        // You can return any component that you like here!
        return <Icon 
          name={iconName}
          type={iconType}
          size={25} 
          color={tintColor} 
        />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(TabNavigator);
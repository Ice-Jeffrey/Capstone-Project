import React, {Component} from 'react'
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, FlatList} from 'react-native'
import teams from '../assets/team-map'

//get height and width of the window
const Height = Dimensions.get('screen').height;
const Width = Dimensions.get('screen').width;

export class GamesLayout extends Component {
  constructor(props) {
    super(props);
  }

  render()  {
    return (
        <View style={styles.box}>
            <View style={styles.team}>
                <Image
                style={styles.teamImage}
                source={teams[this.props.visitor].logo} 
                />
                <Text>AWAY</Text>    
            </View>
            <View style={styles.score}><Text>{this.props.visitor}</Text></View>
            <View style={styles.score}><Text>{this.props.visitorscore} - {this.props.homescore}</Text></View>
            <View style={styles.score}><Text>{this.props.home}</Text></View>
            <View style={styles.team}>
                <Image
                style={styles.teamImage}
                source={teams[this.props.home].logo}
                />
                <Text>HOME</Text>    
            </View>
        </View>   
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    height: Height/8,
  },
  team: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  teamImage: {
    height: Height/8 - 30,
    width: 40
  },
  score: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
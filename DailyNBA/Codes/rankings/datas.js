import React,{Component} from 'react';
import {View,Text,Dimensions,StyleSheet,ScrollView} from 'react-native';
import playerinfo from '../../assets/teamdata/playerdata';

const width=Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class datas extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:this.props.screenProps.name,
        }
    }
    render(){
        return(
            <ScrollView>
                <View style={{flexDirection:'row',marginLeft:5,marginTop:10}}>
                    <View style={{width:width/3,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:20,fontWeight:'bold', color: 'black'}}>Season</Text>
                        <Text style={{fontSize:20,fontWeight:'bold', color: 'black'}}>2018-19</Text>                        
                    </View>
                    <View style={{width:width/3,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:20,fontWeight:'bold', color: 'black'}}>Data</Text>                        
                    </View>
                    <View style={{width:width/3,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:20,fontWeight:'bold', color: 'black'}}>Rank</Text>
                    </View>   
                </View>
                {playerinfo[this.state.name].info.resultSets[0].rowSet[0].map((element,index) => {
                    if(index>=4&&index<=29){
                        return(
                            <View style={{flexDirection:'row',margin:3}}>
                                <View style={{width:width/3,alignItems:'center'}}>
                                    <Text style={styles.text}>{playerinfo[this.state.name].info.resultSets[0].headers[index]}</Text>                        
                                </View>
                                <View style={{width:width/3,alignItems:'center'}}>
                                    <Text style={styles.text}>{element}</Text>                        
                                </View>
                                <View style={{width:width/3,alignItems:'center'}}>
                                    <Text style={styles.text}>{playerinfo[this.state.name].info.resultSets[0].rowSet[0][index+26]}</Text>   
                                </View>
                            </View>                                               
                        )
                    }
            })}                                 

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'black'
    }
})
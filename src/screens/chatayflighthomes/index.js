import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { Button, Input, Item } from 'native-base';
import styles from './styles'

class Chatayflighthomes extends Component {
	render() {
		return (
			<View>
				<View style={styles.mainbody}>
					<Button onPress={()=>this.props.navigation.navigate('Chatayflightselected')} style={{backgroundColor: "none"}}>
						<Image style={{height: 50, width: 50}} source={require("../../assets/imgbtnback.png")} />
					</Button>
					<Image style={{marginBottom: 10, marginLeft: 30, height: 100, width: 260}} source={require("../../assets/chataylogo.png")} />
					<Text style={{ marginBottom: 40, lineHeight: 30, marginLeft: 70, width: 180, color: "#707070", fontWeight: "bold", fontSize:22, textAlign: "center" }}>Cathay Pacific CX735 ARRIVAL  </Text>
					<View>
						<Image style={{position: "absolute", zIndex: -10, marginTop: 10, marginLeft: 15, height: 300, width: 300}} source={require("../../assets/bgchatayflighthomes.png")} />

						<View style={{textAlign: "center", position: "absolute", zIndex: 10, top: 35, left: 100}} >
							<Button onPress={()=>this.props.navigation.navigate('')} 
							style={{backgroundColor: "none"}}>
							<Image style={{height: 40, width: 30}} source={require("../../assets/icfis.png")} />
							</Button>
							<Text style={{color: "#000000", fontWeight: "bold", fontSize:18}}>FIS</Text>
						</View>

						<View style={{textAlign: "center", position: "absolute", zIndex: 10, top: 35, right: 80}} >
							<Button onPress={()=>this.props.navigation.navigate('')} 
							style={{backgroundColor: "none"}}>
							<Image style={{marginLeft: 10,  height: 40, width: 40}} source={require("../../assets/icclock.png")} />
							</Button>
							<Text style={{color: "#000000", fontWeight: "bold", fontSize:18}}>CLOCK</Text>
						</View>

					</View>
				</View>
			</View>
		)
	}
}

export default Chatayflighthomes
import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { Button, Input, Item } from 'native-base';
import styles from './styles'

class Chatayflightselected extends Component {
	render() {
		return (
			<View>
				<View style={styles.mainbody}>
					<Button onPress={()=>this.props.navigation.navigate('Chatayflightselect')} style={{backgroundColor: "none"}}>
						<Image style={{height: 50, width: 50}} source={require("../../assets/imgbtnback.png")} />
					</Button>
					<Image style={{marginTop: 30, marginBottom: 30, marginLeft: 30, height: 100, width: 260}} source={require("../../assets/chataylogo.png")} />
					<Text style={{ marginBottom: 40, lineHeight: 30, marginLeft: 70, width: 180, color: "#707070", fontWeight: "bold", fontSize:22, textAlign: "center" }}>Cathay Pacific
CX735/710 </Text>
					<Button onPress={()=>this.props.navigation.navigate('Chatayflighthomes')} block light style={styles.buttoncta}>
			           <Text style={styles.textbuttoncta}>CX735 ARRIVAL</Text>
			        </Button>
			        <Button block light style={styles.buttoncta}>
			           <Text style={styles.textbuttoncta}>CX710 DEPARTURE</Text>
			        </Button>
				</View>
			</View>
		)
	}
}

export default Chatayflightselected
import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Button, Input, Item } from 'native-base';
import styles from './styles'

class Chataylogin extends Component {
	render() {
		return (
			<View>
				<View style={styles.mainbody}>
					<Button onPress={()=>this.props.navigation.navigate('Login')} style={{backgroundColor: "none"}}>
						<Image style={{height: 50, width: 50}} source={require("../../assets/imgbtnback.png")} />
					</Button>
					<Image style={{marginTop: 30, marginBottom: 30, marginLeft: 30, height: 100, width: 260}} source={require("../../assets/chataylogo.png")} />
					<Text style={{ marginBottom: 50, lineHeight: 30, marginLeft: 70, width: 180, color: "#707070", fontWeight: "bold", fontSize:22, textAlign: "center" }}>Cathay Pacific Flight Document </Text>
					<Item regular style={{marginBottom: 16}} >
			        	<Input autoCapitalize="none" placeholder='Username' />
			        </Item>
			        <Item regular style={{marginBottom: 50}} >
			        	<Input autoCapitalize="none" secureTextEntry={true} placeholder='Password' />
			        </Item>
					<Button onPress={()=>this.props.navigation.navigate('Chatayflightselect')} block light style={styles.buttoncta}>
			           <Text style={styles.textbuttoncta}>Log In Account</Text>
			        </Button>
				</View>
			</View>
		)
	}
}

export default Chataylogin
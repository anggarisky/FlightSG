import React, { Component } from 'react'
import { View, Text, Image, Alert, Keyboard } from 'react-native'
import { Button, Input, Item } from 'native-base';
import styles from './styles'

class Chataylogin extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
			username: "",
			password: ""
		}
	}

	myValidate=()=>{
		const {username, password} = this.state;
		if(username == "" && password == "") {
			Alert.alert('Please fill the Username and Password');
		}
		else if(username != "SINKKCX" && password != "SINKKCX_EAC"){
			Alert.alert('Username not found');
		}
		else if(username == "SINKKCX" && password == ""){
			Alert.alert('Password Empty');
		}
		else if(username == "" && password == "SINKKCX_EAC"){
			Alert.alert('Username Empty');
		}
		else if(username == "SINKKCX" && password == "SINKKCX_EAC!"){
			this.props.navigation.navigate("Chatayflightselect")
		} else {
			Alert.alert('Data not found');
		}
		Keyboard.dismiss();
	}

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
			        	<Input onChangeText={username => this.setState({username})} autoCapitalize="none" placeholder='Username' />
			        </Item>

			        <Item regular style={{marginBottom: 50}} >
			        	<Input onChangeText={password => this.setState({password})} autoCapitalize="none" secureTextEntry={true} placeholder='Password' />
			        </Item>

					<Button onPress={this.myValidate} block light style={styles.buttoncta}>
			           <Text style={styles.textbuttoncta}>Log In Account</Text>
			        </Button>
				</View>
			</View>
		)
	}
}

export default Chataylogin
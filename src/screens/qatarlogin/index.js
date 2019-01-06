import React, { Component } from 'react'
import { View, Text, Image, Alert, Keyboard } from 'react-native'
import { Button, Input, Item } from 'native-base';
import styles from './styles'

class Qatarlogin extends Component {

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
		else if(username != "SINNKQR" && password != "SINNKQR_EAC!"){
			Alert.alert('Username not found');
		}
		else if(username == "SINNKQR" && password == ""){
			Alert.alert('Password Empty');
		}
		else if(username == "" && password == "SINNKQR_EAC!"){
			Alert.alert('Username Empty');
		}
		else if(username == "SINNKQR" && password == "SINNKQR_EAC!"){
			this.props.navigation.navigate("Qatarflightselect")
		} else {
			Alert.alert('Data not found');
		}
		Keyboard.dismiss();
	}

	render() {
		return (
			<View>
				<Image style={{position: "absolute", zIndex: -1}} source={require("../../assets/bgqatarlogin.png")} />
				<View style={styles.mainbody}>
					<Button onPress={()=>this.props.navigation.navigate('Login')} style={{backgroundColor: "none"}}>
						<Image style={{height: 50, width: 50}} source={require("../../assets/imgbtnback.png")} />
					</Button>
					<Image style={{marginTop: 30, marginBottom: 30, marginLeft: 30, height: 80, width: 240}} source={require("../../assets/qatarlogologin.png")} />
					<Text style={{ marginBottom: 30, lineHeight: 30, marginLeft: 70, width: 180, color: "#3C3C3C", fontWeight: "bold", fontSize:28, lineHeight: 40, textAlign: "center" }}>ELECTRONIC AVIATION CLOCK </Text>
			
					<Item regular style={{marginBottom: 16}} >
			        	<Input onChangeText={username => this.setState({username})} autoCapitalize="none" placeholder='Username' />
			        </Item>

			        <Item regular style={{marginBottom: 50}} >
			        	<Input onChangeText={password => this.setState({password})} autoCapitalize="none" secureTextEntry={true} placeholder='Password' />
			        </Item>

					<Button onPress={this.myValidate} block light style={styles.buttoncta}>
			           <Image style={{height: 80, width: 80}} source={require("../../assets/oryxbg.png")} />
			        </Button>
				</View>
			</View>
		)
	}
}

export default Qatarlogin
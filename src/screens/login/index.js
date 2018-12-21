import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Button } from 'native-base';
import styles from './styles'

class Login extends Component {
	render() {
		return (
			<View>
				<Text style={{ marginBottom: 50, marginTop: 60, color: "#707070", fontWeight: "bold", fontSize:22, textAlign: "center" }}>SELECT YOUR AIRLINE</Text>
				<View style={styles.mainbody}>
						<Image style={{marginBottom: 30, marginLeft: 30, height: 100, width: 260}} source={require("../../assets/chataylogo.png")} />
					<Button block light style={styles.buttoncta} onPress={()=>this.props.navigation.navigate('Chataylogin')}>
			            <Text style={styles.textbuttoncta}>Cathay Pacific</Text>
			          </Button>
				</View>
				<View style={styles.mainbody}>
						<Image style={{marginBottom: 30, marginLeft: 30, height: 70, width: 260}} source={require("../../assets/qatarlogo.png")} />
					<Button block light style={styles.buttoncta}>
			            <Text style={styles.textbuttoncta}>Qatar Airways</Text>
			          </Button>
				</View>
			</View>
		)
	}
}

export default Login
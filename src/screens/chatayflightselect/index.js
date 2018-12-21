import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { Button, Input, Item } from 'native-base';
import styles from './styles'

class Chatayflightselect extends Component {
	render() {
		return (
			<ScrollView>
				<View style={styles.mainbody}>
					<Button onPress={()=>this.props.navigation.navigate('Chataylogin')} style={{backgroundColor: "none"}}>
						<Image style={{height: 50, width: 50}} source={require("../../assets/imgbtnback.png")} />
					</Button>
					<Image style={{top: 30, zIndex: -20, position: "absolute", height: 270, width: "100%"}} source={require("../../assets/chatayflightselectbg.png")} />
					<Image style={{marginTop: 30, marginBottom: 30, marginLeft: 30, height: 100, width: 260}} source={require("../../assets/chataylogo.png")} />
					<Text style={{ marginBottom: 80, lineHeight: 30, marginLeft: 70, width: 180, color: "#707070", fontWeight: "bold", fontSize:22, textAlign: "center" }}>Cathay Pacific Flight Document </Text>
					<Button block light style={styles.buttoncta}>
			           <Text style={styles.textbuttoncta}>CX715/714</Text>
			        </Button>
			        <Button block light style={styles.buttoncta}>
			           <Text style={styles.textbuttoncta}>CX659/650</Text>
			        </Button>
			        <Button onPress={()=>this.props.navigation.navigate('Chatayflightselected')} block light style={styles.buttoncta}>
			           <Text style={styles.textbuttoncta}>CX735/710</Text>
			        </Button>
			        <Button block light style={styles.buttoncta}>
			           <Text style={styles.textbuttoncta}>CX657/658</Text>
			        </Button>
			        <Button block light style={styles.buttoncta}>
			           <Text style={styles.textbuttoncta}>CX691/690</Text>
			        </Button>
			        <Button block light style={styles.buttoncta}>
			           <Text style={styles.textbuttoncta}>CX759/712</Text>
			        </Button>
			        <Button block light style={styles.buttoncta}>
			           <Text style={styles.textbuttoncta}>CX739/734</Text>
			        </Button>
			        <Button block light style={styles.buttoncta}>
			           <Text style={styles.textbuttoncta}>CX619/CX716</Text>
			        </Button>
			        <Button block light style={styles.buttoncta}>
			           <Text style={styles.textbuttoncta}>CX635/636</Text>
			        </Button>
				</View>
			</ScrollView>
		)
	}
}

export default Chatayflightselect
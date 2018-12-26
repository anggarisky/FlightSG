import React, { Component } from "react";
import { View, Text, Image, AsyncStorage, Alert } from "react-native";
import { Button, Input, Item } from "native-base";
import styles from "./styles";

class Chatayarrivalstaff extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      staffOne: "",
      staffTwo: ""
    }

  }

  componentDidMount = () => {
    AsyncStorage.getItem('staffOne').then((value) => this.setState({ 'staffOne': value }));
    AsyncStorage.getItem('staffTwo').then((value) => this.setState({ 'staffTwo': value }));
  } 

  setStaff = (value) => {
      AsyncStorage.setItem('staffOne', value);
      this.setState({ 'staffOne': value });
   }

   setStaffTwo = (value) => {
      AsyncStorage.setItem('staffTwo', value);
      this.setState({ 'staffTwo': value });
   } 

  render() {

    const { getParam } = this.props.navigation;

    return (
      <View>
        <View style={styles.mainbody}>
          <Button
            onPress={() =>
              this.props.navigation.navigate("Chatayflighthomes")
            }
            style={{ backgroundColor: "none" }}
          >
            <Image
              style={{ height: 50, width: 50 }}
              source={require("../../assets/imgbtnback.png")}
            />
          </Button>
          <Image
            style={{
              marginBottom: 10,
              marginLeft: 30,
              height: 100,
              width: 260
            }}
            source={require("../../assets/chataylogo.png")}
          />
          <Text
            style={{
              marginBottom: 40,
              lineHeight: 30,
              marginLeft: 20,
              width: 280,
              color: "#707070",
              fontWeight: "bold",
              fontSize: 22,
              textAlign: "center"
            }}
          >
            Cathay Pacific CX{getParam("data")} ARRIVAL STAFF
          </Text>

          <Item regular style={{marginBottom: 16}} >
                <Input 
                value={this.state.staffOne} 
                onChangeText={this.setStaff} autoCapitalize="none" placeholder='A1:' />
              </Item>

              <Item regular style={{marginBottom: 50}} >
                <Input value={this.state.staffTwo} 
                onChangeText={this.setStaffTwo} autoCapitalize="none" placeholder='A2:' />
              </Item>

        </View>
      </View>
    );
  }

}

export default Chatayarrivalstaff;

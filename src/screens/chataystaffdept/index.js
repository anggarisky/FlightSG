import React, { Component } from "react";
import { View, Text, Image, AsyncStorage, Alert, ScrollView } from "react-native";
import { Button, Input, Item } from "native-base";
import styles from "./styles";

class Chataystaffdept extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      staffOneDept: "",
      staffTwoDept: "",
      staffThreeDept: "",
      staffFourDept: "",
      staffFiveDept: "",
    }

  }

  componentDidMount = () => {
    AsyncStorage.getItem('staffOneDept').then((value) => this.setState({ 'staffOneDept': value }));
    AsyncStorage.getItem('staffTwoDept').then((value) => this.setState({ 'staffTwoDept': value }));
    AsyncStorage.getItem('staffThreeDept').then((value) => this.setState({ 'staffThreeDept': value }));
    AsyncStorage.getItem('staffFourDept').then((value) => this.setState({ 'staffFourDept': value }));
    AsyncStorage.getItem('staffFiveDept').then((value) => this.setState({ 'staffFiveDept': value }));
  } 

  setStaffOneDept = (value) => {
      AsyncStorage.setItem('staffOneDept', value);
      this.setState({ 'staffOneDept': value });
   }

   setStaffTwoDept = (value) => {
      AsyncStorage.setItem('staffTwoDept', value);
      this.setState({ 'staffTwoDept': value });
   }

   setStaffThreeDept = (value) => {
      AsyncStorage.setItem('staffThreeDept', value);
      this.setState({ 'staffThreeDept': value });
   }

   setStaffFourDept = (value) => {
      AsyncStorage.setItem('staffFourDept', value);
      this.setState({ 'staffFourDept': value });
   } 

   setStaffFiveDept = (value) => {
      AsyncStorage.setItem('staffFiveDept', value);
      this.setState({ 'staffFiveDept': value });
   } 

  render() {

    const { getParam } = this.props.navigation;

    return (
      <ScrollView>
        <View style={styles.mainbody}>
          <Button
            onPress={() =>
              this.props.navigation.navigate("Chatayflighthomesdept")
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
            Cathay Pacific CX{getParam("data")} DEPARTURE GATE STAFF
          </Text>

          <Item regular style={{marginBottom: 16}} >
                <Input 
                value={this.state.staffOneDept} 
                onChangeText={this.setStaffOneDept} autoCapitalize="none" placeholder='GI:' />
              </Item>

              <Item regular style={{marginBottom: 16}} >
                <Input value={this.state.staffTwoDept} 
                onChangeText={this.setStaffTwoDept} autoCapitalize="none" placeholder='D1/D2:' />
              </Item>

              <Item regular style={{marginBottom: 16}} >
                <Input value={this.state.staffThreeDept} 
                onChangeText={this.setStaffThreeDept} autoCapitalize="none" placeholder='AM:' />
              </Item>

              <Item regular style={{marginBottom: 16}} >
                <Input value={this.state.staffFourDept} 
                onChangeText={this.setStaffFourDept} autoCapitalize="none" placeholder='FC:' />
              </Item>

              <Item regular style={{marginBottom: 50}} >
                <Input value={this.state.staffFiveDept} 
                onChangeText={this.setStaffFiveDept} autoCapitalize="none" placeholder='RLO:' />
              </Item>

        </View>
      </ScrollView>
    );
  }

}

export default Chataystaffdept;

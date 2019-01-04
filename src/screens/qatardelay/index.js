import React, { Component } from "react";
import { View, Text, Image, ScrollView, Alert, AsyncStorage } from "react-native";
import { Button, Input, Item } from "native-base";
import call from 'react-native-phone-call'
import styles from "./styles";

class Qatardelay extends Component {

  saveDelayQatar = () => {
    Alert.alert("Data Auto-Saved");
  }

  componentDidMount = () => {
    AsyncStorage.getItem('qatarDelayOneLeft').then((value) => this.setState({ 'qatarDelayOneLeft': value }));
    AsyncStorage.getItem('qatarDelayOneRight').then((value) => this.setState({ 'qatarDelayOneRight': value }));

    AsyncStorage.getItem('qatarDelayTwoLeft').then((value) => this.setState({ 'qatarDelayTwoLeft': value }));
    AsyncStorage.getItem('qatarDelayTwoRight').then((value) => this.setState({ 'qatarDelayTwoRight': value }));

    AsyncStorage.getItem('qatarDelayThreeLeft').then((value) => this.setState({ 'qatarDelayThreeLeft': value }));
    AsyncStorage.getItem('qatarDelayThreeRight').then((value) => this.setState({ 'qatarDelayThreeRight': value }));

    AsyncStorage.getItem('qatarDelayFourLeft').then((value) => this.setState({ 'qatarDelayFourLeft': value }));
    AsyncStorage.getItem('qatarDelayFourRight').then((value) => this.setState({ 'qatarDelayFourRight': value }));

    AsyncStorage.getItem('qatarDelaySummary').then((value) => this.setState({ 'qatarDelaySummary': value }));
    AsyncStorage.getItem('qatarDelayCodes').then((value) => this.setState({ 'qatarDelayCodes': value }));
  }

  constructor(props) {
    super(props);
  
    this.state = {
      qatarDelayOneLeft: "",
      qatarDelayOneRight: "",

      qatarDelayTwoLeft: "",
      qatarDelayTwoRight: "",

      qatarDelayThreeLeft: "",
      qatarDelayThreeRight: "",

      qatarDelayFourLeft: "",
      qatarDelayFourRight: "",

      qatarDelaySummary: "",
      qatarDelayCodes: "",
    }

  }

  setqatarDelayOneLeft = (value) => {
      AsyncStorage.setItem('qatarDelayOneLeft', value);
      this.setState({ 'qatarDelayOneLeft': value });
  }

  setqatarDelayOneRight = (value) => {
      AsyncStorage.setItem('qatarDelayOneRight', value);
      this.setState({ 'qatarDelayOneRight': value });
  }

  setqatarDelayTwoLeft = (value) => {
      AsyncStorage.setItem('qatarDelayTwoLeft', value);
      this.setState({ 'qatarDelayTwoLeft': value });
  }

  setqatarDelayTwoRight = (value) => {
      AsyncStorage.setItem('qatarDelayTwoRight', value);
      this.setState({ 'qatarDelayTwoRight': value });
  }

  setqatarDelayThreeLeft = (value) => {
      AsyncStorage.setItem('qatarDelayThreeLeft', value);
      this.setState({ 'qatarDelayThreeLeft': value });
  }

  setqatarDelayThreeRight = (value) => {
      AsyncStorage.setItem('qatarDelayThreeRight', value);
      this.setState({ 'qatarDelayThreeRight': value });
  }

  setqatarDelayFourLeft = (value) => {
      AsyncStorage.setItem('qatarDelayFourLeft', value);
      this.setState({ 'qatarDelayFourLeft': value });
  }

  setqatarDelayFourRight = (value) => {
      AsyncStorage.setItem('qatarDelayFourRight', value);
      this.setState({ 'qatarDelayFourRight': value });
  }

  setqatarDelaySummary = (value) => {
      AsyncStorage.setItem('qatarDelaySummary', value);
      this.setState({ 'qatarDelaySummary': value });
  }

  setqatarDelayCodes = (value) => {
      AsyncStorage.setItem('qatarDelayCodes', value);
      this.setState({ 'qatarDelayCodes': value });
  }

  render() {

    const { getParam } = this.props.navigation;

    const myPhone = {
      number: '+601133225184', // String value with the number to call
      prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
    }

    return (
      <ScrollView>
        <View style={{backgroundColor: "#000000", width:420, height: 140}}>
          <Button
            onPress={() =>
              this.props.navigation.navigate("Qatarflightselected")
            }
            style={{ backgroundColor: "none" }}
          >
            <Image
              style={{ marginTop: 100, marginLeft: 30, height: 50, width: 50 }}
              source={require("../../assets/imgbtnback.png")}
            />
          </Button>
          <Text
            style={{
              marginLeft: 80,
              marginTop: 10,
              width: 280,
              color: "#FFC400",
              fontSize: 32,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            DELAY REPORT
          </Text>
        </View>
      <Image
            style={{
              position: "absolute",
              zIndex: -20,
              height: 830,
            }}
            source={require("../../assets/bgdelayqatar.png")}
          />
        <View style={styles.mainbody}>

          <View style={styles.buttonwrap}>
            <Item regular style={{backgroundColor: "white", width: 150, marginRight: 10}}>
                <Input value={this.state.qatarDelayOneLeft} onChangeText={this.setqatarDelayOneLeft} autoCapitalize="none" placeholder='e.g: 2 mins' />
              </Item>
              <Item regular style={{backgroundColor: "white", width: 150, marginRight: 10}}>
                <Input value={this.state.qatarDelayOneRight} onChangeText={this.setqatarDelayOneRight} autoCapitalize="none" placeholder='e.g: baggage' />
              </Item>
          </View>

          <View style={styles.buttonwrap}>
            <Item regular style={{backgroundColor: "white", width: 150, marginRight: 10}}>
                <Input value={this.state.qatarDelayTwoLeft} onChangeText={this.setqatarDelayTwoLeft} autoCapitalize="none" placeholder='e.g: 2 mins' />
              </Item>
              <Item regular style={{backgroundColor: "white", width: 150, marginRight: 10}}>
                <Input value={this.state.qatarDelayTwoRight} onChangeText={this.setqatarDelayTwoRight} autoCapitalize="none" placeholder='e.g: baggage' />
              </Item>
          </View>

          <View style={styles.buttonwrap}>
            <Item regular style={{backgroundColor: "white", width: 150, marginRight: 10}}>
                <Input value={this.state.qatarDelayThreeLeft} onChangeText={this.setqatarDelayThreeLeft} autoCapitalize="none" placeholder='e.g: 2 mins' />
              </Item>
              <Item regular style={{backgroundColor: "white", width: 150, marginRight: 10}}>
                <Input value={this.state.qatarDelayThreeRight} onChangeText={this.setqatarDelayThreeRight} autoCapitalize="none" placeholder='e.g: baggage' />
              </Item>
          </View>

          <View style={styles.buttonwrap}>
            <Item regular style={{backgroundColor: "white", width: 150, marginRight: 10}}>
                <Input value={this.state.qatarDelayFourLeft} onChangeText={this.setqatarDelayFourLeft} autoCapitalize="none" placeholder='e.g: 2 mins' />
              </Item>
              <Item regular style={{backgroundColor: "white", width: 150, marginRight: 10}}>
                <Input value={this.state.qatarDelayFourRight} onChangeText={this.setqatarDelayFourRight} autoCapitalize="none" placeholder='e.g: baggage' />
              </Item>
          </View>

          <Item regular style={{backgroundColor: "white", width: 310, marginLeft: 10}}>
                <Input value={this.state.qatarDelaySummary} onChangeText={this.setqatarDelaySummary} autoCapitalize="none" placeholder='Summary' />
              </Item>

              <Item regular style={{marginTop: 20, backgroundColor: "white", width: 310, marginLeft: 10}}>
                <Input value={this.state.qatarDelayCodes} onChangeText={this.setqatarDelayCodes} autoCapitalize="none" placeholder='Delay Code' />
              </Item>

              <Button
                  onPress={this.saveDelayQatar}
                  block
                  light
                  style={styles.buttoncircle}>
                  
                  <Text style={{color: "#000000", fontSize: 32}}>
                    SAVE
                  </Text>

              </Button>

        </View>
      </ScrollView>
    );
  }
}

export default Qatardelay;

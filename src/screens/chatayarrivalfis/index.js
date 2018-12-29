import React, { Component } from "react";
import { View, Text, Image, ScrollView, AsyncStorage } from "react-native";
import { Button, Input, Item, DatePicker } from "native-base";
import styles from "./styles";

class Chatayarrivalfis extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      chosenDate: "",
      flightGateNo: "",
      flightPaxLoad: "",
      flightSTA: "",
      flightVIP: "",
      flightCIP: "",
      flightUM: "",
      flightWCHR: "",
      flightMEDA: "",
      flightSTATE: "", 
    };
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  componentDidMount = () => {
    AsyncStorage.getItem('flightGateNo').then((value) => this.setState({ 'flightGateNo': value }));
    AsyncStorage.getItem('flightPaxLoad').then((value) => this.setState({ 'flightPaxLoad': value }));
    AsyncStorage.getItem('flightSTA').then((value) => this.setState({ 'flightSTA': value }));
    AsyncStorage.getItem('flightVIP').then((value) => this.setState({ 'flightVIP': value }));
    AsyncStorage.getItem('flightCIP').then((value) => this.setState({ 'flightCIP': value }));
    AsyncStorage.getItem('flightUM').then((value) => this.setState({ 'flightUM': value }));
    AsyncStorage.getItem('flightWCHR').then((value) => this.setState({ 'flightWCHR': value }));
    AsyncStorage.getItem('flightMEDA').then((value) => this.setState({ 'flightMEDA': value }));
    AsyncStorage.getItem('flightSTATE').then((value) => this.setState({ 'flightSTATE': value }));
  } 

  setflightGateNo = (value) => {
      AsyncStorage.setItem('flightGateNo', value);
      this.setState({ 'flightGateNo': value });
  }

  setflightPaxLoad = (value) => {
      AsyncStorage.setItem('flightPaxLoad', value);
      this.setState({ 'flightPaxLoad': value });
  }

  setflightSTA = (value) => {
      AsyncStorage.setItem('flightSTA', value);
      this.setState({ 'flightSTA': value });
  }
  setflightVIP = (value) => {
      AsyncStorage.setItem('flightVIP', value);
      this.setState({ 'flightVIP': value });
  }
  setflightCIP = (value) => {
      AsyncStorage.setItem('flightCIP', value);
      this.setState({ 'flightCIP': value });
  }
  setflightUM = (value) => {
      AsyncStorage.setItem('flightUM', value);
      this.setState({ 'flightUM': value });
  }
  setflightWCHR = (value) => {
      AsyncStorage.setItem('flightWCHR', value);
      this.setState({ 'flightWCHR': value });
  }
  setflightMEDA = (value) => {
      AsyncStorage.setItem('flightMEDA', value);
      this.setState({ 'flightMEDA': value });
  }
  setflightSTATE = (value) => {
      AsyncStorage.setItem('flightSTATE', value);
      this.setState({ 'flightSTATE': value });
  }

  render() {

    const { getParam } = this.props.navigation;

    return (
      <ScrollView>
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
            Cathay Pacific CX{getParam("data")} ARRIVAL FLIGHT INFORMATION
          </Text>

          <Item regular style={{marginBottom: 16}} >
                <Input value={this.state.flightGateNo} onChangeText={this.setflightGateNo} autoCapitalize="none" placeholder='Gate No:' />
              </Item>

                <Item regular style={{height: 50, marginBottom: 16}} >
                  
                  <DatePicker
                    defaultDate={new Date(2018, 4, 4)}
                    minimumDate={new Date(1990, 1, 1)}
                    maximumDate={new Date(2030, 12, 31)}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    placeHolderText="Choose Date"
                    textStyle={{ color: "#220148", fontSize: 16 }}
                    onDateChange={this.setDate}
                  />

                </Item>

          <Item regular style={{marginBottom: 16}} >
                <Input value={this.state.flightPaxLoad} onChangeText={this.setflightPaxLoad} autoCapitalize="none" placeholder='Pax Load:' />
              </Item>

          <Item regular style={{marginBottom: 16}} >
                <Input value={this.state.flightSTA} onChangeText={this.setflightSTA} autoCapitalize="none" placeholder='STA/ETA/ATA:' />
              </Item>

              <Item regular style={{marginBottom: 16}} >
                <Input value={this.state.flightVIP} onChangeText={this.setflightVIP} autoCapitalize="none" placeholder='VIP:' />
              </Item>

              <Item regular style={{marginBottom: 16}} >
                <Input value={this.state.flightCIP} onChangeText={this.setflightCIP} autoCapitalize="none" placeholder='CIP:' />
              </Item>


              <Item regular style={{marginBottom: 16}} >
                <Input value={this.state.flightUM} onChangeText={this.setflightUM} autoCapitalize="none" placeholder='UM:' />
              </Item>


              <Item regular style={{marginBottom: 16}} >
                <Input value={this.state.flightWCHR} onChangeText={this.setflightWCHR} autoCapitalize="none" placeholder='WCHR:' />
              </Item>


              <Item regular style={{marginBottom: 16}} >
                <Input value={this.state.flightMEDA} onChangeText={this.setflightMEDA} autoCapitalize="none" placeholder='MEDA:' />
              </Item>

              <Item regular style={{marginBottom: 16}} >
                <Input value={this.state.flightSTATE} onChangeText={this.setflightSTATE} autoCapitalize="none" placeholder='STATE ETC:' />
              </Item>



        </View>
      </ScrollView>
    );
  }
}

export default Chatayarrivalfis;

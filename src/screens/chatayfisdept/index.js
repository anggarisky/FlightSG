import React, { Component } from "react";
import { View, Text, Image, ScrollView, AsyncStorage } from "react-native";
import { Button, Input, Item, DatePicker } from "native-base";
import styles from "./styles";

class Chatayfisdept extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      chosenDate: "",
      ACRDept: "",
      flightGateNoDept: "",
      flightPaxLoadDept: "",
      flightSTADept: "",
      flightSTDDept: "",
      flightVIPDept: "",
      flightCIPDept: "",
      flightDLDept: "",
      flightEJDept: "",
      flightInfantsDept: "",

      flightWCHDept: "",
      flightMASSDept: "",
      flightDeporteeDept: "", 
      flightGateItemDept: "",
      flightSDept: "",  
      flightWDept: "",
    };
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  componentDidMount = () => {
    AsyncStorage.getItem('ACRDept').then((value) => this.setState({ 'ACRDept': value }));
    AsyncStorage.getItem('flightGateNoDept').then((value) => this.setState({ 'flightGateNoDept': value }));
    AsyncStorage.getItem('flightPaxLoadDept').then((value) => this.setState({ 'flightPaxLoadDept': value }));
    AsyncStorage.getItem('flightSTADept').then((value) => this.setState({ 'flightSTADept': value }));
    AsyncStorage.getItem('flightSTDDept').then((value) => this.setState({ 'flightSTDDept': value }));
    AsyncStorage.getItem('flightVIPDept').then((value) => this.setState({ 'flightVIPDept': value }));
    AsyncStorage.getItem('flightCIPDept').then((value) => this.setState({ 'flightCIPDept': value }));
    AsyncStorage.getItem('flightDLDept').then((value) => this.setState({ 'flightDLDept': value }));
    AsyncStorage.getItem('flightEJDept').then((value) => this.setState({ 'flightEJDept': value }));
    AsyncStorage.getItem('flightInfantsDept').then((value) => this.setState({ 'flightInfantsDept': value }));

    AsyncStorage.getItem('flightWCHDept').then((value) => this.setState({ 'flightWCHDept': value }));
    AsyncStorage.getItem('flightMASSDept').then((value) => this.setState({ 'flightMASSDept': value }));
    AsyncStorage.getItem('flightDeporteeDept').then((value) => this.setState({ 'flightDeporteeDept': value }));
    AsyncStorage.getItem('flightGateItemDept').then((value) => this.setState({ 'flightGateItemDept': value }));
    AsyncStorage.getItem('flightSDept').then((value) => this.setState({ 'flightSDept': value }));
    AsyncStorage.getItem('flightWDept').then((value) => this.setState({ 'flightWDept': value }));
  } 

  setflightACR = (value) => {
      AsyncStorage.setItem('ACRDept', value);
      this.setState({ 'ACRDept': value });
  }

  setflightGateNo = (value) => {
      AsyncStorage.setItem('flightGateNoDept', value);
      this.setState({ 'flightGateNoDept': value });
  }

  setflightPaxLoad = (value) => {
      AsyncStorage.setItem('flightPaxLoadDept', value);
      this.setState({ 'flightPaxLoadDept': value });
  }

  setflightSTA = (value) => {
      AsyncStorage.setItem('flightSTADept', value);
      this.setState({ 'flightSTADept': value });
  }
  setflightVIP = (value) => {
      AsyncStorage.setItem('flightVIPDept', value);
      this.setState({ 'flightVIPDept': value });
  }
  setflightCIP = (value) => {
      AsyncStorage.setItem('flightCIPDept', value);
      this.setState({ 'flightCIPDept': value });
  }
  setflightSTD = (value) => {
      AsyncStorage.setItem('flightSTDDept', value);
      this.setState({ 'flightSTDDept': value });
  }
  setflightDL = (value) => {
      AsyncStorage.setItem('flightDLDept', value);
      this.setState({ 'flightDLDept': value });
  }
  setflightEJ = (value) => {
      AsyncStorage.setItem('flightEJDept', value);
      this.setState({ 'flightEJDept': value });
  }
  setflightInfants = (value) => {
      AsyncStorage.setItem('flightInfantsDept', value);
      this.setState({ 'flightInfantsDept': value });
  }



  setflightWCH = (value) => {
      AsyncStorage.setItem('flightWCHDept', value);
      this.setState({ 'flightWCHDept': value });
  }

  setflightMASS = (value) => {
      AsyncStorage.setItem('flightMASSDept', value);
      this.setState({ 'flightMASSDept': value });
  }

  setflightDeportee = (value) => {
      AsyncStorage.setItem('flightDeporteeDept', value);
      this.setState({ 'flightDeporteeDept': value });
  }

  setflightGateItem = (value) => {
      AsyncStorage.setItem('flightGateItemDept', value);
      this.setState({ 'flightGateItemDept': value });
  }

  setflightS = (value) => {
      AsyncStorage.setItem('flightSDept', value);
      this.setState({ 'flightSDept': value });
  }

  setflightW = (value) => {
      AsyncStorage.setItem('flightWDept', value);
      this.setState({ 'flightWDept': value });
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
            Cathay Pacific CX{getParam("data")} DEPARTURE FLIGHT INFORMATION
          </Text>

          <Item regular style={{marginBottom: 16}} >
                <Input value={this.state.ACRDept} onChangeText={this.setflightACR} autoCapitalize="none" placeholder='Acft Reg:' />
              </Item>

          <Item regular style={{marginBottom: 16}} >
                <Input value={this.state.flightGateNoDept} onChangeText={this.setflightGateNo} autoCapitalize="none" placeholder='Gate No:' />
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
                <Input value={this.state.flightPaxLoadDept} onChangeText={this.setflightPaxLoad} autoCapitalize="none" placeholder='Pax Load:' />
              </Item>

          <Item regular style={{marginBottom: 16}} >
                <Input value={this.state.flightSTADept} onChangeText={this.setflightSTA} autoCapitalize="none" placeholder='STA/ETA/ATA:' />
              </Item>

              <Item regular style={{marginBottom: 16}} >
                <Input value={this.state.flightVIPDept} onChangeText={this.setflightVIP} autoCapitalize="none" placeholder='VIP:' />
              </Item>

              <Item regular style={{marginBottom: 16}} >
                <Input value={this.state.flightCIPDept} onChangeText={this.setflightCIP} autoCapitalize="none" placeholder='CIP:' />
              </Item>


              <Item regular style={{marginBottom: 16}} >
                <Input value={this.state.flightSTDDept} onChangeText={this.setflightSTD} autoCapitalize="none" placeholder='STD:' />
              </Item>


              <Item regular style={{marginBottom: 16}} >
                <Input value={this.state.flightDLDept} onChangeText={this.setflightDL} autoCapitalize="none" placeholder='Disembark Load:' />
              </Item>


              <Item regular style={{marginBottom: 16}} >
                <Input value={this.state.flightEJDept} onChangeText={this.setflightEJ} autoCapitalize="none" placeholder='Estimate Joiners:' />
              </Item>

              <Item regular style={{marginBottom: 16}} >
                <Input value={this.state.flightInfantsDept} onChangeText={this.setflightInfants} autoCapitalize="none" placeholder='Infants:' />
              </Item>

              <Item regular style={{marginBottom: 16}} >
                <Input value={this.state.flightWCHDept} onChangeText={this.setflightWCH} autoCapitalize="none" placeholder='WCH:' />
              </Item>



              <Item regular style={{marginBottom: 16}} >
                <Input value={this.state.flightMASSDept} onChangeText={this.setflightMASS} autoCapitalize="none" placeholder='MAAS:' />
              </Item>

              <Item regular style={{marginBottom: 16}} >
                <Input value={this.state.flightDeporteeDept} onChangeText={this.setflightDeportee} autoCapitalize="none" placeholder='Deportee:' />
              </Item>

              <Item regular style={{marginBottom: 16}} >
                <Input value={this.state.flightGateItemDept} onChangeText={this.setflightGateItem} autoCapitalize="none" placeholder='Gate Items:' />
              </Item>

              <Item regular style={{marginBottom: 16}} >
                <Input value={this.state.flightSDept} onChangeText={this.setflightS} autoCapitalize="none" placeholder='S:' />
              </Item>

              <Item regular style={{marginBottom: 16}} >
                <Input value={this.state.flightWDept} onChangeText={this.setflightW} autoCapitalize="none" placeholder='W:' />
              </Item>



        </View>
      </ScrollView>
    );
  }
}

export default Chatayfisdept;

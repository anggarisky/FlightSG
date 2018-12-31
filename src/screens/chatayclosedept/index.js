import React, { Component } from "react";
import { View, Text, Image, AsyncStorage } from "react-native";
import { Button, Input, Item } from "native-base";
import email from 'react-native-email'
import styles from "./styles";

class Chatayclosedept extends Component {

    constructor(props) {
      super(props);
    
      this.state = {
        emailFlightSubject: "",

        getFlightTypeII: "",

        staffOneDept: "",
        staffTwoDept: "",
        staffThreeDept: "",
        staffFourDept: "",
        staffFiveDept: "",


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


        delayItemOneLeft: "",
        delayItemOneRight: "",

        delayItemTwoLeft: "",
        delayItemTwoRight: "",

        delayItemThreeLeft: "",
        delayItemThreeRight: "",

        delayItemFourLeft: "",
        delayItemFourRight: "",

        delayItemFiveLeft: "",
        delayItemFiveRight: "",
      }

    }
    
    componentDidMount = () => {

      AsyncStorage.getItem('getFlightTypeII').then((getFlightTypeII) => this.setState({ 'getFlightTypeII': getFlightTypeII }));

      AsyncStorage.getItem('staffOneDept').then((value) => this.setState({ 'staffOneDept': value }));
      AsyncStorage.getItem('staffTwoDept').then((value) => this.setState({ 'staffTwoDept': value }));
      AsyncStorage.getItem('staffThreeDept').then((value) => this.setState({ 'staffThreeDept': value }));
      AsyncStorage.getItem('staffFourDept').then((value) => this.setState({ 'staffFourDept': value }));
      AsyncStorage.getItem('staffFiveDept').then((value) => this.setState({ 'staffFiveDept': value }));

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


      AsyncStorage.getItem('delayItemOneLeft').then((value) => this.setState({ 'delayItemOneLeft': value }));
      AsyncStorage.getItem('delayItemOneRight').then((value) => this.setState({ 'delayItemOneRight': value }));

      AsyncStorage.getItem('delayItemTwoLeft').then((value) => this.setState({ 'delayItemTwoLeft': value }));
      AsyncStorage.getItem('delayItemTwoRight').then((value) => this.setState({ 'delayItemTwoRight': value }));

      AsyncStorage.getItem('delayItemThreeLeft').then((value) => this.setState({ 'delayItemThreeLeft': value }));
      AsyncStorage.getItem('delayItemThreeRight').then((value) => this.setState({ 'delayItemThreeRight': value }));

      AsyncStorage.getItem('delayItemFourLeft').then((value) => this.setState({ 'delayItemFourLeft': value }));
      AsyncStorage.getItem('delayItemFourRight').then((value) => this.setState({ 'delayItemFourRight': value }));

      AsyncStorage.getItem('delayItemFiveLeft').then((value) => this.setState({ 'delayItemFiveLeft': value }));
      AsyncStorage.getItem('delayItemFiveRight').then((value) => this.setState({ 'delayItemFiveRight': value }));
      

    } 

    handleEmail = () => {
        const to = ['amsdu2m18465@gmail.com'] // string or array of email addresses
        email(to, {
            subject: this.state.emailFlightSubject + ' CX' + this.state.getFlightTypeII,
            
            body: 

            'Flight Reports.\n\n' + 

            'CX' + this.state.getFlightTypeII + ' Departure\n\n' + 

            'Staff GI: ' + this.state.staffOneDept + 
            '\n Staff D1/D2: ' + this.state.staffTwoDept +
            '\n Staff AM: ' + this.state.staffThreeDept +
            '\n Staff FC: ' + this.state.staffFourDept +
            '\n Staff RLO: ' + this.state.staffFiveDept +

            '\n\n Acft Reg: ' + this.state.ACRDept +
            '\nGate No: ' + this.state.flightGateNoDept +
            '\n Pax Load: ' + this.state.flightPaxLoadDept +
            '\n STA: ' + this.state.flightSTADept +
            '\n STD: ' + this.state.flightSTDDept +
            '\n VIP: ' + this.state.flightVIPDept +
            '\n CIP: ' + this.state.flightCIPDept +
            '\n Disembark Load: ' + this.state.flightDLDept +

            '\n Estimate Joiners: ' + this.state.flightEJDept +
            '\n Infants: ' + this.state.flightInfantsDept +
            '\n MASS: ' + this.state.flightMASSDept +
            '\n WCH: ' + this.state.flightWCHDept +

            '\n Deportee: ' + this.state.flightDeporteeDept +
            '\n Gate Items: ' + this.state.flightGateItemDept +
            '\n S: ' + this.state.flightSDept +
            '\n W: ' + this.state.flightWDept +

            '\n\n Delay Item One: ' + this.state.delayItemOneLeft + ' ' + this.state.delayItemOneRight +
            '\n Delay Item Two: ' + this.state.delayItemTwoLeft + ' ' + this.state.delayItemTwoRight +
            '\n Delay Item Three: ' + this.state.delayItemThreeLeft + ' ' + this.state.delayItemThreeRight +
            '\n Delay Item Four: ' + this.state.delayItemFourLeft + ' ' + this.state.delayItemFourRight +
            '\n Delay Item Five: ' + this.state.delayItemFiveLeft + ' ' + this.state.delayItemFiveRight +


            '\n\n Thank you for reporting.'
        


        }).catch(console.error);
        AsyncStorage.setItem('flightGateNoDept', "");
    }

    

  render() {

    const { getParam } = this.props.navigation;
    
    return (
      <View>
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
            Cathay Pacific CX{getParam("data")} {"\n"} DEPARTURE POST FLIGHT DOCUMENT
          </Text>

          <Item regular style={{marginBottom: 100}} >
                <Input onChangeText={emailFlightSubject => this.setState({emailFlightSubject})} autoCapitalize="none" placeholder='Enter Subject' />
              </Item>

          <Button 
          onPress={this.handleEmail}
              block
              light
              style={styles.buttoncta}>
              
              <Text style={styles.textbuttoncta}>
                CONFIRM CLOSE FLIGHT
              </Text>

          </Button>

        </View>
      </View>
    );
  }
}

export default Chatayclosedept;

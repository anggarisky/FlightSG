import React, { Component } from "react";
import { View, Text, Image, AsyncStorage } from "react-native";
import { Button, Input, Item } from "native-base";
import email from 'react-native-email'
import styles from "./styles";

class Chatayarrivalclose extends Component {

    constructor(props) {
      super(props);
    
      this.state = {
        chosenDateArrival: Date(),
        emailFlightSubject: "",
        staffOne: "",
        staffTwo: "",
        getFlightType: "",
        getFlightTypeII: "",
        flightGateNo: "",
        flightPaxLoad: "",
        flightSTA: "",
        flightVIP: "",
        flightCIP: "",
        flightUM: "",
        flightWCHR: "",
        flightMEDA: "",
        flightSTATE: "", 
        AOB: "",
        PDO: '',
        PBD: '',
        SRP: '',
        APO: '',
        WCP: '',
        BAG: '',
      }

    }
    
    componentDidMount = () => {
      AsyncStorage.getItem('staffOne').then((value) => this.setState({ 'staffOne': value }));
      AsyncStorage.getItem('staffTwo').then((value) => this.setState({ 'staffTwo': value }));

      AsyncStorage.getItem('getFlightType').then((getFlightType) => this.setState({ 'getFlightType': getFlightType }));
      AsyncStorage.getItem('getFlightTypeII').then((getFlightTypeII) => this.setState({ 'getFlightTypeII': getFlightTypeII }));
     
      AsyncStorage.getItem('flightGateNo').then((flightGateNo) => this.setState({ 'flightGateNo': flightGateNo }));
      AsyncStorage.getItem('flightPaxLoad').then((value) => this.setState({ 'flightPaxLoad': value }));
      AsyncStorage.getItem('flightSTA').then((value) => this.setState({ 'flightSTA': value }));
      AsyncStorage.getItem('flightVIP').then((value) => this.setState({ 'flightVIP': value }));
      AsyncStorage.getItem('flightCIP').then((value) => this.setState({ 'flightCIP': value }));
      AsyncStorage.getItem('flightUM').then((value) => this.setState({ 'flightUM': value }));
      AsyncStorage.getItem('flightWCHR').then((value) => this.setState({ 'flightWCHR': value }));
      AsyncStorage.getItem('flightMEDA').then((value) => this.setState({ 'flightMEDA': value }));
      AsyncStorage.getItem('flightSTATE').then((value) => this.setState({ 'flightSTATE': value }));

      AsyncStorage.getItem('AOB').then((AOB) => this.setState({ 'AOB': AOB }));
      AsyncStorage.getItem('PDO').then((PDO) => this.setState({ 'PDO': PDO }));
      AsyncStorage.getItem('PBD').then((PBD) => this.setState({ 'PBD': PBD }));
      AsyncStorage.getItem('SRP').then((SRP) => this.setState({ 'SRP': SRP }));
      AsyncStorage.getItem('APO').then((APO) => this.setState({ 'APO': APO }));
      AsyncStorage.getItem('WCP').then((WCP) => this.setState({ 'WCP': WCP }));
      AsyncStorage.getItem('BAG').then((BAG) => this.setState({ 'BAG': BAG }));

    } 

    handleEmail = () => {
        const to = ['amsdu2m18465@gmail.com'] // string or array of email addresses
        email(to, {
            subject: this.state.emailFlightSubject + ' CX' + this.state.getFlightType,
            
            body: 

            'Flight Reports.\n\n' + 

            'CX' + this.state.getFlightType + ' Arrival\n\n' + 

            'Staff A1: ' + this.state.staffOne + 
            '\n Staff A2: ' + this.state.staffTwo +

            '\n\n Gate No: ' + this.state.flightGateNo +
            '\n Pax Load: ' + this.state.flightPaxLoad +
            '\n FIS Date: ' + this.state.chosenDateArrival +
            '\n STA: ' + this.state.flightSTA +
            '\n VIP: ' + this.state.flightVIP +
            '\n CIP: ' + this.state.flightCIP +
            '\n UM: ' + this.state.flightUM +
            '\n WCHR: ' + this.state.flightWCHR +
            '\n MEDA: ' + this.state.flightMEDA +
            '\n STATE: ' + this.state.flightSTATE +

            '\n\n Aircraft on Block: ' + this.state.AOB +
            '\n\n Pax Door Open: ' + this.state.PDO +
            '\n\n Pax Begin Disembark: ' + this.state.PBD +
            '\n\n Strollers Restored to Pax: ' + this.state.SRP +
            '\n\n Arrival Pax Off: ' + this.state.APO +
            '\n\n WCH Pax: ' + this.state.WCP +
            '\n\n First / Last Priority Bag: ' + this.state.BAG +



            '\n\n Thank you for reporting.'
        


        }).catch(console.error);
        AsyncStorage.setItem('staffOne', "");
        AsyncStorage.setItem('staffTwo', "");

        AsyncStorage.setItem('flightGateNo', "");
        AsyncStorage.setItem('flightPaxLoad', "");
        AsyncStorage.setItem('flightSTA', "");
        AsyncStorage.setItem('flightVIP', "");
        AsyncStorage.setItem('flightCIP', "");
        AsyncStorage.setItem('flightUM', "");
        AsyncStorage.setItem('flightWCHR', "");
        AsyncStorage.setItem('flightMEDA', "");
        AsyncStorage.setItem('flightSTATE', "");

        AsyncStorage.setItem('AOB', "");
        AsyncStorage.setItem('PDO', "");
        AsyncStorage.setItem('PBD', "");
        AsyncStorage.setItem('SRP', "");
        AsyncStorage.setItem('APO', "");
        AsyncStorage.setItem('WCP', "");
        AsyncStorage.setItem('BAG', "");
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
            Cathay Pacific CX{getParam("data")} {"\n"} POST FLIGHT DOCUMENT
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

export default Chatayarrivalclose;

import React, { Component } from "react";
import { View, Text, Image, AsyncStorage } from "react-native";
import { Button, Input, Item } from "native-base";
import email from 'react-native-email'
import styles from "./styles";

class Qatarcloseflightend extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      qatarFlightType: "",
      qatarFlightTypeDua: "",

      ONCHOCKS: '',
      PAXOUT: '',
      CREWOUT: '',
      CATERING: '',
      CATERINGDUA: '',
      CLEANING: '',
      CLEANINGTU: '',
      ENGINEER: '',
      BOARDING: '',
      PAXDOORC: '',
      OFFCHOCKS: '',
    }

  }
    
  componentDidMount = () => {

    AsyncStorage.getItem('qatarFlightType').then((qatarFlightType) => this.setState({ 'qatarFlightType': qatarFlightType }));
    AsyncStorage.getItem('qatarFlightTypeDua').then((qatarFlightTypeDua) => this.setState({ 'qatarFlightTypeDua': qatarFlightTypeDua }));

    AsyncStorage.getItem('ONCHOCKS').then((ONCHOCKS) => this.setState({ 'ONCHOCKS': ONCHOCKS }));
    AsyncStorage.getItem('PAXOUT').then((PAXOUT) => this.setState({ 'PAXOUT': PAXOUT }));
    AsyncStorage.getItem('CREWOUT').then((CREWOUT) => this.setState({ 'CREWOUT': CREWOUT }));
    AsyncStorage.getItem('CATERING').then((CATERING) => this.setState({ 'CATERING': CATERING }));
    AsyncStorage.getItem('CATERINGDUA').then((CATERINGDUA) => this.setState({ 'CATERINGDUA': CATERINGDUA }));
    AsyncStorage.getItem('CLEANING').then((CLEANING) => this.setState({ 'CLEANING': CLEANING }));
    AsyncStorage.getItem('CLEANINGTU').then((CLEANINGTU) => this.setState({ 'CLEANINGTU': CLEANINGTU }));
    AsyncStorage.getItem('ENGINEER').then((ENGINEER) => this.setState({ 'ENGINEER': ENGINEER }));
    AsyncStorage.getItem('BOARDING').then((BOARDING) => this.setState({ 'BOARDING': BOARDING }));
    AsyncStorage.getItem('PAXDOORC').then((PAXDOORC) => this.setState({ 'PAXDOORC': PAXDOORC }));
    AsyncStorage.getItem('OFFCHOCKS').then((OFFCHOCKS) => this.setState({ 'OFFCHOCKS': OFFCHOCKS }));

  }

  sendQatarEmail = () => {
    const to = ['amsdu2m18465@gmail.com'] // string or array of email addresses
         email(to, {
            subject: 'Close QATAR Flights QR' + this.state.qatarFlightType + 
            '/' + this.state.qatarFlightTypeDua,
            
            body: 

            'Flight Reports.\n\n' + 

            'Clock Timing' +  
            '\nONCHOCKS:' +  this.state.ONCHOCKS +
            '\nPAXOUT:' +  this.state.PAXOUT +
            '\nCREWOUT:' +  this.state.CREWOUT +
            '\nCATERING:' +  this.state.CATERING +
            '\nCATERING DEPARTURE:' +  this.state.CATERINGDUA +
            '\nCLEANING:' +  this.state.CLEANING +
            '\nCLEANINGTU:' +  this.state.CLEANINGTU +
            '\nENGINEER:' +  this.state.ENGINEER +
            '\nBOARDING:' +  this.state.BOARDING +
            '\nPAXDOORC:' +  this.state.PAXDOORC +
            '\nOFFCHOCKS:' +  this.state.OFFCHOCKS +

            '\n\nFlight Information System' + 
            '\n Placeholder:' +

            '\n\n Thank you for reporting.'
        


        }).catch(console.error);
         
        this.props.navigation.navigate("Qatarflightselect")
  }

  render() {

    const { getParam } = this.props.navigation;
    
    return (
      <View style={{height: 667, backgroundColor: "#541330"}}>
        <View style={styles.mainbody}>

          <Image
              style={{ marginLeft: 110, height: 80, width: 80 }}
              source={require("../../assets/icavi.png")}
            />

          <Text
              style={{
                marginBottom: 40,
                marginTop: 40,
                lineHeight: 52,
                width: 320,
                color: "#FFFFFF",
                fontSize: 32,
                textAlign: "center"
              }}
            >
              {this.state.qatarFlightType}/{this.state.qatarFlightTypeDua} FLIGHT DOCUMENTS HAS BEEN SENT TO YOUR EMAIL
            </Text>

            <Image
              style={{ marginLeft: 10, width: 300, height: 10}}
              source={require("../../assets/icorna.png")}
            />

            <Text
              style={{
                marginBottom: 30,
                marginTop: 40,
                lineHeight: 52,
                width: 320,
                color: "#FFFFFF",
                fontSize: 20,
                textAlign: "center"
              }}
            >
              THANK YOU FOR USING EAC
            </Text>

            <Button
              onPress={this.sendQatarEmail}
              block
              light
              style={styles.buttonsave}>

              <Text style={{fontSize: 20, color: "white"}}>
                Save and Quit
              </Text>

          </Button>

          <Button
              onPress={() => this.props.navigation.navigate('Qatarflightselected')}
              block
              light
              style={styles.btncancel}>

              <Text style={{fontSize: 20, color: "#4a4a4a"}}>
                Cancel
              </Text>

          </Button>

        </View>
      </View>
    );
  }
}

export default Qatarcloseflightend;

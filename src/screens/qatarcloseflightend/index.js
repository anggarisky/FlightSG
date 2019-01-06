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

      qatarMOB: "",
      qatarUPLIFT: "",
      qatarFUELDOCK: "",
      qatarTAKEOFFFUEL: "",
      qatarREFSTART: "",
      qatarREFCOMPLETED: "",
      qatarFLOAD: "",
      qatarFORDER: "",
      qatarGATEITEMS: "",
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

    AsyncStorage.getItem('qatarMOB').then((value) => this.setState({ 'qatarMOB': value }));
    AsyncStorage.getItem('qatarUPLIFT').then((value) => this.setState({ 'qatarUPLIFT': value }));
    AsyncStorage.getItem('qatarFUELDOCK').then((value) => this.setState({ 'qatarFUELDOCK': value }));
    AsyncStorage.getItem('qatarTAKEOFFFUEL').then((value) => this.setState({ 'qatarTAKEOFFFUEL': value }));
    AsyncStorage.getItem('qatarREFSTART').then((value) => this.setState({ 'qatarREFSTART': value }));
    AsyncStorage.getItem('qatarREFCOMPLETED').then((value) => this.setState({ 'qatarREFCOMPLETED': value }));
    AsyncStorage.getItem('qatarFLOAD').then((value) => this.setState({ 'qatarFLOAD': value }));
    AsyncStorage.getItem('qatarFORDER').then((value) => this.setState({ 'qatarFORDER': value }));
    AsyncStorage.getItem('qatarGATEITEMS').then((value) => this.setState({ 'qatarGATEITEMS': value }));

  }

  sendQatarEmail = () => {
    const to = ['amsdu2m18465@gmail.com'] // string or array of email addresses
         email(to, {
            subject: 'Close QATAR Flights QR' + this.state.qatarFlightType + 
            '/' + this.state.qatarFlightTypeDua,
            
            body: 

            'Flight Reports.\n\n' + 

            'Flight Information System' +
            '\nMOB:' +  this.state.qatarMOB +
            '\nUPLIFT:' +  this.state.qatarUPLIFT +
            '\nFUEL DOCKET:' +  this.state.qatarFUELDOCK +
            '\nTAKE-OFF FUEL:' +  this.state.qatarTAKEOFFFUEL +
            '\nREFUELLING START:' +  this.state.qatarREFSTART +
            '\nREFUELLING COMPLETED:' +  this.state.qatarREFCOMPLETED +
            '\nFinal Load:' +  this.state.qatarFLOAD +
            '\nFinal Order:' +  this.state.qatarFORDER +
            '\nGate Items:' +  this.state.qatarGATEITEMS +

            'Clock Timing' +  
            '\nONCHOCKS:' +  this.state.ONCHOCKS +
            '\n\nPAXOUT:' +  this.state.PAXOUT +
            '\nCREWOUT:' +  this.state.CREWOUT +
            '\n\nCATERING:' +  this.state.CATERING +
            '\nCATERING DEPARTURE:' +  this.state.CATERINGDUA +
            '\n\nCLEANING:' +  this.state.CLEANING +
            '\nCLEANINGTU:' +  this.state.CLEANINGTU +
            '\n\nENGINEER:' +  this.state.ENGINEER +
            '\nBOARDING:' +  this.state.BOARDING +
            '\n\nPAXDOORC:' +  this.state.PAXDOORC +
            '\nOFFCHOCKS:' +  this.state.OFFCHOCKS +

            '\n\nDelay Report' + 
            '\nDelay Item One: ' +  this.state.qatarDelayOneLeft + ' ' + this.state.qatarDelayOneLeft +
            '\nDelay Item Two: ' +  this.state.qatarDelayTwoLeft + ' ' + this.state.qatarDelayTwoRight +
            '\nDelay Item Three: ' +  this.state.qatarDelayThreeLeft + ' ' + this.state.qatarDelayThreeRight +
            '\nDelay Item Four: ' +  this.state.qatarDelayFourLeft + ' ' + this.state.qatarDelayFourRight +

            '\nSummary: ' +  this.state.qatarDelaySummary +
            '\nDelay Codes: ' +  this.state.qatarDelayCodes +

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
              {this.state.qatarFlightType}/{this.state.qatarFlightTypeDua} FLIGHT DOCUMENTS WILL BE SEND TO YOUR EMAIL
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
                Send Email and Quit
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

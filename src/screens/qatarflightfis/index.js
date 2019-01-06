import React, {Component} from 'react';
import {View, Text, Image, ScrollView, AsyncStorage, Alert} from 'react-native';
import {Button, Input, Item} from 'native-base';
import styles from './styles';

class Qatarflightfis extends Component {

  componentDidMount = () => {
    AsyncStorage.getItem('qatarFlightType').then((qatarFlightType) => this.setState({ 'qatarFlightType': qatarFlightType }));
    AsyncStorage.getItem('qatarFlightTypeDua').then((qatarFlightTypeDua) => this.setState({ 'qatarFlightTypeDua': qatarFlightTypeDua }));


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

  constructor(props) {
    super(props);
  
    this.state = {
      qatarFlightType: "",
      qatarFlightTypeDua: "",


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

  setqatarMOB = (value) => {
      AsyncStorage.setItem('qatarMOB', value);
      this.setState({ 'qatarMOB': value });
  }

  setqatarUPLIFT = (value) => {
      AsyncStorage.setItem('qatarUPLIFT', value);
      this.setState({ 'qatarUPLIFT': value });
  }

  setqatarFUELDOCK = (value) => {
      AsyncStorage.setItem('qatarFUELDOCK', value);
      this.setState({ 'qatarFUELDOCK': value });
  }

  setqatarTAKEOFFFUEL = (value) => {
      AsyncStorage.setItem('qatarTAKEOFFFUEL', value);
      this.setState({ 'qatarTAKEOFFFUEL': value });
  }

  setqatarREFSTART = (value) => {
      AsyncStorage.setItem('qatarREFSTART', value);
      this.setState({ 'qatarREFSTART': value });
  }

  setqatarREFCOMPLETED = (value) => {
      AsyncStorage.setItem('qatarREFCOMPLETED', value);
      this.setState({ 'qatarREFCOMPLETED': value });
  }

  setqatarFLOAD = (value) => {
      AsyncStorage.setItem('qatarFLOAD', value);
      this.setState({ 'qatarFLOAD': value });
  }

  setqatarFORDER = (value) => {
      AsyncStorage.setItem('qatarFORDER', value);
      this.setState({ 'qatarFORDER': value });
  }

  setqatarGATEITEMS = (value) => {
      AsyncStorage.setItem('qatarGATEITEMS', value);
      this.setState({ 'qatarGATEITEMS': value });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.mainbody}>
          <Button
            onPress={() => this.props.navigation.navigate('Qatarflightselected')}
            style={{backgroundColor: 'none'}}>
            <Image
              style={{height: 50, width: 50}}
              source={require('../../assets/imgbtnback.png')}
            />
          </Button>
          <Image style={{marginTop: 30, marginBottom: 30, marginLeft: 30, height: 80, width: 240}} source={require("../../assets/qatarlogologin.png")} />
          <Text style={styles.titlepage}>
            FLIGHT INFORMATION SHEET
          </Text>

          <Text style={styles.subtitlepagedua}>
            QR{this.state.qatarFlightType}/QR{this.state.qatarFlightTypeDua} {"\n"}DOH-SIN-DOH
          </Text>

          <View style={styles.buttonwrap}>
            <Text style={{color: "#4a4a4a", fontSize: 14, fontWeight: "bold"}}>
              MOB 
            </Text>
            <Item regular style={{marginLeft: 80, backgroundColor: "white", width: 200}}>
                <Input value={this.state.qatarMOB} onChangeText={this.setqatarMOB} autoCapitalize="none" placeholder='Type anything here...' />
              </Item>
          </View>

          <View style={styles.buttonwrap}>
            <Text style={{color: "#4a4a4a", fontSize: 14, fontWeight: "bold"}}>
              UPLIFT 
            </Text>
            <Item regular style={{marginLeft: 65, backgroundColor: "white", width: 200}}>
                <Input value={this.state.qatarUPLIFT} onChangeText={this.setqatarUPLIFT} autoCapitalize="none" placeholder='Type anything here...' />
              </Item>
          </View>

          <View style={styles.buttonwrap}>
            <Text style={{color: "#4a4a4a", fontSize: 14, fontWeight: "bold"}}>
              FUEL DOCKET 
            </Text>
            <Item regular style={{marginLeft: 20, backgroundColor: "white", width: 200}}>
                <Input value={this.state.qatarFUELDOCK} onChangeText={this.setqatarFUELDOCK} autoCapitalize="none" placeholder='Type anything here...' />
              </Item>
          </View>

          <View style={styles.buttonwrap}>
            <Text style={{color: "#4a4a4a", fontSize: 14, fontWeight: "bold"}}>
              TAKE-OFF {"\n"}FUEL 
            </Text>
            <Item regular style={{marginLeft: 40, backgroundColor: "white", width: 200}}>
                <Input value={this.state.qatarTAKEOFFFUEL} onChangeText={this.setqatarTAKEOFFFUEL} autoCapitalize="none" placeholder='Type anything here...' />
              </Item>
          </View>
          <View style={styles.buttonwrap}>
            <Text style={{color: "#4a4a4a", fontSize: 14, fontWeight: "bold"}}>
              REFUELLING {"\n"}START 
            </Text>
            <Item regular style={{marginLeft: 30, backgroundColor: "white", width: 200}}>
                <Input value={this.state.qatarREFSTART} onChangeText={this.setqatarREFSTART} autoCapitalize="none" placeholder='Type anything here...' />
              </Item>
          </View>

          <View style={styles.buttonwrap}>
            <Text style={{color: "#4a4a4a", fontSize: 14, fontWeight: "bold"}}>
              REFUELLING {"\n"}COMPLETED 
            </Text>
            <Item regular style={{marginLeft: 30, backgroundColor: "white", width: 200}}>
                <Input value={this.state.qatarREFCOMPLETED} onChangeText={this.setqatarREFCOMPLETED} autoCapitalize="none" placeholder='Type anything here...' />
              </Item>
          </View>


          <View style={styles.buttonwrap}>
            <Text style={{color: "#4a4a4a", fontSize: 14, fontWeight: "bold"}}>
              FINAL LOAD 
            </Text>
            <Item regular style={{marginLeft: 40, backgroundColor: "white", width: 200}}>
                <Input value={this.state.qatarFLOAD} onChangeText={this.setqatarFLOAD} autoCapitalize="none" placeholder='Type anything here...' />
              </Item>
          </View>

          <View style={styles.buttonwrap}>
            <Text style={{color: "#4a4a4a", fontSize: 14, fontWeight: "bold"}}>
              FINAL ORDER 
            </Text>
            <Item regular style={{marginLeft: 30, backgroundColor: "white", width: 200}}>
                <Input value={this.state.qatarFORDER} onChangeText={this.setqatarFORDER} autoCapitalize="none" placeholder='Type anything here...' />
              </Item>
          </View>
          <View style={styles.buttonwrap}>
            <Text style={{color: "#4a4a4a", fontSize: 14, fontWeight: "bold"}}>
              GATE ITEMS 
            </Text>
            <Item regular style={{marginLeft: 40, backgroundColor: "white", width: 200}}>
                <Input value={this.state.qatarGATEITEMS} onChangeText={this.setqatarGATEITEMS} autoCapitalize="none" placeholder='Type anything here...' />
              </Item>
          </View>

        </View>
      </ScrollView>
    );
  }
}

export default Qatarflightfis;

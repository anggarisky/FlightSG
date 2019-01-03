import React, {Component} from 'react';
import {View, Text, Image, ScrollView, AsyncStorage} from 'react-native';
import {Button, Input, Item} from 'native-base';
import styles from './styles';

class Qatarflightclockdua extends Component {

  saveQatarTiming = () => {
    AsyncStorage.setItem('ONCHOCKS', this.state.ONCHOCKS);
    AsyncStorage.setItem('PAXOUT', this.state.PAXOUT);
    AsyncStorage.setItem('CREWOUT', this.state.CREWOUT);
    AsyncStorage.setItem('CATERING', this.state.CATERING);
    AsyncStorage.setItem('CLEANINGTU', this.state.CLEANINGTU);
    AsyncStorage.setItem('ENGINEER', this.state.ENGINEER);
    AsyncStorage.setItem('BOARDING', this.state.BOARDING);
    AsyncStorage.setItem('PAXDOORC', this.state.PAXDOORC);
    AsyncStorage.setItem('OFFCHOCKS', this.state.OFFCHOCKS);
  }

  state = {
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

  setOC = () => {
    this.setState({
      ONCHOCKS: Date(),
    })
  }

  setPAXOUT = () => {
    this.setState({
      PAXOUT: Date(),
    })
  }

  setCREWOUT = () => {
    this.setState({
      CREWOUT: Date(),
    })
  }

  setCATERING = () => {
    this.setState({
      CATERING: Date(),
    })
  }

  setCATERINGDUA = () => {
    this.setState({
      CATERINGDUA: Date(),
    })
  }

  setCLEANING = () => {
    this.setState({
      CLEANING: Date(),
    })
  }

  setCLEANINGTU = () => {
    this.setState({
      CLEANINGTU: Date(),
    })
  }

  setENGINEER = () => {
    this.setState({
      ENGINEER: Date(),
    })
  }

  setBOARDING = () => {
    this.setState({
      BOARDING: Date(),
    })
  }

  setPAXDOORC = () => {
    this.setState({
      PAXDOORC: Date(),
    })
  }

  setOFFCHOCKS = () => {
    this.setState({
      OFFCHOCKS: Date(),
    })
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: "#541330"}}>
        <View style={styles.mainbody}>
          <Button
            onPress={() => this.props.navigation.navigate('Qatarflightselected')}
            style={{backgroundColor: 'none'}}>
            <Image
              style={{height: 50, width: 50}}
              source={require('../../assets/imgbtnback.png')}
            />
          </Button>

          <Text style={styles.titlepage}>
            ARRIVAL
          </Text>

          <View style={styles.buttonwrap}>
            <Text style={{color: "#FFFFFF", fontSize: 18, fontWeight: "bold"}}>
              ON-CHOCKS 
            </Text>
            <Button
              onPress={this.setOC}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                Generate {'\n' + this.state.ONCHOCKS}
              </Text>

            </Button>
          </View>

          <View style={styles.buttonwrap}>
            <Text style={{marginRight: 33, color: "#FFFFFF", fontSize: 18, fontWeight: "bold"}}>
              PAX OUT
            </Text>
            <Button
              onPress={this.setPAXOUT}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                Generate {'\n' + this.state.PAXOUT}
              </Text>

            </Button>
          </View>

          <View style={styles.buttonwrap}>
            <Text style={{marginRight: 15, color: "#FFFFFF", fontSize: 18, fontWeight: "bold"}}>
              CREW OUT
            </Text>
            <Button
              onPress={this.setCREWOUT}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                Generate {'\n' + this.state.CREWOUT}
              </Text>

            </Button>
          </View>

          <View style={styles.buttonwrap}>
            <Text style={{marginRight: 20, color: "#FFFFFF", fontSize: 18, fontWeight: "bold"}}>
              CATERING
            </Text>
            <Button
              onPress={this.setCATERING}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                Generate {'\n' + this.state.CATERING}
              </Text>

            </Button>
          </View>

          <View style={styles.buttonwrap}>
            <Text style={{marginRight: 18, color: "#FFFFFF", fontSize: 18, fontWeight: "bold"}}>
              CLEANING
            </Text>
            <Button
              onPress={this.setCLEANING}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                Generate {'\n' + this.state.CLEANING}
              </Text>

            </Button>
          </View>



          <Text style={styles.titlepage}>
            DEPARTURE
          </Text>

          <View style={styles.buttonwrap}>
            <Text style={{marginRight: 20, color: "#FFFFFF", fontSize: 18, fontWeight: "bold"}}>
              CATERING
            </Text>
            <Button
              onPress={this.setCATERINGDUA}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                Generate {'\n' + this.state.CATERINGDUA}
              </Text>

            </Button>
          </View>

          <View style={styles.buttonwrap}>
            <Text style={{marginRight: 16, color: "#FFFFFF", fontSize: 18, fontWeight: "bold"}}>
              CLEANING {"\n"}T.U
            </Text>
            <Button
              onPress={this.setCLEANINGTU}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                Generate {'\n' + this.state.CLEANINGTU}
              </Text>

            </Button>
          </View>

          <View style={styles.buttonwrap}>
            <Text style={{marginRight: 35, color: "#FFFFFF", fontSize: 18, fontWeight: "bold"}}>
              ENGINE-{"\n"}ERING
            </Text>
            <Button
              onPress={this.setENGINEER}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                Generate {'\n' + this.state.ENGINEER}
              </Text>

            </Button>
          </View>

          <View style={styles.buttonwrap}>
            <Text style={{marginRight: 18, color: "#FFFFFF", fontSize: 18, fontWeight: "bold"}}>
              BOARDING
            </Text>
            <Button
              onPress={this.setBOARDING}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                Generate {'\n' + this.state.BOARDING}
              </Text>

            </Button>
          </View>

          <View style={styles.buttonwrap}>
            <Text style={{marginRight: 16, color: "#FFFFFF", fontSize: 18, fontWeight: "bold"}}>
              PAX DOOR {"\n"} CLOSED
            </Text>
            <Button
              onPress={this.setPAXDOORC}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                Generate {'\n' + this.state.PAXDOORC}
              </Text>

            </Button>
          </View>

          <View style={styles.buttonwrap}>
            <Text style={{marginRight: 35, color: "#FFFFFF", fontSize: 18, fontWeight: "bold"}}>
              OFF-{"\n"}CHOCKS
            </Text>
            <Button
              onPress={this.setOFFCHOCKS}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                Generate {'\n' + this.state.OFFCHOCKS}
              </Text>

            </Button>
          </View>


          <Button
              onPress={this.saveQatarTiming}
              block
              light
              style={styles.buttonsave}>

              <Text style={{color: "#FFFFFF", fontSize: 22}}>
                Save Data
              </Text>

          </Button>

        </View>
      </ScrollView>
    );
  }
}

export default Qatarflightclockdua;

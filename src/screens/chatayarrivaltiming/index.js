import React, { Component } from "react";
import { View, Text, Image, ScrollView, Alert, AsyncStorage } from "react-native";
import { Button, Input, Item } from "native-base";
import styles from "./styles";

class Chatayarrivaltiming extends Component {

  saveArrivalTiming = () => {
    AsyncStorage.setItem('AOB', this.state.AOB);
    AsyncStorage.setItem('PDO', this.state.PDO);
    AsyncStorage.setItem('PBD', this.state.PBD);
    AsyncStorage.setItem('SRP', this.state.SRP);
    AsyncStorage.setItem('APO', this.state.APO);
    AsyncStorage.setItem('WCP', this.state.WCP);
    AsyncStorage.setItem('BAG', this.state.BAG);
  }

  state = {
    AOB: '',
    PDO: '',
    PBD: '',
    SRP: '',
    APO: '',
    WCP: '',
    BAG: '',
  }

  aobTime = () => {
    this.setState({
      AOB: Date(),
    })
  }

  pdoTime = () => {
    this.setState({
      PDO: Date(),
    })
  }

  pbdTime = () => {
    this.setState({
      PBD: Date(),
    })
  }

  srpTime = () => {
    this.setState({
      SRP: Date(),
    })
  }

  apoTime = () => {
    this.setState({
      APO: Date(),
    })
  }

  wcpTime = () => {
    this.setState({
      WCP: Date(),
    })
  }

  bagTime = () => {
    this.setState({
      BAG: Date(),
    })
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
            Cathay Pacific CX{getParam("data")} ARRIVAL TIMING
          </Text>

          <Button
              onPress={this.aobTime}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                Aircraft on Block {'\n' + this.state.AOB}
              </Text>

          </Button>

          <Button
            onPress={this.pdoTime}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                Pax Door Open {'\n' + this.state.PDO}
              </Text>

          </Button>

          <Button
            onPress={this.pbdTime}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                Pax Begin Disembark {'\n' + this.state.PBD}
              </Text>

          </Button>

          <Button
              onPress={this.srpTime}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                Strollers Restored to Pax {'\n' + this.state.SRP}
              </Text>

          </Button>

          <Button
              onPress={this.apoTime}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                Arrival Pax Off {'\n' + this.state.APO}
              </Text>

          </Button>

          <Button
              onPress={this.wcpTime}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                WCH Pax {'\n' + this.state.WCP}
              </Text>

          </Button>

          <Button
              onPress={this.bagTime}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                First / Last Priority Bag {'\n' + this.state.BAG}
              </Text>

          </Button>

          <Button
              onPress={this.saveArrivalTiming}
              block
              light
              style={styles.buttonsave}>

              <Text style={styles.textbuttoncta}>
                Save Data
              </Text>

          </Button>

        </View>
      </ScrollView>
    );
  }
}

export default Chatayarrivaltiming;

import React, { Component } from "react";
import { View, Text, Image, ScrollView, Alert } from "react-native";
import { Button, Input, Item } from "native-base";
import styles from "./styles";

class Chatayarrivaltiming extends Component {

  state = {
    AOB: 'Aircraft On Block',
    PDO: 'Pax Door Open',
    PBD: 'Pax Begin Disembark',
    SRP: 'Strollers Restored to Pax',
    APO: 'Arrival Pax Off',
    WCP: 'WCH Pax',
    BAG: 'First / Last Priority Bag',
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
                {this.state.AOB}
              </Text>

          </Button>

          <Button
            onPress={this.pdoTime}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                {this.state.PDO}
              </Text>

          </Button>

          <Button
            onPress={this.pbdTime}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                {this.state.PBD}
              </Text>

          </Button>

          <Button
              onPress={this.srpTime}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                {this.state.SRP}
              </Text>

          </Button>

          <Button
              onPress={this.apoTime}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                {this.state.APO}
              </Text>

          </Button>

          <Button
              onPress={this.wcpTime}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                {this.state.WCP}
              </Text>

          </Button>

          <Button
              onPress={this.bagTime}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                {this.state.BAG}
              </Text>

          </Button>

        </View>
      </ScrollView>
    );
  }
}

export default Chatayarrivaltiming;

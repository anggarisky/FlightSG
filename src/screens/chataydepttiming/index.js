import React, { Component } from "react";
import { View, Text, Image, ScrollView, Alert, AsyncStorage } from "react-native";
import { Button, Input, Item } from "native-base";
import styles from "./styles";

class Chataydepttiming extends Component {

  saveArrivalTiming = () => {
    AsyncStorage.setItem('PreDept', this.state.PreDept);
    AsyncStorage.setItem('ActDept', this.state.ActDept);
    AsyncStorage.setItem('AICDept', this.state.AICDept);
    AsyncStorage.setItem('SSUDept', this.state.SSUDept);
    AsyncStorage.setItem('BGRDept', this.state.BGRDept);
    AsyncStorage.setItem('LastPDept', this.state.LastPDept);
    AsyncStorage.setItem('DoorCDept', this.state.DoorCDept);
  }

  state = {
    PreDept: '',
    ActDept: '',
    AICDept: '',
    SSUDept: '',
    BGRDept: '',
    LastPDept: '',
    DoorCDept: '',
  }

  aobTime = () => {
    this.setState({
      PreDept: Date(),
    })
  }

  pdoTime = () => {
    this.setState({
      ActDept: Date(),
    })
  }

  pbdTime = () => {
    this.setState({
      AICDept: Date(),
    })
  }

  srpTime = () => {
    this.setState({
      SSUDept: Date(),
    })
  }

  apoTime = () => {
    this.setState({
      BGRDept: Date(),
    })
  }

  wcpTime = () => {
    this.setState({
      LastPDept: Date(),
    })
  }

  bagTime = () => {
    this.setState({
      DoorCDept: Date(),
    })
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
            Cathay Pacific CX{getParam("data")} DEPARTURE TIMING
          </Text>

          <Button
              onPress={this.aobTime}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                Pre-Boarding {'\n' + this.state.PreDept}
              </Text>

          </Button>

          <Button
            onPress={this.pdoTime}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                Actual Boarding {'\n' + this.state.ActDept}
              </Text>

          </Button>

          <Button
            onPress={this.pbdTime}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                AIC {'\n' + this.state.AICDept}
              </Text>

          </Button>

          <Button
              onPress={this.srpTime}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                SSU {'\n' + this.state.SSUDept}
              </Text>

          </Button>

          <Button
              onPress={this.apoTime}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                BGR {'\n' + this.state.BGRDept}
              </Text>

          </Button>

          <Button
              onPress={this.wcpTime}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                Last Pax {'\n' + this.state.LastPDept}
              </Text>

          </Button>

          <Button
              onPress={this.bagTime}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                Door Close {'\n' + this.state.DoorCDept}
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

export default Chataydepttiming;

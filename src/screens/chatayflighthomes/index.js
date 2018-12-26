import React, { Component } from "react";
import { View, Text, Image, ScrollView, AsyncStorage } from "react-native";
import { Button, Input, Item } from "native-base";
import styles from "./styles";

class Chatayflighthomes extends Component {

  navigateTo = (pages, data) => {
    this.props.navigation.navigate(pages, {
      data,
    });
  };

  render() {
    const { getParam } = this.props.navigation; 
    const newArrival  = getParam('data');

    return (
      <View>
        <View style={styles.mainbody}>
          <Button
            onPress={() =>
              this.props.navigation.navigate("Chatayflightselected")
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
              marginLeft: 70,
              width: 180,
              color: "#707070",
              fontWeight: "bold",
              fontSize: 22,
              textAlign: "center"
            }}
          >
            Cathay Pacific CX{getParam("data")} ARRIVAL
          </Text>
          <View>
            <Image
              style={{
                position: "absolute",
                zIndex: -10,
                height: 330,
                width: 330
              }}
              source={require("../../assets/bgchatayflighthomes.png")}
            />

            <View
              style={{
                textAlign: "center",
                position: "absolute",
                zIndex: 10,
                top: 35,
                left: 100
              }}
            >
              <Button
                onPress={() => this.navigateTo('Chatayarrivalfis', newArrival)}
                style={{ backgroundColor: "none" }}
              >
                <Image
                  style={{ height: 40, width: 30, marginLeft: -3 }}
                  source={require("../../assets/icfis.png")}
                />
              </Button>
              <Text
                style={{ color: "#000000", fontWeight: "bold", fontSize: 16 }}
              >
                FIS
              </Text>
            </View>

            <View
              style={{
                textAlign: "center",
                position: "absolute",
                zIndex: 10,
                top: 35,
                right: 80
              }}
            >
              <Button
                onPress={() => this.navigateTo('Chatayarrivaltiming', newArrival)}

                style={{ backgroundColor: "none" }}
              >
                <Image
                  style={{ marginLeft: 10, height: 40, width: 40 }}
                  source={require("../../assets/icclock.png")}
                />
              </Button>
              <Text
                style={{ color: "#000000", fontWeight: "bold", fontSize: 16 }}
              >
                CLOCK
              </Text>
            </View>

            <View
              style={{
                textAlign: "center",
                position: "absolute",
                zIndex: 10,
                top: 225,
                right: 90
              }}
            >
              <Button
                onPress={() => this.navigateTo('Chatayarrivalstaff', newArrival)}
                style={{ backgroundColor: "none" }}
              >
                <Image
                  style={{ marginLeft: 5, height: 40, width: 40 }}
                  source={require("../../assets/icpeople.png")}
                />
              </Button>
              <Text
                style={{ color: "#000000", fontWeight: "bold", fontSize: 16 }}
              >
                STAFF
              </Text>
            </View>

            <View
              style={{
                textAlign: "center",
                position: "absolute",
                zIndex: 10,
                top: 225,
                left: 70
              }}
            >
              <Button
                onPress={() => this.navigateTo('Chatayarrivalcontact', newArrival)}
                style={{ backgroundColor: "none" }}
              >
                <Image
                  style={{ marginLeft: 25, height: 40, width: 40 }}
                  source={require("../../assets/iccontacts.png")}
                />
              </Button>
              <Text
                style={{ color: "#000000", fontWeight: "bold", fontSize: 16 }}
              >
                CONTACTS
              </Text>
            </View>

            <View
              style={{
                textAlign: "center",
                position: "absolute",
                zIndex: 10,
                top: 130,
                left: 30
              }}
            >
              <Button
                onPress={() => this.navigateTo('Chatayarrivalclose', newArrival)}
                style={{ backgroundColor: "none" }}
              >
                <Image
                  style={{ marginLeft: 10, height: 40, width: 40 }}
                  source={require("../../assets/iccloseflight.png")}
                />
              </Button>
              <Text
                style={{ color: "#000000", fontWeight: "bold", fontSize: 16 }}
              >
                CLOSE {"\n"}FLIGHT
              </Text>
            </View>

            <View
              style={{
                textAlign: "center",
                position: "absolute",
                zIndex: 10,
                top: 130,
                left: 138
              }}
            >
              <Button
                onPress={() => this.props.navigation.navigate("")}
                style={{ backgroundColor: "none" }}
              >
                <Image
                  style={{ marginLeft: 7, height: 40, width: 40 }}
                  source={require("../../assets/icflightplane.png")}
                />
              </Button>
              <Text
                style={{ color: "#000000", fontWeight: "bold", fontSize: 16 }}
              >
                CX{getParam("data")}
              </Text>
            </View>
            
            

          </View>
        </View>
      </View>
    );
  }
}

export default Chatayflighthomes;

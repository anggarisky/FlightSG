import React, { Component } from "react";
import { View, Text, Image, ScrollView, Alert } from "react-native";
import { Button, Input, Item } from "native-base";
import call from 'react-native-phone-call'
import styles from "./styles";

class Chataycontactdept extends Component {

  render() {

    const { getParam } = this.props.navigation;

    const myPhone = {
      number: '+601133225184', // String value with the number to call
      prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
    }

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
            Cathay Pacific CX{getParam("data")} Singapore
          </Text>

          <Button
              onPress={() => call(myPhone)}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                CX MOD
              </Text>

          </Button>

          <Button onPress={() => call(myPhone)}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                CX Supervisor
              </Text>

          </Button>

          <Button onPress={() => call(myPhone)}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                Counter Supervisor
              </Text>

          </Button>

          <Button onPress={() => call(myPhone)}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                Gate Supervisor
              </Text>

          </Button>

          <View style={styles.buttonwrap}>
            <Button onPress={() => call(myPhone)}
                block
                light
                style={styles.buttonsmallcta}>

                <Text style={styles.textbuttoncta}>
                  G18
                </Text>

            </Button>
            <Button onPress={() => call(myPhone)}
                block
                light
                style={styles.buttonsmallcta}>

                <Text style={styles.textbuttoncta}>
                  G19
                </Text>

            </Button>
            <Button onPress={() => call(myPhone)}
                block
                light
                style={styles.buttonsmallcta}>

                <Text style={styles.textbuttoncta}>
                  G20
                </Text>

            </Button>
            <Button onPress={() => call(myPhone)}
                block
                light
                style={styles.buttonsmallcta}>

                <Text style={styles.textbuttoncta}>
                  G21
                </Text>

            </Button>
          </View>

          <Button onPress={() => call(myPhone)}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                Flight Controller
              </Text>

          </Button>

          <Button onPress={() => call(myPhone)}
              block
              light
              style={styles.buttoncta}>

              <Text style={styles.textbuttoncta}>
                INFO Staff
              </Text>

          </Button>

          <View style={styles.buttonwrap}>
            <Button onPress={() => call(myPhone)}
                block
                light
                style={styles.buttonmedcta}>

                <Text style={styles.textbuttoncta}>
                  TCO (210)
                </Text>

            </Button>
            <Button onPress={() => call(myPhone)}
                block
                light
                style={styles.buttonmedcta}>

                <Text style={styles.textbuttoncta}>
                  TCO (201)
                </Text>

            </Button>
          </View>

        </View>
      </ScrollView>
    );
  }
}

export default Chataycontactdept;

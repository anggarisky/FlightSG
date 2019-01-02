import React, { Component } from "react";
import { View, Text, Image, ScrollView, Alert } from "react-native";
import { Button, Input, Item } from "native-base";
import call from 'react-native-phone-call'
import styles from "./styles";

class Qatarcontact extends Component {

  render() {

    const { getParam } = this.props.navigation;

    const myPhone = {
      number: '+601133225184', // String value with the number to call
      prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
    }

    return (
      <View style={{backgroundColor: "#541330", height: 800}}>
        <View style={styles.mainbody}>

          <Image
            style={{
              marginBottom: 10,
              marginLeft: -40,
              marginTop: -50,
              position: "absolute",
              zIndex: -20,
            }}
            source={require("../../assets/bgcontacttop.png")}
          />


          <Button
            onPress={() =>
              this.props.navigation.navigate("Qatarflightselected")
            }
            style={{ backgroundColor: "none" }}
          >
            <Image
              style={{ height: 50, width: 50 }}
              source={require("../../assets/imgbtnback.png")}
            />
          </Button>


          <Text
            style={{
              marginLeft: 20,
              width: 280,
              color: "#FFC400",
              fontSize: 38,
              textAlign: "center",
              marginTop: -10,
              marginBottom: 50,
              fontWeight: "bold",
            }}
          >
            CONCTACTS
          </Text>

          <View style={styles.buttonwrap}>
            <Button onPress={() => call(myPhone)}
                block
                light
                style={styles.buttonsmallcta}>

                <Text style={styles.textbuttoncta}>
                  ASM
                </Text>

            </Button>
            <Button onPress={() => call(myPhone)}
                block
                light
                style={styles.buttonsmallcta}>

                <Text style={styles.textbuttoncta}>
                  DO
                </Text>

            </Button>
            <Button onPress={() => call(myPhone)}
                block
                light
                style={styles.buttonsmallcta}>

                <Text style={styles.textbuttoncta}>
                  A/C
                </Text>

            </Button>
          </View>

          <View style={styles.buttonwrap}>
            <Button onPress={() => call(myPhone)}
                block
                light
                style={styles.buttonsmallcta}>

                <Text style={styles.textbuttoncta}>
                  AIRPORT OFFICE
                </Text>

            </Button>
            <Button onPress={() => call(myPhone)}
                block
                light
                style={styles.buttonsmallcta}>

                <Text style={styles.textbuttoncta}>
                  TOWN OFFICE
                </Text>

            </Button>
            <Button onPress={() => call(myPhone)}
                block
                light
                style={styles.buttonsmallcta}>

                <Text style={styles.textbuttoncta}>
                  DOHA{"\n"}RES
                </Text>

            </Button>
          </View>

          <View style={styles.buttonwrap}>
            <Button onPress={() => call(myPhone)}
                block
                light
                style={styles.buttonsmallctagreen}>

                <Text style={styles.textbuttoncta}>
                  IOCC
                </Text>

            </Button>
            <Button onPress={() => call(myPhone)}
                block
                light
                style={styles.buttonsmallctagreen}>

                <Text style={styles.textbuttoncta}>
                  MOCC
                </Text>

            </Button>
            <Button onPress={() => call(myPhone)}
                block
                light
                style={styles.buttonsmallctagreen}>

                <Text style={styles.textbuttoncta}>
                  MEDLINK
                </Text>

            </Button>
          </View>

          <View style={styles.buttonwrap}>
            <Button onPress={() => call(myPhone)}
                block
                light
                style={styles.buttonsmallctablue}>

                <Text style={styles.textbuttoncta}>
                  DNATA {"\n"}OCC
                </Text>

            </Button>
            <Button onPress={() => call(myPhone)}
                block
                light
                style={styles.buttonsmallctablue}>

                <Text style={styles.textbuttoncta}>
                  DNATA {"\n"}RAMP DM
                </Text>

            </Button>
            <Button onPress={() => call(myPhone)}
                block
                light
                style={styles.buttonsmallctablue}>

                <Text style={styles.textbuttoncta}>
                  DNATA {"\n"} PAX SVCS DM
                </Text>

            </Button>
          </View>

          <View style={styles.buttonwrap}>
            <Button onPress={() => call(myPhone)}
                block
                light
                style={styles.buttonsmallctasilver}>

                <Text style={styles.textbuttoncta}>
                  TI DTM
                </Text>

            </Button>
            <Button onPress={() => call(myPhone)}
                block
                light
                style={styles.buttonsmallctasilver}>

                <Text style={styles.textbuttoncta}>
                  MASTER {"\n"}APRON
                </Text>

            </Button>
            <Button onPress={() => call(myPhone)}
                block
                light
                style={styles.buttonsmallctasilver}>

                <Text style={styles.textbuttoncta}>
                  CAG
                </Text>

            </Button>
          </View>

          <View style={styles.buttonwrap}>
            <Button onPress={() => call(myPhone)}
                block
                light
                style={styles.buttonsmallctared}>

                <Text style={styles.textbuttoncta}>
                  APD
                </Text>

            </Button>
            <Button onPress={() => call(myPhone)}
                block
                light
                style={styles.buttonsmallctared}>

                <Text style={styles.textbuttoncta}>
                  MEDICAL
                </Text>

            </Button>
          </View>

        </View>
      </View>
    );
  }
}

export default Qatarcontact;

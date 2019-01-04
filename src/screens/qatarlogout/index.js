import React, { Component } from "react";
import { View, Text, Image, AsyncStorage } from "react-native";
import { Button, Input, Item } from "native-base";
import email from 'react-native-email'
import styles from "./styles";

class Qatarlogout extends Component {
    

  render() {

    const { getParam } = this.props.navigation;
    
    return (
      <View style={{height: 667, backgroundColor: "#541330"}}>
        <View style={styles.mainbody}>

          <Text
              style={{
                marginBottom: 40,
                marginTop: 40,
                lineHeight: 52,
                marginLeft: 10,
                width: 300,
                color: "#FFC400",
                fontWeight: "bold",
                fontSize: 42,
                textAlign: "center"
              }}
            >
              ARE YOU SURE YOU WANT TO LOGOUT?
            </Text>

          <View style={styles.buttonwrap}>
            <Button 
              onPress={() => this.props.navigation.navigate('Qatarlogin')}
                  block
                  light
                  style={styles.buttoncta}>
                  
                  <Text style={styles.textbuttoncta}>
                    YES
                  </Text>

              </Button>

              <Button 
                  onPress={() => this.props.navigation.navigate('Qatarflightselect')}
                  block
                  light
                  style={styles.buttoncta}>
                  
                  <Text style={styles.textbuttoncta}>
                    NO
                  </Text>

              </Button>
          </View>

        </View>
      </View>
    );
  }
}

export default Qatarlogout;

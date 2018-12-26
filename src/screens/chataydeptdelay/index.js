import React, { Component } from "react";
import { View, Text, Image, AsyncStorage } from "react-native";
import { Button, Input, Item } from "native-base";
import email from 'react-native-email'
import styles from "./styles";

class Chataydeptdelay extends Component {

    handleEmail = () => {
        const to = ['angga@fintechcapital.com'] // string or array of email addresses
        email(to, {
            subject: 'Close Flight CX123',
            body: 'Flight has been closed, Thank you!'
        }).catch(console.error)
    }

  render() {

    const { getParam } = this.props.navigation; 

    return (
      <View>
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
              marginBottom: 60,
              lineHeight: 30,
              marginLeft: 20,
              width: 280,
              color: "#707070",
              fontWeight: "bold",
              fontSize: 22,
              textAlign: "center"
            }}
          >
            Cathay Pacific CX{getParam("data")} {"\n"} DEPARTURE DELAY REPORT
          </Text>

          <View style={styles.buttonwrap}>

            <Item regular style={{width: 150, marginRight: 10}}>
                <Input autoCapitalize="none" placeholder='Item Type' />
              </Item>

              <Item regular style={{width: 150}}>
                <Input autoCapitalize="none" placeholder='Duration' />
              </Item>


          </View>

          <View style={styles.buttonwrap}>

            <Item regular style={{width: 150, marginRight: 10}}>
                <Input autoCapitalize="none" placeholder='Item Type' />
              </Item>

              <Item regular style={{width: 150}}>
                <Input autoCapitalize="none" placeholder='Duration' />
              </Item>


          </View>

          <View style={styles.buttonwrap}>

            <Item regular style={{width: 150, marginRight: 10}}>
                <Input autoCapitalize="none" placeholder='Item Type' />
              </Item>

              <Item regular style={{width: 150}}>
                <Input autoCapitalize="none" placeholder='Duration' />
              </Item>


          </View>

          <View style={styles.buttonwrap}>

            <Item regular style={{width: 150, marginRight: 10}}>
                <Input autoCapitalize="none" placeholder='Item Type' />
              </Item>

              <Item regular style={{width: 150}}>
                <Input autoCapitalize="none" placeholder='Duration' />
              </Item>


          </View>

          <View style={styles.buttonwrap}>

            <Item regular style={{width: 150, marginRight: 10}}>
                <Input autoCapitalize="none" placeholder='Item Type' />
              </Item>

              <Item regular style={{width: 150}}>
                <Input autoCapitalize="none" placeholder='Duration' />
              </Item>


          </View>

        </View>
      </View>
    );
  }
}

export default Chataydeptdelay;

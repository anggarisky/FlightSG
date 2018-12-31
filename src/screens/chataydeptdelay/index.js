import React, { Component } from "react";
import { View, Text, Image, AsyncStorage, ScrollView } from "react-native";
import { Button, Input, Item } from "native-base";
import styles from "./styles";

class Chataydeptdelay extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      delayItemOneLeft: "",
      delayItemOneRight: "",

      delayItemTwoLeft: "",
      delayItemTwoRight: "",

      delayItemThreeLeft: "",
      delayItemThreeRight: "",

      delayItemFourLeft: "",
      delayItemFourRight: "",

      delayItemFiveLeft: "",
      delayItemFiveRight: "",
    }

  }

  componentDidMount = () => {
    AsyncStorage.getItem('delayItemOneLeft').then((value) => this.setState({ 'delayItemOneLeft': value }));
    AsyncStorage.getItem('delayItemOneRight').then((value) => this.setState({ 'delayItemOneRight': value }));

    AsyncStorage.getItem('delayItemTwoLeft').then((value) => this.setState({ 'delayItemTwoLeft': value }));
    AsyncStorage.getItem('delayItemTwoRight').then((value) => this.setState({ 'delayItemTwoRight': value }));

    AsyncStorage.getItem('delayItemThreeLeft').then((value) => this.setState({ 'delayItemThreeLeft': value }));
    AsyncStorage.getItem('delayItemThreeRight').then((value) => this.setState({ 'delayItemThreeRight': value }));

    AsyncStorage.getItem('delayItemFourLeft').then((value) => this.setState({ 'delayItemFourLeft': value }));
    AsyncStorage.getItem('delayItemFourRight').then((value) => this.setState({ 'delayItemFourRight': value }));

    AsyncStorage.getItem('delayItemFiveLeft').then((value) => this.setState({ 'delayItemFiveLeft': value }));
    AsyncStorage.getItem('delayItemFiveRight').then((value) => this.setState({ 'delayItemFiveRight': value }));

  }

  setdelayItemOneLeft = (value) => {
      AsyncStorage.setItem('delayItemOneLeft', value);
      this.setState({ 'delayItemOneLeft': value });
  }
  setdelayItemOneRight = (value) => {
      AsyncStorage.setItem('delayItemOneRight', value);
      this.setState({ 'delayItemOneRight': value });
  }

  setdelayItemTwoLeft = (value) => {
      AsyncStorage.setItem('delayItemTwoLeft', value);
      this.setState({ 'delayItemTwoLeft': value });
  }
  setdelayItemTwoRight = (value) => {
      AsyncStorage.setItem('delayItemTwoRight', value);
      this.setState({ 'delayItemTwoRight': value });
  }

  setdelayItemThreeLeft = (value) => {
      AsyncStorage.setItem('delayItemThreeLeft', value);
      this.setState({ 'delayItemThreeLeft': value });
  }
  setdelayItemThreeRight = (value) => {
      AsyncStorage.setItem('delayItemThreeRight', value);
      this.setState({ 'delayItemThreeRight': value });
  }

  setdelayItemFourLeft = (value) => {
      AsyncStorage.setItem('delayItemFourLeft', value);
      this.setState({ 'delayItemFourLeft': value });
  }
  setdelayItemFourRight = (value) => {
      AsyncStorage.setItem('delayItemFourRight', value);
      this.setState({ 'delayItemFourRight': value });
  }

  setdelayItemFiveLeft = (value) => {
      AsyncStorage.setItem('delayItemFiveLeft', value);
      this.setState({ 'delayItemFiveLeft': value });
  }
  setdelayItemFiveRight = (value) => {
      AsyncStorage.setItem('delayItemFiveRight', value);
      this.setState({ 'delayItemFiveRight': value });
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
                <Input value={this.state.delayItemOneLeft} onChangeText={this.setdelayItemOneLeft} autoCapitalize="none" placeholder='e.g: Baggage' />
              </Item>

              <Item regular style={{width: 150}}>
                <Input value={this.state.delayItemOneRight} onChangeText={this.setdelayItemOneRight} autoCapitalize="none" placeholder='e.g: 2 mins' />
              </Item>


          </View>

          <View style={styles.buttonwrap}>

            <Item regular style={{width: 150, marginRight: 10}}>
                <Input value={this.state.delayItemTwoLeft} onChangeText={this.setdelayItemTwoLeft} autoCapitalize="none" placeholder='Item Type' />
              </Item>

              <Item regular style={{width: 150}}>
                <Input value={this.state.delayItemTwoRight} onChangeText={this.setdelayItemTwoRight} autoCapitalize="none" placeholder='Duration' />
              </Item>


          </View>

          <View style={styles.buttonwrap}>

            <Item regular style={{width: 150, marginRight: 10}}>
                <Input value={this.state.delayItemThreeLeft} onChangeText={this.setdelayItemThreeLeft} autoCapitalize="none" placeholder='Item Type' />
              </Item>

              <Item regular style={{width: 150}}>
                <Input value={this.state.delayItemThreeRight} onChangeText={this.setdelayItemThreeRight} autoCapitalize="none" placeholder='Duration' />
              </Item>


          </View>

          <View style={styles.buttonwrap}>

            <Item regular style={{width: 150, marginRight: 10}}>
                <Input value={this.state.delayItemFourLeft} onChangeText={this.setdelayItemFourLeft} autoCapitalize="none" placeholder='Item Type' />
              </Item>

              <Item regular style={{width: 150}}>
                <Input value={this.state.delayItemFourRight} onChangeText={this.setdelayItemFourRight} autoCapitalize="none" placeholder='Duration' />
              </Item>


          </View>

          <View style={styles.buttonwrap}>

            <Item regular style={{width: 150, marginRight: 10}}>
                <Input value={this.state.delayItemFiveLeft} onChangeText={this.setdelayItemFiveLeft} autoCapitalize="none" placeholder='Item Type' />
              </Item>

              <Item regular style={{width: 150}}>
                <Input value={this.state.delayItemFiveRight} onChangeText={this.setdelayItemFiveRight} autoCapitalize="none" placeholder='Duration' />
              </Item>


          </View>

        </View>
      </ScrollView>
    );
  }
}

export default Chataydeptdelay;

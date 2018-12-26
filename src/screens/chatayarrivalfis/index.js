import React, { Component } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Button, Input, Item, DatePicker } from "native-base";
import styles from "./styles";

class Chatayarrivalfis extends Component {

  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
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
            Cathay Pacific CX{getParam("data")} ARRIVAL FLIGHT INFORMATION
          </Text>

          <Item regular style={{marginBottom: 16}} >
                <Input onChangeText={username => this.setState({username})} autoCapitalize="none" placeholder='Gate No:' />
              </Item>

                <Item regular style={{height: 50, marginBottom: 16}} >
                  
                  <DatePicker
                    defaultDate={new Date(2018, 4, 4)}
                    minimumDate={new Date(1990, 1, 1)}
                    maximumDate={new Date(2030, 12, 31)}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    placeHolderText="Choose Date"
                    textStyle={{ color: "#220148", fontSize: 16 }}
                    onDateChange={this.setDate}
                  />

                </Item>

          <Item regular style={{marginBottom: 16}} >
                <Input onChangeText={password => this.setState({password})} autoCapitalize="none" placeholder='Pax Load:' />
              </Item>

          <Item regular style={{marginBottom: 16}} >
                <Input onChangeText={password => this.setState({password})} autoCapitalize="none" placeholder='STA/ETA/ATA:' />
              </Item>

              <Item regular style={{marginBottom: 16}} >
                <Input onChangeText={password => this.setState({password})} autoCapitalize="none" placeholder='VIP:' />
              </Item>

              <Item regular style={{marginBottom: 16}} >
                <Input onChangeText={password => this.setState({password})} autoCapitalize="none" placeholder='CIP:' />
              </Item>


              <Item regular style={{marginBottom: 16}} >
                <Input onChangeText={password => this.setState({password})} autoCapitalize="none" placeholder='UM:' />
              </Item>


              <Item regular style={{marginBottom: 16}} >
                <Input onChangeText={password => this.setState({password})} autoCapitalize="none" placeholder='WCHR:' />
              </Item>


              <Item regular style={{marginBottom: 16}} >
                <Input onChangeText={password => this.setState({password})} autoCapitalize="none" placeholder='MEDA:' />
              </Item>

              <Item regular style={{marginBottom: 16}} >
                <Input onChangeText={password => this.setState({password})} autoCapitalize="none" placeholder='STATE ETC:' />
              </Item>



        </View>
      </ScrollView>
    );
  }
}

export default Chatayarrivalfis;

import React, { Component } from "react";
import { View, Text, Image, AsyncStorage } from "react-native";
import { Button, Input, Item } from "native-base";
import email from 'react-native-email'
import styles from "./styles";

class Chatayarrivalclose extends Component {

    constructor(props) {
      super(props);
    
      this.state = {
        emailFlightSubject: "",
        staffOne: "",
        staffTwo: "",
        getFlightType: "",
        getFlightTypeII: "",
      }

    }
    
    componentDidMount = () => {
      AsyncStorage.getItem('staffOne').then((value) => this.setState({ 'staffOne': value }));
      AsyncStorage.getItem('staffTwo').then((value) => this.setState({ 'staffTwo': value }));
      AsyncStorage.getItem('getFlightType').then((getFlightType) => this.setState({ 'getFlightType': getFlightType }));
      AsyncStorage.getItem('getFlightTypeII').then((getFlightTypeII) => this.setState({ 'getFlightTypeII': getFlightTypeII }));
    } 

    handleEmail = () => {
        const to = ['angga@youtube.com'] // string or array of email addresses
        email(to, {
            subject: this.state.emailFlightSubject + ' CX' + this.state.getFlightType + '/' + this.state.getFlightTypeII,
            
            body: 

            'Flight Reports.\n\n' + 

            'CX' + this.state.getFlightType + ' Arrival\n\n' + 
            'Staff A1: ' + this.state.staffOne + 
            '\n Staff A2: ' + this.state.staffTwo + 



            '\n\n\n Thank you for reporting.'
        


        }).catch(console.error);
        AsyncStorage.setItem('staffOne', "");
        AsyncStorage.setItem('staffTwo', "");
    }

    

  render() {

    const { getParam } = this.props.navigation;
    
    return (
      <View>
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
            Cathay Pacific CX{getParam("data")} {"\n"} POST FLIGHT DOCUMENT
          </Text>

          <Item regular style={{marginBottom: 100}} >
                <Input onChangeText={emailFlightSubject => this.setState({emailFlightSubject})} autoCapitalize="none" placeholder='Enter Subject' />
              </Item>

          <Button 
          onPress={this.handleEmail}
              block
              light
              style={styles.buttoncta}>
              
              <Text style={styles.textbuttoncta}>
                CONFIRM CLOSE FLIGHT
              </Text>

          </Button>

        </View>
      </View>
    );
  }
}

export default Chatayarrivalclose;

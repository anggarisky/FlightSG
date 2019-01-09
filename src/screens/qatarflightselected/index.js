import React, {Component} from 'react';
import {View, Text, Image, ScrollView, AsyncStorage} from 'react-native';
import {Button, Input, Item} from 'native-base';
import styles from './styles';

class Qatarflightselected extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      qatarFlightType: "",
      qatarFlightTypeDua: "",
    }

  }

  componentDidMount = () => {
    AsyncStorage.setItem('qatarFlightType', this.state.qatarFlightType);
    AsyncStorage.setItem('qatarFlightTypeDua', this.state.qatarFlightTypeDua);
  }

  render() {
    const {getParam} = this.props.navigation;
    const {arrival, departure} = getParam('data');
    this.state.qatarFlightType = JSON.stringify(arrival);
    this.state.qatarFlightTypeDua = JSON.stringify(departure);


    let screenTarget;
    const screenA = (<Button
                onPress={() => this.props.navigation.navigate("Qatarflightclock")}
                style={{ backgroundColor: "none" }}
              >
                <Image
                  style={{ marginLeft: 10, height: 40, width: 40 }}
                  source={require("../../assets/icclock.png")}
                />
              </Button>);
    const screenB = (<Button
                onPress={() => this.props.navigation.navigate("Qatarflightclockdua")}
                style={{ backgroundColor: "none" }}
              >
                <Image
                  style={{ marginLeft: 10, height: 40, width: 40 }}
                  source={require("../../assets/icclock.png")}
                />
              </Button>);

    if(arrival == 942){
      screenTarget = screenA
    } else {
      screenTarget = screenB
    }

    return (
      <View>
        <Image style={{position: "absolute", zIndex: -1}} source={require("../../assets/bghomeqatar.png")} />
        <View style={styles.mainbody}>
          <Button
            onPress={() => this.props.navigation.navigate('Qatarflightselect')}
            style={{backgroundColor: 'none'}}>
            <Image
              style={{height: 50, width: 50}}
              source={require('../../assets/imgbtnback.png')}
            />
          </Button>
          <Image
            style={{
              marginTop: -40,
              marginBottom: 30,
              marginLeft: 110,
              height: 100,
              width: 100,
            }}
            source={require('../../assets/oryxbg.png')}
          />


          <View style={{marginBottom: 400}}>
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
                onPress={() => this.props.navigation.navigate("Qatarflightfis")}
                style={{ backgroundColor: "none" }}
              >
                <Image
                  style={{ height: 40, width: 30 }}
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
              <View>{screenTarget}</View>
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
                top: 220,
                right: 80
              }}
            >
              <Button
                onPress={() => this.props.navigation.navigate("Qatardelay")}
                style={{ backgroundColor: "none" }}
              >
                <Image
                  style={{ marginLeft: 5, height: 40, width: 40 }}
                  source={require("../../assets/icdelayreport.png")}
                />
              </Button>
              <Text
                style={{ textAlign: "center", color: "#000000", fontWeight: "bold", fontSize: 16 }}
              >
                DELAY {"\n"}REPORT
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
                onPress={() => this.props.navigation.navigate('Qatarcontact')}
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
                onPress={() => this.props.navigation.navigate('Qatarcloseflight')}
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
                right: 20
              }}
            >
              <Button
                onPress={() => this.props.navigation.navigate('Qatarflightcamera')}
                style={{ backgroundColor: "none" }}
              >
                <Image
                  style={{ marginLeft: 10, height: 40, width: 40 }}
                  source={require("../../assets/iccamera.png")}
                />
              </Button>
              <Text
                style={{
                  textAlign: "center",
                  color: "#000000",
                  fontWeight: "bold",
                  fontSize: 16
                }}
              >
                CAMERA
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
                style={{ marginLeft: 10, color: "#000000", fontWeight: "bold", fontSize: 10 }}
              >
                QR{arrival}/{'\n'}QR{departure}
              </Text>
            </View>
          </View>

          <Text style={{fontSize: 28, color:"#5C0632", textAlign: "center"}}>
            “Going Places Together”
          </Text>


        </View>
      </View>
    );
  }
}

export default Qatarflightselected;

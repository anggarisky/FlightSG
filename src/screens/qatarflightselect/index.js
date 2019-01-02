import React, {Component} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {Button, Input, Item} from 'native-base';
import styles from './styles';

class Qatarflightselect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: [
        {
          arrival: 942,
          departure: 943,
        },
        {
          arrival: 946,
          departure: 947,
        },
        {
          arrival: 944,
          departure: 945,
        },
      ],
    };
  }

  navigateTo = data => {
    this.props.navigation.navigate('', {
      data,
    });
  };

  render() {
    const {type} = this.state;
    return (
      <ScrollView style={{backgroundColor: "#541330"}}>
        <View style={styles.mainbody}>
          <Button
            onPress={() => this.props.navigation.navigate('Qatarlogin')}
            style={{backgroundColor: 'none'}}>
            <Image
              style={{height: 50, width: 50}}
              source={require('../../assets/imgbtnback.png')}
            />
          </Button>

          <Text style={styles.titlepage}>
            SELECT FLIGHT
          </Text>
          <Text style={styles.subtitlepage}>
            SINGAPORE STATION
          </Text>

          <Text style={{marginLeft: 110, color: "#E04742", fontSize: 32}}>
            TODAY
          </Text>

          <View style={{marginTop: -45}}>
            <Button
            onPress={() => this.props.navigation.navigate('')}
            style={{backgroundColor: 'none'}}>
            <Image
              style={{height: 70, width: 50}}
              source={require('../../assets/btnleftbg.png')}
            />
            <Text style={{marginLeft: -35, color: "#FFC400", fontSize: 26}}>
              -1
            </Text>
          </Button>
          </View>

          <View style={{marginTop: -45, position: "absolute", right: 14, top: 127}}>
            <Button
            onPress={() => this.props.navigation.navigate('')}
            style={{backgroundColor: 'none'}}>
            <Image
              style={{height: 70, width: 50}}
              source={require('../../assets/btnrightbg.png')}
            />
            <Text style={{marginLeft: -35, color: "#FFC400", fontSize: 26}}>
              +1
            </Text>
          </Button>
          </View>

          <View style={{marginTop: 50}}>
            {(type || []).map((v, key) => (
            <Button
              block
              light
              style={styles.buttoncta}
              key={key}
              onPress={() => this.navigateTo(v)}>
              <Text style={styles.textbuttoncta}>
                QR{v.arrival}/QR{v.departure}
              </Text>
            </Button>
          ))}
          </View>

        </View>
      </ScrollView>
    );
  }
}

export default Qatarflightselect;

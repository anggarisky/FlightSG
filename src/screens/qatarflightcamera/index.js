import React, {Component} from 'react';
import {View, Text, Image, ScrollView, AsyncStorage, Alert} from 'react-native';
import {Button, Input, Item} from 'native-base';
import styles from './styles';

class Qatarflightcamera extends Component {

  render() {
    return (
      <View>
      <Image
              style={{
                position: "absolute",
                zIndex: -10,
              }}
              source={require("../../assets/bgcamerapage.png")}
            />
        <View style={styles.mainbody}>
          <Button
            onPress={() => this.props.navigation.navigate('Qatarflightselected')}
            style={{backgroundColor: 'none'}}>
            <Image
              style={{height: 50, width: 50}}
              source={require('../../assets/imgbtnback.png')}
            />
          </Button>



          <View style={styles.buttonwrap}>
            <Button
              block
              light
              style={styles.buttoncta}>
              <Image
              style={{height: 50, width: 50}}
              source={require('../../assets/iccamerafis.png')}
            />
            </Button>
            <Button
              block
              light
              style={styles.buttoncta}>
              <Image
              style={{height: 50, width: 50}}
              source={require('../../assets/iccamerafis.png')}
            />
            </Button>
          </View>

          <View style={styles.buttonwrap}>
            <Button
              block
              light
              style={styles.buttoncta}>
              <Image
              style={{height: 50, width: 50}}
              source={require('../../assets/iccamerafis.png')}
            />
            </Button>
            <Button
              block
              light
              style={styles.buttoncta}>
              <Image
              style={{height: 50, width: 50}}
              source={require('../../assets/iccamerafis.png')}
            />
            </Button>
          </View>

          <View style={styles.buttonwrap}>
            <Button
              block
              light
              style={styles.buttoncta}>
              <Image
              style={{height: 50, width: 50}}
              source={require('../../assets/iccamerafis.png')}
            />
            </Button>
            <Button
              block
              light
              style={styles.buttoncta}>
              <Image
              style={{height: 50, width: 50}}
              source={require('../../assets/iccamerafis.png')}
            />
            </Button>
          </View>

        </View>
      </View>
    );
  }
}

export default Qatarflightcamera;

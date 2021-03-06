import React, {Component} from 'react';
import {View, Text, Image, ScrollView, AsyncStorage} from 'react-native';
import {Button, Input, Item} from 'native-base';
import styles from './styles';

class Chatayflightselected extends Component {

  navigateTo = (pages, data) => {
    this.props.navigation.navigate(pages, {
      data,
    });
  };

  constructor(props) {
    super(props);
  
    this.state = {
      getFlightType: "",
      getFlightTypeII: "",
    }

  }

  componentDidMount = () => {
    AsyncStorage.setItem('getFlightType', this.state.getFlightType);
    AsyncStorage.setItem('getFlightTypeII', this.state.getFlightTypeII);
  } 

  render() {
    const {getParam} = this.props.navigation;
    const {arrival, departure} = getParam('data');
    this.state.getFlightType = JSON.stringify(arrival);
    this.state.getFlightTypeII = JSON.stringify(departure);

    return (
      <View>
        <View style={styles.mainbody}>
          <Button
            onPress={() => this.props.navigation.navigate('Chatayflightselect')}
            style={{backgroundColor: 'none'}}>
            <Image
              style={{height: 50, width: 50}}
              source={require('../../assets/imgbtnback.png')}
            />
          </Button>
          <Image
            style={{
              marginTop: 30,
              marginBottom: 30,
              marginLeft: 30,
              height: 100,
              width: 260,
            }}
            source={require('../../assets/chataylogo.png')}
          />
          <Text
            style={{
              marginBottom: 40,
              lineHeight: 30,
              marginLeft: 70,
              width: 180,
              color: '#707070',
              fontWeight: 'bold',
              fontSize: 22,
              textAlign: 'center',
            }}>
            Cathay Pacific CX{arrival}/{departure}{' '}
          </Text>

          <Button
            onPress={() => this.navigateTo('Chatayflighthomes', arrival)}
            block
            light
            style={styles.buttoncta}>
            <Text style={styles.textbuttoncta}>CX{arrival} ARRIVAL</Text>
          </Button>

          <Button
            onPress={() => this.navigateTo('Chatayflighthomesdept', departure)}
            block
            light
            style={styles.buttoncta}>
            <Text style={styles.textbuttoncta}>CX{departure} DEPARTURE</Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default Chatayflightselected;

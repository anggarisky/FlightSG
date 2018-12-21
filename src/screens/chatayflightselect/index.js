import React, {Component} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {Button, Input, Item} from 'native-base';
import styles from './styles';

class Chatayflightselect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: [
        {
          arrival: 715,
          departure: 714,
        },
        {
          arrival: 659,
          departure: 650,
        },
        {
          arrival: 657,
          departure: 658,
        },
        {
          arrival: 735,
          departure: 710,
        },
        {
          arrival: 739,
          departure: 734,
        },
        {
          arrival: 619,
          departure: 716,
        },
        {
          arrival: 635,
          departure: 636,
        },
      ],
    };
  }

  navigateTo = data => {
    this.props.navigation.navigate('Chatayflightselected', {
      data,
    });
  };

  render() {
    const {type} = this.state;
    return (
      <ScrollView>
        <View style={styles.mainbody}>
          <Button
            onPress={() => this.props.navigation.navigate('Chataylogin')}
            style={{backgroundColor: 'none'}}>
            <Image
              style={{height: 50, width: 50}}
              source={require('../../assets/imgbtnback.png')}
            />
          </Button>
          <Image
            style={{
              top: 30,
              zIndex: -20,
              position: 'absolute',
              height: 270,
              width: '100%',
            }}
            source={require('../../assets/chatayflightselectbg.png')}
          />
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
              marginBottom: 80,
              lineHeight: 30,
              marginLeft: 70,
              width: 180,
              color: '#707070',
              fontWeight: 'bold',
              fontSize: 22,
              textAlign: 'center',
            }}>
            Cathay Pacific Flight Document{' '}
          </Text>

          {(type || []).map((v, key) => (
            <Button
              block
              light
              style={styles.buttoncta}
              key={key}
              onPress={() => this.navigateTo(v)}>
              <Text style={styles.textbuttoncta}>
                CX{v.arrival}/{v.departure}
              </Text>
            </Button>
          ))}
        </View>
      </ScrollView>
    );
  }
}

export default Chatayflightselect;

// Imports
import { Button, Card, Toolbar, Divider } from 'react-native-material-design';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
var ButtonModal  = require('react-native-button');
var Modal   = require('react-native-modalbox');
var Slider  = require('react-native-slider');
var window  = require('Dimensions').get('window');


export default class Flicky extends Component {

  constructor(props) {
    super(props);
    this.openModal3 = this.openModal3.bind(this);

    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: false,
      sliderValueUp: 0.3,
      sliderValueDown: 0.3,
      sliderValueForward: 0.3,
      sliderValueBackward: 0.3,
      sliderValueLeft: 0.3,
      sliderValueRight: 0.3,
      appUp: 'upper',
      appDown: 'downer',
      appForward: "forwarder",
      appBackward: "backwarder",
      appLeft: "lefter",
      appRight: "Righter"
    };
  }

  openModal3(id) {
    this.refs.modal3.open();
  }

  toggleDisable() {
    this.setState({isDisabled: !this.state.isDisabled});
  }

  toggleSwipeToClose() {
    this.setState({swipeToClose: !this.state.swipeToClose});
  }

  onClose() {
    console.log('Modal just closed');
  }

  onOpen() {
    console.log('Modal just openned');
  }

  onClosingState(state) {
    console.log('the open/close of the swipeToClose just changed');
  }

  renderList() {
    var list = [];

    for (var i=0;i<50;i++) {
      list.push(<Text style={styles.text} key={i}>Elem {i}</Text>);
    }

    return list;
  }

  render() {
    return (
      <View style={styles.container}>
        <Toolbar
          leftElement="arrow-back"
          centerElement="Title"
          rightElement={<Text>You can put here whatever you want</Text>}
        />
        <Button text="Sensitivity" style={styles.buttons} value="Sensitivity" onPress={this.openModal3} />
        <Divider />
        <Button text="Direction Customization" style={styles.buttons} value="Direction Customization" onPress={()=> console.log("I pressed a flat button")} />

        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', backgroundColor: 'green', paddingBottom: 20}}><Text style={{textAlign: 'center', backgroundColor: 'yellow'}}>Up</Text></View>
        <View style={{flex: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 20, backgroundColor: 'orange'}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{backgroundColor:'red'}}>Left</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{paddingBottom: 20}}>
              <Text style={{backgroundColor:'red'}}>Forward</Text>
            </View>
            <View style={{paddingTop: 20}}>
              <Text style={{backgroundColor:'red'}}>Backward</Text>
            </View>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{backgroundColor:'red'}}>Right</Text>
          </View>
        </View>
        <View style={{flex: 2, justifyContent: 'flex-start', alignItems: 'center', height: 20, backgroundColor: 'pink', paddingTop: 20}}><Text style={{backgroundColor: 'purple'}}>Down</Text></View>


         <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} isDisabled={this.state.isDisabled}>
            <Text style={styles.text}>Up</Text>
            <Slider trackStyle={{marginTop: -4, backgroundColor: '#71ccff'}} thumbStyle={{backgroundColor: '#3d3d3d'}} minimumTrackTintColor='#1073ff' style={{width: 230}} value={this.state.sliderValueUp} onValueChange={(value) => this.setState({sliderValueUp: value})} />

            <Text style={styles.text}>Down</Text>
            <Slider trackStyle={{marginTop: -4, backgroundColor: '#71ccff'}} thumbStyle={{backgroundColor: '#3d3d3d'}} minimumTrackTintColor='#1073ff' style={{width: 230}} value={this.state.sliderValueDown} onValueChange={(value) => this.setState({sliderValueDown: value})} />

            <Text style={styles.text}>Forward</Text>
            <Slider trackStyle={{marginTop: -4, backgroundColor: '#71ccff'}} thumbStyle={{backgroundColor: '#3d3d3d'}} minimumTrackTintColor='#1073ff' style={{width: 230}} value={this.state.sliderValueForward} onValueChange={(value) => this.setState({sliderValueForward: value})} />

            <Text style={styles.text}>Backward</Text>
            <Slider trackStyle={{marginTop: -4, backgroundColor: '#71ccff'}} thumbStyle={{backgroundColor: '#3d3d3d'}} minimumTrackTintColor='#1073ff' style={{width: 230}} value={this.state.sliderValueBackward} onValueChange={(value) => this.setState({sliderValueBackward: value})} />

            <Text style={styles.text}>Left</Text>
            <Slider trackStyle={{marginTop: -4, backgroundColor: '#71ccff'}} thumbStyle={{backgroundColor: '#3d3d3d'}} minimumTrackTintColor='#1073ff' style={{width: 230}} value={this.state.sliderValueLeft} onValueChange={(value) => this.setState({sliderValueLeft: value})} />

            <Text style={styles.text}>Right</Text>
            <Slider trackStyle={{marginTop: -4, backgroundColor: '#71ccff'}} thumbStyle={{backgroundColor: '#3d3d3d'}} minimumTrackTintColor='#1073ff' style={{width: 230}} value={this.state.sliderValueRight} onValueChange={(value) => this.setState({sliderValueRight: value})} />
            <Button text="Disable" onPress={this.toggleDisable} style={styles.btn}>Disable ({this.state.isDisabled ? "true" : "false"})</Button>
          </Modal>
      </View>
    );
  }
};

var styles = StyleSheet.create({

  wrapper: {
    paddingTop: 50,
    flex: 1
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal3: {
    height: 450,
    width: 300,
    paddingTop: 50
  },
  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },
  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },
  text: {
    color: "black",
    fontSize: 22
  },
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
  },
  buttons: {
    flex: 1,
    alignItems: 'center'
  }
});


AppRegistry.registerComponent('Flicky', () => Flicky);

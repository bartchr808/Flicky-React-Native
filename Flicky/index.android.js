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


var Flicky = React.createClass({

  getInitialState: function() {
    return {
      isOpen: false,
      isDisabled: false,
      swipeToClose: false,
      sliderValueX1: 0.3,
      sliderValueX2: 0.3,
      sliderValueY1: 0.3,
      sliderValueY2: 0.3,
      sliderValueZ1: 0.3,
      sliderValueZ2: 0.3,
    };
  },

  openModal3: function(id) {
    this.refs.modal3.open();
  },

  toggleDisable: function() {
    this.setState({isDisabled: !this.state.isDisabled});
  },

  toggleSwipeToClose: function() {
    this.setState({swipeToClose: !this.state.swipeToClose});
  },

  onClose: function() {
    console.log('Modal just closed');
  },

  onOpen: function() {
    console.log('Modal just openned');
  },

  onClosingState: function(state) {
    console.log('the open/close of the swipeToClose just changed');
  },

  renderList() {
    var list = [];

    for (var i=0;i<50;i++) {
      list.push(<Text style={styles.text} key={i}>Elem {i}</Text>);
    }

    return list;
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Toolbar
          leftElement="arrow-back"
          centerElement="Title"
          rightElement={<Text>You can put here whatever you want</Text>}
        />
         <Button style={styles.buttons} value="Sensitivity" onPress={this.openModal3} />
          <Divider />
         <Button style={styles.buttons} value="Direction Customization" onPress={()=> console.log("I pressed a flat button")} />


         <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} isDisabled={this.state.isDisabled}>
            <Text style={styles.text}>X1</Text>
            <Slider trackStyle={{marginTop: -4, backgroundColor: '#71ccff'}} thumbStyle={{backgroundColor: '#3d3d3d'}} minimumTrackTintColor='#1073ff' style={{width: 230}} value={this.state.sliderValueX1} onValueChange={(value) => this.setState({sliderValueX1: value})} />

            <Text style={styles.text}>X2</Text>
            <Slider trackStyle={{marginTop: -4, backgroundColor: '#71ccff'}} thumbStyle={{backgroundColor: '#3d3d3d'}} minimumTrackTintColor='#1073ff' style={{width: 230}} value={this.state.sliderValueX2} onValueChange={(value) => this.setState({sliderValueX2: value})} />

            <Text style={styles.text}>Y1</Text>
            <Slider trackStyle={{marginTop: -4, backgroundColor: '#71ccff'}} thumbStyle={{backgroundColor: '#3d3d3d'}} minimumTrackTintColor='#1073ff' style={{width: 230}} value={this.state.sliderValueY1} onValueChange={(value) => this.setState({sliderValueY1: value})} />

            <Text style={styles.text}>Y2</Text>
            <Slider trackStyle={{marginTop: -4, backgroundColor: '#71ccff'}} thumbStyle={{backgroundColor: '#3d3d3d'}} minimumTrackTintColor='#1073ff' style={{width: 230}} value={this.state.sliderValueY2} onValueChange={(value) => this.setState({sliderValueY2: value})} />

            <Text style={styles.text}>Z1</Text>
            <Slider trackStyle={{marginTop: -4, backgroundColor: '#71ccff'}} thumbStyle={{backgroundColor: '#3d3d3d'}} minimumTrackTintColor='#1073ff' style={{width: 230}} value={this.state.sliderValueZ1} onValueChange={(value) => this.setState({sliderValueZ1: value})} />

            <Text style={styles.text}>Z2</Text>
            <Slider trackStyle={{marginTop: -4, backgroundColor: '#71ccff'}} thumbStyle={{backgroundColor: '#3d3d3d'}} minimumTrackTintColor='#1073ff' style={{width: 230}} value={this.state.sliderValueZ2} onValueChange={(value) => this.setState({sliderValueZ2: value})} />
            <Button onPress={this.toggleDisable} style={styles.btn}>Disable ({this.state.isDisabled ? "true" : "false"})</Button>
          </Modal>
      </View>
    );
  }
});

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

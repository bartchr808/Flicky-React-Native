// Imports
import { Button, Toolbar, Divider, Subheader } from 'react-native-material-design';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, NativeModules, Text, View, AsyncStorage } from 'react-native';
import Storage from 'react-native-storage';

const AppList = NativeModules.MyAppList;

// const ButtonModal = require('react-native-button');
const Modal = require('react-native-modalbox');
const Slider = require('react-native-slider');
// const window = require('Dimensions').get('window');

const styles = StyleSheet.create({

  wrapper: {
    paddingTop: 50,
    flex: 1,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal3: {
    height: 450,
    width: 300,
    paddingTop: 50,
  },
  btn: {
    margin: 10,
    backgroundColor: '#3B5998',
    color: 'white',
    padding: 10,
  },
  btnModal: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: 'transparent',
  },
  text: {
    color: 'black',
    fontSize: 22,
  },
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
  },
  buttons: {
    flex: 1,
    alignItems: 'center',
  },
});


export default class Flicky extends Component {

  static createSlider(val, callback) {
    return (<Slider
      trackStyle={{ marginTop: -4,
      backgroundColor: '#71ccff' }}
            thumbStyle={{ backgroundColor: '#3d3d3d' }}
            minimumTrackTintColor="#1073ff"
            style={{ width: 230 }}
            value={val}
            onValueChange={callback} />);
  }

  constructor(props) {
    super(props);
    this.openModal3 = this.openModal3.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    this.onSliderValueUpChange = this.onSliderValueUpChange.bind(this);
    this.onSliderValueDownChange = this.onSliderValueDownChange.bind(this);
    this.onSliderValueLeftChange = this.onSliderValueLeftChange.bind(this);
    this.onSliderValueRightChange = this.onSliderValueRightChange.bind(this);
    this.onSliderValueForwardChange =
    this.onSliderValueForwardChange.bind(this);
    this.onSliderValueBackwardChange =
    this.onSliderValueBackwardChange.bind(this);
    this.printlog = this.printlog.bind(this);

    this.storage = new Storage({
      size: 1000,
      storageBackend: AsyncStorage,
      defaultExpires: null,
      enableCache: true,
      // if data was not found in storage or expired,
      // the corresponding sync method will be invoked and return
      // the latest data.
      sync: {
        // we'll talk about the details later.
      },
    });

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
      appForward: 'forwarder',
      appBackward: 'backwarder',
      appLeft: 'lefter',
      appRight: 'righter'
    };
  }

  componentWillMount() {
    try {
      this.storage.load({
        key: 'customData',
        id: '1'
      }).then((ret) => {
      this.setState({
        sliderValueUp: ret.sliderData.sliderValueUp,
        sliderValueDown: ret.sliderData.sliderValueDown,
        sliderValueLeft: ret.sliderData.sliderValueLeft,
        sliderValueRight: ret.sliderData.sliderValueRight,
        sliderValueBackward: ret.sliderData.sliderValueBackward,
        sliderValueForward: ret.sliderData.sliderValueForward,
        appUp: ret.appChoiceData.appUp,
        appDown: ret.appChoiceData.appDown,
        appLeft: ret.appChoiceData.appLeft,
        appRight: ret.appChoiceData.appRight,
        appForward: ret.appChoiceData.appForward,
        appBackward: ret.appChoiceData.appBackward
      });
      });
    } catch (err) {
      // console.log(err);
    }
  }

  componentWillUpdate(newProps, newState) {
    const customData = {
      sliderData: {
        sliderValueUp: newState.sliderValueUp,
        sliderValueDown: newState.sliderValueDown,
        sliderValueForward: newState.sliderValueForward,
        sliderValueBackward: newState.sliderValueBackward,
        sliderValueLeft: newState.sliderValueLeft,
        sliderValueRight: newState.sliderValueRight
      },
      appChoiceData: {
        appUp: newState.appUp,
        appDown: newState.appDown,
        appForward: newState.appForward,
        appBackward: newState.appBackward,
        appLeft: newState.appLeft,
        appRight: newState.appRight
      }
    };

    this.storage.save({
      key: 'customData',
      id: '1',
      rawData: customData,
      expires: null,
    });
  }

  onSliderValueUpChange(value) {
    this.setState({ sliderValueUp: value });
  }

  onSliderValueDownChange(value) {
    this.setState({ sliderValueDown: value });
  }

  onSliderValueLeftChange(value) {
    this.setState({ sliderValueLeft: value });
  }

  onSliderValueRightChange(value) {
    this.setState({ sliderValueRight: value });
  }

  onSliderValueForwardChange(value) {
    this.setState({ sliderValueForward: value });
  }

  onSliderValueBackwardChange(value) {
    this.setState({ sliderValueBackward: value });
  }

  openModal3() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  toggleDisable() {
    this.setState({ isDisabled: !this.state.isDisabled });
  }

  toggleSwipeToClose() {
    this.setState({ swipeToClose: !this.state.swipeToClose });
  }

  printlog() {
    //console.log(AppList.play());
    AppList.isEqual(
      5,
      10,
      (status) => {
        console.log('Result ',status);
      }
    );
    console.log('??');
  }


  render() {
    return (
      <View style={styles.container}>
        <Toolbar leftElement="arrow-back"
                 centerElement="Title"
                 rightElement={<Text>
                                 You can put here whatever you want
                               </Text>}>
          <Text style={{ flex: 1,
            textAlign: 'center',
            fontSize: 25,
            color: 'white' }}>
            Flicky
          </Text>
        </Toolbar>
        <Button text="Sensitivity"
                style={styles.buttons}
                value="Sensitivity"
                onPress={this.openModal3} />
        <Divider />
        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
          <Subheader text="Direction Customization" />
        </View>
        <View style={{ flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-end',
          paddingBottom: 20 }}>
          <Button text="Up"
                  style={styles.buttons}
                  value="Up" />
        </View>
        <View style={{ flex: 2,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: 20 }}>
          <View style={{ flex: 1,
            justifyContent: 'center',
            alignItems: 'center' }}>
            <Button text="Left"
                    style={styles.buttons}
                    value="Left" />
          </View>
          <View style={{ flex: 1,
            justifyContent: 'center',
            alignItems: 'center' }}>
            <View style={{ paddingBottom: 20 }}>
              <Button text="Forward"
                      style={styles.buttons}
                      value="Forward"
                      onPress={this.printlog} />
            </View>
            <View style={{ paddingTop: 20 }}>
              <Button text="Backward"
                      style={styles.buttons}
                      value="Backward" />
            </View>
          </View>
          <View style={{ flex: 1,
            justifyContent: 'center',
            alignItems: 'center' }}>
            <Button text="Right"
                    style={styles.buttons}
                    value="Right" />
          </View>
        </View>
        <View style={{ flex: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: 20,
          paddingTop: 20, }}>
          <Button text="Down"
                  style={styles.buttons}
                  value="Down" />
        </View>
        <Modal style={[styles.modal, styles.modal3]}
               position={'center'}
               isOpen={this.state.isOpen}
               onClosed={this.openModal3}>
          <Text style={styles.text}>
            Up
          </Text>
            {Flicky.createSlider(this.state.sliderValueUp,
              this.onSliderValueUpChange)}
          <Text style={styles.text}>
            Down
          </Text>
          {Flicky.createSlider(this.state.sliderValueDown,
            this.onSliderValueDownChange)}
          <Text style={styles.text}>
            Forward
          </Text>
          {Flicky.createSlider(this.state.sliderValueForward,
            this.onSliderValueForwardChange)}
          <Text style={styles.text}>
            Backward
          </Text>
          {Flicky.createSlider(this.state.sliderValueBackward,
            this.onSliderValueBackwardChange)}
          <Text style={styles.text}>
            Left
          </Text>
          {Flicky.createSlider(this.state.sliderValueLeft,
            this.onSliderValueLeftChange)}
          <Text style={styles.text}>
            Right
          </Text>
          {Flicky.createSlider(this.state.sliderValueRight,
            this.onSliderValueRightChange)}
          <Button text="Disable"
                  onPress={this.toggleDisable}
                  style={styles.btn}>
            Disable (
            {this.state.isDisabled ? 'true' : 'false'})
          </Button>
        </Modal>
      </View>
      );
  }
}


AppRegistry.registerComponent('Flicky', () => Flicky);

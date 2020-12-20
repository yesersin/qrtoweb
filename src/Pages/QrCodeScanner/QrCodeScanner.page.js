
'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import Ionicons from "react-native-vector-icons/Ionicons"
import Foundation from "react-native-vector-icons/Foundation"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import { QrCodeScannerStyle } from '../../Styles/QrCodeScanner/QrCodeScaner.style';
import { Colors } from '../../Utils/Colors';

export default class QrCodeScanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightControl: false,
      cameraType: true,
      reactivate: false,
      refresh: false,
      warning: false
    };
  }
  onSuccess = response => {
    let url = "http://"

    let urlvalue = response.data.indexOf(url);

    if (urlvalue == -1) {
      let url2 = "https://"
      let urlvalue2 = response.data.indexOf(url2);
      if (urlvalue2 == -1) {

        this.setState({ warning: true, refresh: true })
      }
      else {

        this.props.navigation.navigate("QrCodeShow", { url: response.data })

        setTimeout(() => {
          this.scanner.reactivate()
        }, 1000);
      }
    }
    else {

      this.props.navigation.navigate("QrCodeShow", { url: response.data })

      setTimeout(() => {
        this.scanner.reactivate()
      }, 1000);
    }
  };

  render() {
    return (
      <QRCodeScanner
        cameraType={this.state.cameraType ? "back" : "front"}
        ref={(node) => { this.scanner = node }}
        topViewStyle={QrCodeScannerStyle.topViewStyle}
        bottomViewStyle={QrCodeScannerStyle.bottomViewStyle}
        showMarker
        fadeInß
        onRead={this.onSuccess}
        flashMode={this.state.lightControl ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
        topContent={
          <View style={QrCodeScannerStyle.topContentContainer}>
            <TouchableOpacity
              onPress={() => this.setState({ cameraType: !this.state.cameraType })}
            >
              <Ionicons name={"ios-camera-reverse-sharp"} size={40} color={this.state.cameraType ? Colors.WHITE:Colors.BLUE} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({ lightControl: !this.state.lightControl })}
            >
              <Foundation name={"lightbulb"} size={40} color={this.state.lightControl ? Colors.YELLOW: Colors.WHITE} />
            </TouchableOpacity>
          </View>
        }
        bottomContent={

          <View style={QrCodeScannerStyle.bottomContentContainer}>
            {this.state.refresh ?
              <TouchableOpacity style={QrCodeScannerStyle.refreshButton}
                onPress={() => { this.scanner.reactivate(); this.setState({ refresh: false, warning: false }) }}
              >
                <SimpleLineIcons name={"refresh"} size={50} color={Colors.WHITE } />
              </TouchableOpacity> : null}
            {
              this.state.warning ? (
                <View style={QrCodeScannerStyle.warningContainer}>
                  <Foundation name={"info"} size={25} color={Colors.YELLOW } />
                  <Text style={QrCodeScannerStyle.warningText}>Qrcode Web Sitesi Adresi İçermiyor !</Text>

                </View>
              ) : null
            }
          </View>
        }
      />
    );
  }
}




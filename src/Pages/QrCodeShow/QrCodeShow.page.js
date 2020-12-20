import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import { QrCodeScannerShowStyle } from '../../Styles/QrCodeShow/QrCodeShow.style';

import { Colors } from '../../Utils/Colors';
export default class QrCodeShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {url}=this.props.route.params
    return (
    <View style={QrCodeScannerShowStyle.webViewContainer}>
      <StatusBar barStyle="dark-content" />
        <WebView source={{ uri: url }} 
        allowsBackForwardNavigationGestures
        autoManageStatusBarEnabled={true}
      startInLoadingState={true}
      onLoadProgress={({ nativeEvent }) => {
        this.loadingProgress = nativeEvent.progress;
      }}
      
      renderError={(errorName) => {
        <Text>Url Bulunamadı !</Text>
       }}
      />
    </View>
    );
  }
}

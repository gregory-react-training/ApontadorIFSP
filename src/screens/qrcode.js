import React, { Component } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import colors from './styles/colors'

class QRCode extends Component {

  onSuccess = (e) => {
    alert(e.data);
  };

  static navigationOptions = {
    title: "QRCode",
    headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.titleFontColor,
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
      },
}

render(){
  return(
      <QRCodeScanner onRead={(e) => this.onSuccess(e)} />
  );
  }
}

export default QRCode;
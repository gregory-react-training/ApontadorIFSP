import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';

onSuccess = (e) => {
  alert(e.data);
};

const QRCode = () => (
  <QRCodeScanner 
    onRead={(e) => this.onSuccess(e)} />
);

QRCode.navigationOptions = {
  title: "QRCode"
};

export default QRCode;
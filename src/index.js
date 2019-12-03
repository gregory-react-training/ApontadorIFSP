import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import ScreenHome from './screens/home';
import ScreenAtividades from './screens/atividades';
import ScreenQRCode from './screens/qrcode';

const stackNavigator = createStackNavigator(
  {
    Home: ScreenHome,
    Atividades: ScreenAtividades,
    QRCode: ScreenQRCode,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(stackNavigator);

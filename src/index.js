import Page1 from './Page1';
import Page2 from './Page2';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    Login: Page1,
    Eventos: Page2,
  })
);

export default Routes;
import { AppRegistry } from 'react-native';
import princ from './src/Index';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => princ);

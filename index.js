/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

LogBox.ignoreLogs(['AsyncStorage has been extracted'])
AppRegistry.registerComponent(appName, () => App);

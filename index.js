import { AppRegistry, LogBox } from 'react-native';

import 'react-native-gesture-handler';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';

import App from '@/App';
import { name as reportal } from './app.json';

/* Remove wrong react-native-gesture-handler warning log */
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

/* Set locale for TimeAgo lib */
TimeAgo.addDefaultLocale(en);

AppRegistry.registerComponent(reportal, () => App);

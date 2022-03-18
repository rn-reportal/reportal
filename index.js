import { AppRegistry } from 'react-native';

import 'react-native-gesture-handler';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';

import App from '@/App';
import { name as reportal } from './app.json';

/* Set locale for TimeAgo lib */
TimeAgo.addDefaultLocale(en);

AppRegistry.registerComponent(reportal, () => App);

import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.2.190' }) // controls connection & communication settings
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga()) // add all built-in react native plugins
    .connect(); // let's connect!

  tron.clear();
  console.tron = tron;
}

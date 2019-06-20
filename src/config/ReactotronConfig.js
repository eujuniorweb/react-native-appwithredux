import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.2.190' }) // controls connection & communication settings
    .useReactNative()
    .use(reactotronRedux()) // add all built-in react native plugins
    .connect(); // let's connect!

  tron.clear();
  console.tron = tron;
}

import Config from 'react-native-config';
import _NetworkManager from './network-services/network-manager';

const NetworkManager = new _NetworkManager(Config.BASEURL, fetch);

export {NetworkManager};

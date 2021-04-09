import React from 'react'
import { View } from 'react-native';
import { utils, ScaledText, ImgIcon, Gap } from 'urip-rn-kit';
import Icons from '../assets/icons';
import NavigationUtil from '../utils/NavigationUtil';
import AppStore from '../store/index';

const BootScreen = ({ navigation }) => {
  React.useEffect(() => {
    initializeDB().then(() => {
      setTimeout(() => {
        NavigationUtil.reset('Home', navigation)
      }, 1000)
    })
  }, []);

  const initializeDB = async () => {
    await AppStore.init();
  }

  return <View
    style={{
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
    }}>
    <View
      style={{
        width: utils.sizeMatters.scale(55),
        height: utils.sizeMatters.scale(55),
        backgroundColor: '#4285F3',
        borderRadius: utils.sizeMatters.scale(20),
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <ImgIcon source={Icons.checkNoRound} size={35} tintColor="#FFF" />
    </View>
    <Gap vertical size={15} />
    <ScaledText color={'#333333'} size={20}>Welcome to</ScaledText>
    <ScaledText color={'#333333'} size={25} bold>My Todo</ScaledText>
  </View>
}

export default BootScreen;
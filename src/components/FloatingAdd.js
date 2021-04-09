import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ScaledText, utils, ImgIcon } from 'urip-rn-kit';
import Icons from '../assets/icons'

const FloatingAdd = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        position: 'absolute',
        bottom: utils.sizeMatters.scale(40),
        right: utils.sizeMatters.scale(10),
        backgroundColor: '#4285F3',
        width: utils.sizeMatters.scale(55),
        height: utils.sizeMatters.scale(55),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: utils.sizeMatters.scale(20)
      }}
    >
      <ImgIcon source={Icons.plus} size={15} tintColor={"#FFF"} />
    </TouchableOpacity>
  )
}

export default FloatingAdd;
import moment from 'moment';
import React from 'react'
import { FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { Col, Gap, ImgIcon, Padder, Row, ScaledText, utils } from 'urip-rn-kit'
import Icons from '../assets/icons/index';


const Header = ({ rightImgIcon, leftImgIcon, onRightPress, onLeftPress, title }) => {
  return (
    <Row height={45}>
      <Gap />
      <Col justifyCenter alignStart onPress={onLeftPress}>
        {leftImgIcon && <ImgIcon source={leftImgIcon} tintColor={'grey'} />}
      </Col>
      <Col size={3} justifyCenter alignCenter>
        <ScaledText size={21} color={'#333333'} bold>{title}</ScaledText>
      </Col>
      <Col justifyCenter alignEnd onPress={onRightPress}>
        {rightImgIcon && <ImgIcon source={rightImgIcon} tintColor={'grey'} />}
      </Col>
      <Gap />
    </Row>
  )
}

export default Header;
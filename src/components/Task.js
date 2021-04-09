import moment from 'moment';
import React from 'react'
import { View } from 'react-native'
import { Col, Gap, ImgIcon, Padder, Row, ScaledText, utils } from 'urip-rn-kit'
import Icons from '../assets/icons/index';

const Task = ({ data, onPress }) => {
  const isDone = data.done;
  return (<Padder horizontal={10} bottom={5}>
    <Row onPress={onPress} color={isDone ? "#CEE5D2" : "white"} style={{ borderRadius: 10 }}>
      <Col>
        <Padder all={10}>
          <ImgIcon size={18} source={Icons.check} tintColor={isDone ? '#33A853' : '#D5D5D5'} />
        </Padder>
      </Col>

      <Col size={6}>
        <Padder all>
          <Col>
            <Gap size={2} vertical />
            <ScaledText size={15} color={'#333333'}>{data.text}</ScaledText>
            <Gap size={7} vertical />
            <Row>
              {(data.tags || []).map((tag, i) => {
                return (
                  <View
                    key={i}
                    style={{
                      backgroundColor: 'grey',
                      marginRight: utils.sizeMatters.scale(4),
                      paddingVertical: utils.sizeMatters.scale(1.5),
                      paddingHorizontal: utils.sizeMatters.scale(6),
                      borderRadius: utils.sizeMatters.scale(13),
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                    <ScaledText color={'white'} size={12} >
                      {tag}
                    </ScaledText>
                  </View>

                )
              })}
            </Row>
          </Col>
        </Padder>

      </Col>
      <Col size={4} alignEnd>
        <Padder all={10} top={15}>
          <ScaledText size={9} color={'grey'}>{moment(data.createdAt).format('DD MMM YYYY')}</ScaledText>
          <ScaledText size={9} color={'grey'} style={{ textAlign: 'right' }}>{moment(data.createdAt).format('HH:mm')}</ScaledText>

        </Padder>
      </Col>
    </Row>
  </Padder>)
}

export default Task;
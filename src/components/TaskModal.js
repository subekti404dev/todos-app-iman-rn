import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { Box, Button, Col, Gap, Row, ScaledText, utils } from 'urip-rn-kit';

const TaskModal = ({ isVisible, onClose, data }) => {
  const onDone = async () => {
    onClose();
  }

  const onDelete = async () => {
    onClose();
  }

  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
    >
      <View
        style={{
          backgroundColor: '#FFF',
          padding: utils.sizeMatters.scale(10),
          borderRadius: utils.sizeMatters.scale(5)
        }}>
        <ScaledText>{data?.text}</ScaledText>
        <Gap vertical />
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Button
            onPress={onDelete}
            color="#F3523B"
            label="Delete"
            width={157}
          />
          <Gap />
          <Button
            onPress={onDone}
            label="Done"
            width={157}
            color={'#8CD77A'}
          />
        </View>
      </View>
    </Modal>
  )
}

export default TaskModal;
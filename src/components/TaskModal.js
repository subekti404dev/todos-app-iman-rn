import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { Button, Gap, Padder, ScaledText, utils } from 'urip-rn-kit';

const TaskModal = ({ isVisible, onClose, data }) => {

  const onUndone = async () => {
    onClose();
  }

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
        <Padder horizontal={5} vertical={3}>
          <ScaledText>{data?.text}</ScaledText>
        </Padder>
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
            onPress={data?.done ? onUndone : onDone}
            label={data?.done ? "Undone" : "Done"}
            width={157}
            color={data?.done ? "grey" : '#8CD77A'}
          />
        </View>
      </View>
    </Modal>
  )
}

export default TaskModal;
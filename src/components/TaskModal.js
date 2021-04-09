import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { Button, Gap, Padder, ScaledText, utils } from 'urip-rn-kit';
import AppStore from '../store';

const TaskModal = ({ isVisible, onClose, data }) => {

  const onDoneUndone = async () => {
    if (data) {
      await AppStore.todos.editItem(data._id, { done: !data.done, updatedAt: new Date() });
      AppStore.todos.uploadIfOnline();
    }
    onClose();
  }

  const onDelete = async () => {
    if (data) {
      await AppStore.todos.deleteItem(data._id);
      AppStore.todos.uploadIfOnline();
    }
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
            onPress={onDoneUndone}
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
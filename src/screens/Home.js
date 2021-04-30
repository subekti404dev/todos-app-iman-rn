import React from 'react'
import _ from 'lodash'
import { FlatList, SafeAreaView } from 'react-native'
import { Gap, Padder, ScaledText } from 'urip-rn-kit'
import TaskModal from '../components/TaskModal';
import Icons from '../assets/icons/index';
import FloatingAdd from '../components/FloatingAdd';
import Header from '../components/Header';
import Task from '../components/Task';
import AppStore from '../store/index';

const HomeScreen = ({ navigation }) => {

  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedTask, setSelectedTask] = React.useState(null);
  const [list, setList] = React.useState([]);
  const [unuploadeds, setUnuploadeds] = React.useState(0);

  let unsubTodos;

  React.useEffect(() => {
    updateData();
    unsubTodos = AppStore.todos.subscribe(() => {
      updateData();
      return () => {
        unsubTodos();
      }
    });
  }, [])

  const updateData = async () => {
    const data = _.get(AppStore, 'todos.data', []);
    setUnuploadeds(AppStore.todos.countUnuploadeds());

    const dones = _.sortBy(data.filter(x => x.done), 'createdAt').reverse()
    const undones = _.sortBy(data.filter(x => !x.done), 'createdAt').reverse()
    console.log({ dones, undones });
    setList([...undones, ...dones]);
  }

  return (
    <SafeAreaView style={{ backgroundColor: '#F3F3F3', height: '100%' }}>
      <Header
        title="My Todo"
        rightImgIcon={Icons.sync}
        onRightPress={async () => {
          try {
            await AppStore.todos.uploadIfOnline();
          } catch (error) {
            console.log(error);
          }
        }}
      />
      <Gap vertical />
      {unuploadeds > 0 &&
        <Padder horizontal bottom>
          <ScaledText color={'#3D3D3D'} italic>{`${unuploadeds} unuploaded changes`}</ScaledText>
        </Padder>}
      <FlatList
        data={list}
        keyExtractor={(v, i) => `item_${i}`}
        renderItem={({ item, index }) => {
          return (
            <Task
              key={index}
              data={item}
              onPress={() => {
                setSelectedTask(item);
                setModalVisible(true);
              }} />
          )
        }}
      />
      <TaskModal
        isVisible={modalVisible}
        onClose={() => {
          setModalVisible(false);
          setSelectedTask(null);
        }}
        data={selectedTask}
      />
      <FloatingAdd onPress={() => navigation.navigate('Add')} />
    </SafeAreaView>
  )
}

// const ListTitle = ({ title, count }) => {
//   return (
//     <Padder horizontal bottom >
//       <View style={{ flexDirection: 'row' }}>
//         <ScaledText>{title}</ScaledText>
//         <Gap size={3} />
//         <ScaledText bold>{`(${count})`}</ScaledText>
//       </View>
//     </Padder>
//   )
// }



export default HomeScreen;

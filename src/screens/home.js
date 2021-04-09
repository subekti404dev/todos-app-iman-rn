import React from 'react'
import { FlatList, SafeAreaView } from 'react-native'
import { Gap } from 'urip-rn-kit'
import TaskModal from '../components/TaskModal';
import Icons from '../assets/icons/index';
import FloatingAdd from '../components/FloatingAdd';
import Header from '../components/Header';
import Task from '../components/Task';

const HomeScreen = ({ navigation }) => {
  const data = [
    {
      text: 'tes 123',
      tags: [
        'tes',
        'reaxt',
        'nodejs'
      ],
      createdAt: new Date(),
      done: true
    },
    {
      text: 'tes 123',
      tags: [
        'tes',
        'reaxt',
        'nodejs'
      ],
      createdAt: new Date(),
    },
    {
      text: 'tes 123',
      tags: [
        'tes',
        'reaxt',
        'nodejs'
      ],
      createdAt: new Date(),
    },
    {
      text: 'tes 123',
      tags: [
        'tes',
        'reaxt',
        'nodejs'
      ],
      createdAt: new Date(),
    },
    {
      text: 'tes 123 tes 123 tes 123 tes 123 tes 123 tes 123 tes 123 tes 123 tes 123 tes 123 tes 123 tes 123',
      tags: [
        'tes',
        'reaxt',
        'nodejs'
      ],
      createdAt: new Date(),
    },
    {
      text: 'tes 123',
      tags: [
        'tes',
        'reaxt',
        'nodejs'
      ],
      createdAt: new Date(),
    },
    {
      text: 'tes 123',
      tags: [
        'tes',
        'reaxt',
        'nodejs'
      ],
      createdAt: new Date(),
    },
    {
      text: 'tes 123',
      tags: [
        'tes',
        'reaxt',
        'nodejs'
      ],
      createdAt: new Date(),
    },
    {
      text: 'tes 123',
      tags: [
        'tes',
        'reaxt',
        'nodejs'
      ],
      createdAt: new Date(),
    }
  ];

  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedTask, setSelectedTask] = React.useState(null);
  const [doneList, setDoneList] = React.useState([]);
  const [undoneList, setUndoneList] = React.useState([]);

  React.useEffect(() => {
    updateData();
  }, [])

  const updateData = async () => {
    setDoneList(data.filter(x => x.done));
    setUndoneList(data.filter(x => !x.done));
  }
  return (
    <SafeAreaView style={{ backgroundColor: '#F3F3F3', height: '100%' }}>
      <Header
        title="My Todo"
        rightImgIcon={Icons.sync}
        onRightPress={() => { }}
      />
      <Gap vertical />

      <FlatList
        data={undoneList.concat(doneList)}
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
          setModalVisible(false)
          setSelectedTask(null)
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
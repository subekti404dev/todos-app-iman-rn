import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { Button, Col, Gap, ImgIcon, Input, Padder, Row, ScaledText, utils } from 'urip-rn-kit'
import Icons from '../assets/icons/index';
import Header from '../components/Header';
import AppStore from '../store';

const AddScreen = ({ navigation }) => {
  const [content, setContent] = React.useState('');
  const [tags, setTags] = React.useState('');

  const getTags = () => {
    return tags.split(',').map(x => x.trim()).filter(z => z);
  }

  const onReset = () => {
    setContent("");
    setTags("");
  }

  const onBack = () => {
    navigation.goBack()
  }

  const onAdd = async () => {
    const text = content;
    const tags = getTags();
    await AppStore.todos.addItem({
      text, 
      tags, 
      createdAt: new Date(), 
      updatedAt: new Date()
    });
    AppStore.todos.uploadIfOnline();
    onReset();
    onBack();
  }

  return (
    <SafeAreaView style={{ backgroundColor: '#F3F3F3', height: '100%' }}>
      <Header
        title="Add Todo"
        leftImgIcon={Icons.back}
        onLeftPress={onBack}
      />
      <Gap vertical />
      <Padder horizontal={20}>
        <Input
          value={content}
          placeholder={'Task Content'}
          onChangeText={content => setContent(content)}
        />
        <Gap vertical />
        <Input
          value={tags}
          placeholder={'Tags (Separate with comma)'}
          onChangeText={tags => setTags(tags)}
        />
        <Gap vertical />
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {getTags().map((tag, i) => <Tag key={i} data={tag} />)}
        </View>
        <Gap vertical />
        <Row>
          <Col />
          <Col>
            <Button
              disabled={!content}
              color={'#4285F3'}
              label="Add Task"
              onPress={onAdd}
            />
          </Col>
        </Row>

      </Padder>
    </SafeAreaView>
  )
}

const Tag = ({ data }) => {
  return <View
    style={{
      backgroundColor: 'grey',
      paddingVertical: utils.sizeMatters.scale(3),
      paddingHorizontal: utils.sizeMatters.scale(8),
      borderRadius: utils.sizeMatters.scale(15),
      marginRight: utils.sizeMatters.scale(4),
      marginBottom: utils.sizeMatters.scale(4)
    }}
  >
    <ScaledText size={12} color={"#FFF"}>{data}</ScaledText>
  </View>
}

export default AddScreen;
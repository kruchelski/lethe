import React from 'react';
import { Text, FlatList, View } from 'react-native';
import styles from './style';

const Output = ({ navigation, label }) => {

  // const notesMock = [
  //   { id: 0, title: 'This is the note 1', content: 'This is a note taken to serve as a mock stuff.', date: '01/01/2021 15:00' },
  //   { id: 1, title: 'This is the note 2', content: 'This is a note taken to serve as a mock stuff blablabla.', date: '01/01/2021 16:00' },
  //   { id: 2, title: 'This is a note that have a loooong title and is expected to not wrap to the next line', content: 'This is a note taken to serve as a mock stuff kind of long text.', date: '02/01/2021 17:00' },
  //   { id: 3, title: 'Blumba blumba', content: 'Blublublu', date: '02/01/2021 18:00' },
  //   { id: 4, title: 'Miau', content: 'Miau miua miau.', date: '02/01/2021 19:00' },
  // ]
  const notesMock = []

  return (
    <View
      style={ styles.container }
    >
      <Text
        style={ styles.label }
      >
        { label }
      </Text>
      <FlatList
        style={ styles.flatlistContainer }
        data={ notesMock }
        ListEmptyComponent={() => {
          return (
            <Text
              style={ styles.warnText }
            >
              [No notes found]
            </Text>
          )
        }}
        keyExtractor={(_, index) => `list-item-${index}`}
        renderItem={(data => {
          return (
            <Text
              numberOfLines={1}
              style={ styles.text }
            >
              { `> ${data.item.title}` }
            </Text>
          )
        })}
      >
      </FlatList>
    </View>

  )
}

export default Output;
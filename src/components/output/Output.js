import React from 'react';
import { Text, FlatList, View, ScrollView, ColorPropType } from 'react-native';
import styles from './style';
import ColorPalette from '../../global/ColorPalette';

const Output = ({ navigation, label, type, content, itemId, itemName }) => {

  return (
    <View
      style={styles.container}
    >
      <Text
        style={styles.label}
      >
        {label}
      </Text>
      {
        type === 'none' && <View>
          </View>
      }

      {
        type === 'list' && <FlatList
          style={styles.innerContainer}
          data={content}
          ListEmptyComponent={() => {
            if (1 !== 1) {
              return (
                <View></View>
              )
            } else {
              return (

                <Text
                  style={styles.warnText}
                >
                  [No notes found]
                </Text>

              )
            }
          }}
          keyExtractor={(_, index) => `list-item-${index}`}
          renderItem={(data => {
            return (
              <Text
                numberOfLines={1}
                style={styles.text}
              >
                { `${data.item[itemId]}. ${data.item[itemName]}`}
              </Text>
            )
          })}
        />
      }
      {
        type === 'text' && <ScrollView>
          <Text
            style={{ ...styles.text, ...(content ? {} : {color: ColorPalette.fg01Fade}) }}
          >
            {content || '[No content]'}
          </Text>
        </ScrollView>
      }
    </View>

  )
}

export default Output;
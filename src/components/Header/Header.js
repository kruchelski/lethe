import React from 'react';
import { Image, View } from 'react-native';

import styles from './style';
import { Logo } from '../../assets/';

const Header = () => {
  return (
    <View
      style={styles.headerContainer}
    >
      <Image
        style={styles.headerImage}
        source={Logo}
      />
    </View>
  );
}

export default Header;
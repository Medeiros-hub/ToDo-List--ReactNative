import React from "react";
import { Image, View } from "react-native";
import { styles } from "./style";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image 
        style={styles.image}
        source={require('../../../assets/logo.png')}
      />
    </View>
  );
};

export default Header;

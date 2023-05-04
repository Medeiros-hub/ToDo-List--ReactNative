import React, {useState} from "react";
import { View } from "react-native";
import Header from "../../components/Header";
import Form from "../../components/Form";

import { styles } from "./style";

const Home = () => {

  return (
    <View style={styles.container}>
      <Header />
      <Form 
        placeholder="Adicione uma nova tarefa"
      />
    </View>
  );
};

export default Home;

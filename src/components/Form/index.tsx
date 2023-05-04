import React, { useState } from "react";
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Keyboard,
  Text,
  ScrollView,
  Alert,
} from "react-native";
import { styles } from "./style";
import { colors } from "../../constants";
import Task from "../Task";

interface FormProps {
  placeholder: string
}

const Form: React.FC<FormProps> = ({
  placeholder
}) => {
  const [task, setTask] = useState<string>("");
  const [taskItems, setTaskItems] = useState<Array<string>>([]);
  const [countTask, setCountTask] = useState<number>(0);
  const verifySpace = (text: string) => /^\s+/.test(text);

  const confimTask = (data: number) => {
    setCountTask(data);
  };

  const handleAddTask = () => {
    if (task != "" && !verifySpace(task)) {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task]);
      setTask("");
    }

    if (verifySpace(task)) {
      Alert.alert(
        "Teste",
        "Não pode haver espaços em branco no começo da frase!"
      );
      setTask("");
    }
  };

  return (
    <>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={task}
          placeholderTextColor={colors.gray[300]}
          keyboardType="default"
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity style={styles.button} onPress={() => handleAddTask()}>
          <Image source={require("../../../assets/icons/plus.png")} />
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoWrapper}>
          <Text style={styles.created}>Criadas</Text>
          <Text style={styles.numbersTask}>{taskItems.length}</Text>
        </View>
        <View style={styles.infoWrapper}>
          <Text style={styles.completed}>Concluídas</Text>
          <Text style={styles.numbersTask}>{countTask}</Text>
        </View>
      </View>

      {taskItems.length == 0 ? (
        <View style={{ alignItems: "center", paddingTop: 20, width: "100%" }}>
          <View style={styles.line}></View>
          <Image source={require("../../../assets/icons/clipboard.png")} />
          <Text
            style={{
              color: colors.gray[300],
              fontWeight: "bold",
              paddingTop: 20,
            }}
          >
            Você ainda não tem tarefas cadastradas
          </Text>
          <Text style={{ color: colors.gray[300] }}>
            Crie tarefas e organize seus itens a fazer
          </Text>
        </View>
      ) : (
        <ScrollView
          style={styles.taskWrapper}
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
          }}
        >
          {taskItems.map((item, index) => {
            return (
              <Task
                key={index}
                nameTask={item}
                taskItems={taskItems}
                setTaskItems={setTaskItems}
                confirmTask={confimTask}
                setCountTask={setCountTask}
                countTask={countTask}
              />
            );
          })}
        </ScrollView>
      )}
    </>
  );
};

export default Form;

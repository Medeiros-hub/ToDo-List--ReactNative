import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

interface TaskProps {
  nameTask: string;
  taskItems: Array<string>;
  setTaskItems: any;
  confirmTask: any;
  setCountTask: number | any;
  countTask: number;
}

const Task: React.FC<TaskProps> = ({
  nameTask,
  taskItems,
  setTaskItems,
  countTask,
  setCountTask,
}) => {
  const [completed, setCompleted] = useState<boolean>(false);

  const confirmTask = () => {
    setCompleted(!completed);
    completed == true
      ? setCountTask(countTask - 1)
      : setCountTask(countTask + 1);
  };

  const deleteTask = (index: any) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
    completed == true && setCountTask(countTask - 1);
  };

  return (
    <View style={styles.task}>
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => confirmTask()}
      >
        {completed ? (
          <Image source={require("../../../assets/icons/checked.png")} />
        ) : (
          <Image source={require("../../../assets/icons/unchecked.png")} />
        )}
      </TouchableOpacity>
      <Text style={completed ? styles.completed : styles.content}>
        {nameTask}
      </Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteTask(this)}
      >
        <Image source={require("../../../assets/icons/trash.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default Task;

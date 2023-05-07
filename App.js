import React, { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Keyboard, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.taskswrapper}>
        <Text style={styles.sectionTitle}>Tytuł taska</Text>
        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      <View style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
items: {
  marginTop: 30,
},
writeTaskwrapper: {
  position: 'absolute',
    bottom: 60,
      width: '100%',
        flexDirection: 'row',
          justifyContent: 'space-around',
            alignItems: 'center',
},
input: {
  paddingVertical: 15,
    paddingHorizontal: 15,
      backgroundColor: '#fff',
        borderRadius: 60,
          borderColor: '#cecece',
            borderWidth: 1,
              width: 250,
},
addwrapper: {
  width: 60,
    height: 60,
      backgroundColor: '#fff',
        borderRadius: 60,
          justifyContent: 'center',
            alignItems: 'center',
              borderColor: '#cecece',
                borderWidth: 1,
},
addText: { }

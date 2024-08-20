import React, {useState} from 'react';
import { ScrollView , Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

//tasksImport
import Task from '../../ToDoList_components/task';

export default function QuotesScreen() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>

    {/* Header | Today's task(s)*/}
    <View style={styles.taskWrapper}>
    
      <Text style={styles.sectionTitle}>Salva qui le tue frasi per decrivere il MEME!</Text>

      <ScrollView style={{height: '80%'}}>
        <View style={styles.item}>
          {/* Contenitore tasks */}
          {
            taskItems.map((item, index) => {
              return(
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item}/>
              </TouchableOpacity>
              )
            })
          }
        </View>
      </ScrollView>

    </View>

    {/* write a tast*/}
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      style={styles.writeTaskWrapper}>

      <TextInput style={styles.input} placeholder={'Descivi il MEME!'} value={task} onChangeText={text => setTask(text)}></TextInput>
      
      <TouchableOpacity onPress={() => handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>

    </KeyboardAvoidingView>
      
    </View>
  );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
    },
    taskWrapper: {
      paddingTop: 10,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 35,
      fontWeight: '100',
      color: '#191919'
    },
    item: {
      marginTop: 20,
    },
    writeTaskWrapper: {
      position: 'absolute',
      bottom: 10,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      width: 250,
      backgroundColor: '#fff',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: '#fff',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
    addText: {},
  });
  
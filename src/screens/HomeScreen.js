import React, { useState, useContext }  from 'react';
import { Pressable, Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import { NoteContext } from '../context/NoteContext';
import Note from '../components/Note';


function HomeScreen({navigation}) {
  
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  
  const noteContext = useContext(NoteContext);

  const AddNote = () => {
    if (title.length > 0 && body.length > 0) {
      noteContext.add({title: title, body: body, key: new Date().getUTCMilliseconds()});
      setTitle('');
      setBody('');
    }
  }

  const DeleteNote = (key) => {
    noteContext.remove({key: key});
  }

  return(
    <View style={styles.container}>
        <TextInput 
          style={styles.input}
          onChangeText={(value) => setTitle(value)}
          value={title}
          placeholder='Título'
          placeholderTextColor='white'
        />
        <View/>
        <TextInput 
          style={styles.input}
          onChangeText={(value) => setBody(value)}
          value={body}
          placeholder='Corpo'
          placeholderTextColor='white'
        />
        <View/>
        <Pressable style={styles.button} onPress={AddNote}>
          <Text style={styles.text}>Adicionar</Text>
        </Pressable>
        <ScrollView>
          <View>
            {noteContext.state.notes.map((note) => (
                <Note
                  key={note.key}
                  title={note.title}
                  body={note.body}
                  delete={() => DeleteNote(note.key)}
                  edit={() => navigation.navigate("Edit Note", {noteKey: note.key, noteTitle: note.title, noteBody: note.body})}
                />
            ))} 
          </View>
        </ScrollView>
    </View>     
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    height: '100%',
    backgroundColor: '#241F25',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginVertical: 8,
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    height: 35,
    borderWidth: 1,
    paddingLeft:8,
    marginVertical: 4,
    borderColor: 'white',
    color: 'white'
  },
});
  
export default HomeScreen;
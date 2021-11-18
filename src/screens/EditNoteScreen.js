import React, { useState, useContext }  from 'react';
import { Pressable, Text, View, StyleSheet, TextInput, Alert } from 'react-native';
import { NoteContext } from '../context/NoteContext';


function EditNoteScreen({route, navigation}) {
    const {noteKey, noteTitle, noteBody} = route.params;
    const noteContext = useContext(NoteContext);

    const [title, setTitle] = useState(noteTitle);
    const [body, setBody] = useState(noteBody);

    const EditNote = (key) => {
        if (title.length > 0 && body.length > 0) {
            noteContext.edit({title: title, body: body, key: key});
            navigation.goBack()
        }
    }

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                onChangeText={(value) => setTitle(value)}
                value={title}
                placeholder='Título'
                placeholderTextColor='white'
            />
            <View style={{ marginVertical: 8}} />
            <TextInput 
                style={styles.input}
                onChangeText={(value) => setBody(value)}
                value={body}
                placeholder='Corpo'
                placeholderTextColor='white'
            />
            <View style={{ marginVertical: 8}} />
            <Pressable style={styles.button} onPress={() => EditNote(noteKey)}>
                <Text style={styles.text}>Editar nota</Text>
            </Pressable>
        </View>
    )
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

export default EditNoteScreen;
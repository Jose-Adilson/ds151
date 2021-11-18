import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';

const Note = (props) => (
    <View style={styles.noteWrap}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.body}</Text>
        <Pressable style={styles.button} onPress={props.edit}>
            <Text style={styles.buttonText}>Editar</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={props.delete}>
            <Text style={styles.buttonText}>Excluir</Text>
        </Pressable>
    </View>
) 

export default Note;

const styles = StyleSheet.create({
    noteWrap: {
        display: 'flex',
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '100%',
        minHeight: 50,
        marginVertical: 8,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 15
    },
    title: {
        width:'100%',
        fontSize: 20,
        padding: 8,
        lineHeight:16,
        color: 'white',
        fontWeight: 'bold'
    },
    text: {
        width:'100%',
        fontSize: 16,
        padding: 8,
        color: 'white',
        lineHeight:16,
    },
    button: {
        width: '40%',
        backgroundColor: '#241F25',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        padding: 4,
        marginVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight:'bold',
        fontSize: 16     
    }
})
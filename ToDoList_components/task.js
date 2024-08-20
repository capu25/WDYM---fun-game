import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Task = (props) => {

    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}> {props.text} </Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )

}

const styles = StyleSheet.create({

    item:{
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    itemLeft:{
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
    square:{
        width: 24,
        height: 24,
        backgroundColor: '#4fc1c9',
        borderRadius: 5,
        marginRight: 15,
    },
    itemText:{
        maxHeight: '80%',
    },
    circular:{
        width: 12,
        height: 12,
        borderColor: '#4fc1c9',
        borderWidth: 2,
        borderRadius: 5,
    },

});

export default Task;
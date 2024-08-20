import * as React from 'react';
import { View, Text, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';

export default class ScoreScreen extends React.Component {

    state = {
        value: 0
    }

    incrementValue = () => {
        this.setState({value : this.state.value +1});
    }

    decrementValue = () => {
        if(this.state.value == 0){
            Alert.alert('UE SCEM', 'Non puoi togliere una cosa che non hai!')
        } else {
            this.setState({value : this.state.value -1});
        }
    }

    render(){

        return(
            <View style={{ flex:1,
                           alignItems: 'center',
                           justifyContent: 'center',
                           backgroundColor: '#fff'
                        }}>
                        
                <Text style={styles.headTxt}>Segna qui i tuoi punti</Text>
            
                <Image style={styles.img} source={require('../../assets/myAssets/coppa.jpg')}/>        
                
                <View style={styles.wrapper}>
                    <TouchableOpacity onPress={this.decrementValue}>
                        <View style={styles.Btn}>
                            <Text style={styles.Txt}>-</Text>
                        </View>
                    </TouchableOpacity>

                    <Text>         </Text>

                    <Text style={styles.value}>{this.state.value}</Text>

                    <Text>         </Text>

                    <TouchableOpacity onPress={this.incrementValue}>
                        <View style={styles.Btn}>
                            <Text style={styles.Txt}>+</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    wrapper:{
        flexDirection: 'row',
        marginTop: 30,
    },
    headTxt:{
        fontSize: 35,
        fontWeight: '100',
        color: '#2b216a'
    },
    value:{
        fontSize: 60,
        fontWeight: '400',
        color: '#4fc1c9'
    },
    Btn:{
        width: 80,
        height: 80,
        backgroundColor: '#fff',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#c0c0c0',
        borderWidth: 1,
    },
    Txt:{
        fontSize:50,
        fontWeight: '200',
        color: '#2b216a',
        marginTop: -9,
        marginLeft: 1
    },
    img:{
        height: 300,
        width: 300,
        marginTop: 25
    }
});
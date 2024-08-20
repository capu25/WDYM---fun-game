import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function MemeScreen() {

    const imgS = [
        require('../../assets/myAssets/memeImages/image1.png'),
        require('../../assets/myAssets/memeImages/image2.png'), 
        require('../../assets/myAssets/memeImages/image3.png'),
        require('../../assets/myAssets/memeImages/image4.png') 
   ];

    const [selectedImagePath, setSelectedImagePath] = useState('');
    const [quotesBeforeMeme, setNewQuotes] = useState('Sembra calmo qui...');

    const getRandomImage = () => {
        const maxImageNumber = imgS.length;
        const randomNumber = Math.floor(Math.random() * maxImageNumber);
        const randomImagePath = imgS[randomNumber];
        setSelectedImagePath(randomImagePath);
       
        const quotes = ('Mostra a tutti il meme :');
        setNewQuotes(quotes) ;
    }

    return(
        <View style={styles.wrapper}>

            <Text style={styles.header}>{quotesBeforeMeme}</Text>

           <View style={styles.memeBox}>
                <Image
                    source={selectedImagePath}
                    style={styles.memeImg}
                />
           </View>

            <TouchableOpacity onPress={getRandomImage}>
                <View style={styles.btn}>
                    <Text style={styles.innerText}>Pesca un MEME</Text>
                </View>
            </TouchableOpacity>

        </View>
    );

}

const styles = StyleSheet.create({
    wrapper:{
        flex:1, 
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop: -20,
    },
    header:{
        fontSize: 35,
        fontWeight: '100',
        marginBottom: 15,
    },
    memeBox:{
        height: 398,
        width: 350,
        backgroundColor: '#000',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    memeImg:{
        height: 398,
        width: 350,
        borderRadius: 10,
    },
    btn:{
        width: 250,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#c0c0c0',
        borderWidth: 1,
        marginTop: 40
    },
    innerText:{
        fontSize: 20,
        color: '#4fc1c9',
        fontWeight: 'bold'
    },
});
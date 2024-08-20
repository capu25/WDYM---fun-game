import * as React from 'react';
import { Image } from 'react-native';

//import schermate
import MemeScreen from './screens/meme';
import QuotesScreen from './screens/quotes';
import ScoreScreen from './screens/score';

//import componenti
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

//costanti
const memeName = 'Meme';
const quotesName = 'Frasi (carte)';
const scoreName = 'Punti';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={memeName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if(rn === memeName){
                            iconName = focused ? 'images' : 'images-outline'
                        } else if(rn === quotesName){
                            iconName = focused ? 'reader' : 'reader-outline'
                        } else if(rn === scoreName){
                            iconName = focused ? 'ribbon' : 'ribbon-outline'
                        }

                        return <Ionicons name = {iconName} size={size} color={color}/>

                    },
                        tabBarActiveTintColor: '#b13190',
                        tabBarInactiveTintColor: 'grey',
                        tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
                        tabBarStyle: { padding: 10, height: 90 },
                })}>

                    <Tab.Screen 
                        name={memeName}
                        component={MemeScreen}
                        options={{
                            headerTitle: () => (
                                <Image
                                    source={require('../assets/myAssets/wdymLogo.png')}
                                    style={{width: 150, height: 40, marginLeft: -180, marginBottom: 20}}
                                />
                            ),
                        }}
                    />

                    <Tab.Screen 
                        name={quotesName}
                        component={QuotesScreen}
                        options={{
                            headerTitle: () => (
                                <Image
                                    source={require('../assets/myAssets/wdymLogo.png')}
                                    style={{width: 150, height: 40, marginLeft: -180, marginBottom: 20}}
                                />
                            ),
                        }}
                    />

                    <Tab.Screen 
                        name={scoreName}
                        component={ScoreScreen}
                        options={{
                            headerTitle: () => (
                                <Image
                                    source={require('../assets/myAssets/wdymLogo.png')}
                                    style={{width: 150, height: 40, marginLeft: -180, marginBottom: 20}}
                                />
                            ),
                        }}
                    />
                </Tab.Navigator>
        </NavigationContainer>
    );

}
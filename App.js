import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, StyleSheet, Text } from 'react-native';
import Landing from './src/screens/Landing';

import Calendar from './src/screens/drawer/Calendar';
import Settings from './src/screens/drawer/Settings';

import RiskAssessment from './src/screens/RiskAssessment';
import BuildingRiskAssessment from './src/screens/BuildingRiskAssessment';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 4,
        backgroundColor: '#009688',
        borderRadius: 6,
        paddingVertical: 4,
        paddingHorizontal: 4,
        marginRight: 2
    },
    appButtonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase'
    }
});

const App = () => {
    function createHomeStack() {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Feed"
                    component={Landing}
                    options={{
                        title: 'My Feed',
                        headerStyle: {
                            backgroundColor: 'black'
                        },
                        headerTintColor: 'white',
                        headerTitleAlign: 'center'
                    }}
                />
                {/* TODO: Remove the inline styling, utilize classes. Create function for duplicate TouchableOpacity Component */}
                <Stack.Screen
                    name="Risk Assessments"
                    component={RiskAssessment}
                    options={{
                        headerRight: () => (
                            <TouchableOpacity
                                style={{
                                    marginRight: 8,
                                    backgroundColor: 'blue'
                                }}
                                onPress={() => alert('New Risk Assessment!')}
                                color="green">
                                <Text
                                    style={{
                                        padding: 6,
                                        fontSize: 11,
                                        color: 'white'
                                    }}>
                                    Create Risk Assessment
                                </Text>
                            </TouchableOpacity>
                        ),
                        headerTitle: 'Home'
                    }}
                />
                <Stack.Screen
                    name="Building Risk Assessments"
                    component={BuildingRiskAssessment}
                    options={{
                        headerRight: () => (
                            <TouchableOpacity
                                style={{
                                    marginRight: 8,
                                    backgroundColor: 'blue'
                                }}
                                onPress={() =>
                                    alert('New Building Risk Assessment!')
                                }
                                color="green">
                                <Text
                                    style={{
                                        padding: 6,
                                        fontSize: 11,
                                        color: 'white'
                                    }}>
                                    Create Buliding Risk Assessment
                                </Text>
                            </TouchableOpacity>
                        ),
                        headerTitle: 'Home'
                    }}
                />
            </Stack.Navigator>
        );
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" children={createHomeStack} />
                <Drawer.Screen name="Calendar" component={Calendar} />
                <Drawer.Screen name="Settings" component={Settings} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;

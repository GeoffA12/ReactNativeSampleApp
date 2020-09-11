import React from 'react';
import { View, Text, Button, Platform, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { styles } from '../styles/styles';

const Landing = () => {
    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={styles.center}>
            <Text style={styles.title}>Welcome Geoff</Text>
            {Platform.select({
                ios: (
                    <Button
                        title="Go to Feed Item"
                        onPress={() =>
                            navigation.navigate('Detail', {
                                screenName: 'My Detail Screen'
                            })
                        }
                    />
                ),
                android: (
                    <>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('Risk Assessments')
                            }
                            style={{
                                backgroundColor: 'black',
                                borderRadius: 6
                            }}>
                            <Text style={styles.androidButtonText}>
                                View Risk Assessments
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('Building Risk Assessments')
                            }
                            onFoc
                            style={{
                                marginTop: 10,
                                backgroundColor: 'black',
                                borderRadius: 6
                            }}>
                            <Text style={styles.androidButtonText}>
                                View Building Risk Assessments
                            </Text>
                        </TouchableOpacity>
                    </>
                )
            })}
        </View>
    );
};

export default Landing;

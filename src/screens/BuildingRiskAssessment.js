import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';

const BuildingRiskAssessment = () => {
    return (
        <View style={styles.center}>
            <Text
                adjustsFontSizeToFit={true}
                numberOfLines={1}
                style={styles.title}>
                Building Risk Assessments
            </Text>
        </View>
    );
};

export default BuildingRiskAssessment;

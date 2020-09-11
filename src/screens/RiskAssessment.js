import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';

const RiskAssessment = () => {
    async function loadData(endPoint) {
        let data;
        try {
            data = await fetch(endPoint);
        } catch (e) {
            console.error(e);
        }

        return data.json();
    }

    async function getRiskAssessmentData() {
        const riskAssessments = await loadData(
            'http://192.168.1.36:8080/getAllRiskAssessments'
        );
        console.log(riskAssessments);
        return riskAssessments;
    }

    useEffect(() => {
        const riskAssessments = getRiskAssessmentData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // TODO: Populate the render method here with the loaded risk assessments using a list view component of some sort
    return (
        <View style={styles.center}>
            <Text style={styles.title}>Risk Assessments</Text>
        </View>
    );
};

export default RiskAssessment;

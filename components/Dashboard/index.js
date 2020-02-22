import React, { useState, useEffect } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import { getNearestCity } from '../../services/AirVisualService';
import Weather from './Weather';
import Card from '../Layout/Card';
import HumidityChart from './HumidityChart';
import AirQuality from './AirQuality';

const getWeatherInfo = (setDataHook, setLoadingHook) => {
	navigator.geolocation.getCurrentPosition(
		position => {
			getNearestCity(position.coords.latitude, position.coords.longitude)
				.then(locationData => {
					setDataHook(locationData);
					setLoadingHook(false);
				});
		},
		error => Alert.alert(error.message),
		{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
	);
};

export default function Dashboard () {

	const [weatherData, setWeatherData] = useState({});

	const [isLoading, setIsLoading] = useState(true);

    useEffect(() => { getWeatherInfo(setWeatherData, setIsLoading)}, []);
    
    if (!isLoading) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Air Quality Report</Text>
                <ScrollView>
                    <Card>
                        <Weather weatherData={weatherData}></Weather>
                    </Card>
                    <Card>
                        <Text style={styles.humidity}>Humidity</Text>
                        <HumidityChart weatherData={weatherData}></HumidityChart>
                    </Card>
                    <Card>
                        <Text style={styles.aqiIndexTitle}>AQI Index (US)</Text>
                        <AirQuality weatherData={weatherData}></AirQuality>
                    </Card>
                </ScrollView>
            </View>
        );
    }
	return (
		<ActivityIndicator style={styles.loadingSpinner} size="large" color="#50CBF5" />
	);
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        flex: 1,
    },
    title: {
        margin: 16,
        fontSize: 28,
        fontFamily: 'sans-serif-light',
        textAlign: 'center',
        color: '#42C8B5',
    },
    humidity: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },
    aqiIndexTitle: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },
	loadingSpinner: {
		marginLeft: 'auto',
        marginRight: 'auto',
        top: 300,
    },
	chart: {
		width: 200,
		height: 200,
	},
});
  
import React from 'react';
import { StyleSheet, View } from 'react-native';


export default function Column ({ children }) {
    return (
        <View style={styles.column}>
            { children }
        </View>
    );
}

const styles = StyleSheet.create({
	column: {
        flexDirection: 'column',
		width: 150,
	},
});
  
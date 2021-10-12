import React from 'react'
import { View, Text, SafeAreaView, Platform, StyleSheet, StatusBar } from 'react-native'
import Header from '../components/home/Header'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.AndroidsArea}>
            <Header />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    AndroidsArea: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})
export default HomeScreen

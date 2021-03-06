import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.logo}
                    source={require('../../assets/header-logo.png')}
                />
            </TouchableOpacity>
            <View style={styles.iconsContainer}>
                <TouchableOpacity>
                    <Image style={styles.icon}
                        source={{
                            uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png'
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.icon}
                        source={{
                            uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png'
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>11</Text>
                    </View>
                    <Image style={styles.icon}
                        source={{
                            uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png'
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 20
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain'
    },
    iconsContainer: {
        flexDirection: 'row',
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: 'contain'
    },
    unreadBadge: {
        backgroundColor: "#FF3250",
        position: 'absolute',
        left: 30,
        bottom: 32,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100
    },
    unreadBadgeText: {
        fontWeight: '600',
        color: 'white',
    }
})
export default Header;

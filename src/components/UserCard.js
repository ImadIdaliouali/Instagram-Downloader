import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { COLORS, FONTS, SIZES } from '../constants';

const UserCard = ({ user }) => {
    const { username, profile_pic_url_hd, full_name } = user;

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image source={{ uri: profile_pic_url_hd }} style={styles.profilePicture} />
                <View>
                    <Text style={styles.username}>{username}</Text>
                    <Text style={styles.fullName}>{full_name}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => { }}>
                <Text style={styles.buttonText}>Download</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: COLORS.white,
        borderRadius: SIZES.xSmall,
        padding: SIZES.xSmall,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3,
    },
    row: {
        flexDirection: "row",
        alignItems: 'center'
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    username: {
        fontFamily: FONTS.BOLD,
        fontSize: 16,
    },
    fullName: {
        fontFamily: FONTS.REGULAR,
        color: COLORS.grey,
        fontSize: 14,
    },
    buttonContainer: {
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.small,
        padding: SIZES.xSmall,
        justifyContent: "center",
        alignItems: "center",
        elevation: 2,
    },
    buttonText: {
        fontFamily: FONTS.BOLD,
        color: COLORS.white,
    },
});

export default UserCard;
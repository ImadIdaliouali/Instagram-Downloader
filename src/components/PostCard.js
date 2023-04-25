import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { COLORS, FONTS, SIZES } from '../constants';

const PostCard = ({ post }) => {
    const { owner, display_url, is_video } = post;

    const download = () => {
        if (is_video) {
            console.log("it's a video");
        } else {
            console.log("it's an image");
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.user}>
                    <Image
                        style={styles.avatar}
                        source={{ uri: owner.profile_pic_url }}
                        resizeMode="cover"
                    />
                    <Text style={styles.username}>{owner.username}</Text>
                </View>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => download()}>
                    <Text style={styles.buttonText}>Download</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Image
                    style={styles.image}
                    source={{ uri: display_url }}
                    resizeMode="cover"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.white,
        overflow: "hidden",
        elevation: 5,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        justifyContent: "space-between",
    },
    user: {
        flexDirection: "row",
        alignItems: "center",
    },
    avatar: {
        height: 40,
        width: 40,
        borderRadius: 50,
    },
    username: {
        marginHorizontal: SIZES.xSmall,
        fontFamily: FONTS.MEDIUM,
    },
    image: {
        height: "100%",
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

export default PostCard;

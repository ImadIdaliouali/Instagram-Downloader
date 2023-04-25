import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { COLORS, FONTS, SIZES } from '../constants';
import { PostCard, UserCard } from '../components';
import { getData } from '../services';

const HomeScreen = () => {
    const [link, setLink] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [post, setPost] = useState(null);

    const getPostData = () => {
        setIsLoading(true);
        getData(link).then(response => {
            setPost(response.data.graphql);
            setIsLoading(false);
        });
    }

    return (
        <View style={styles.container}>
            <StatusBar
                style="auto"
                translucent={false}
                backgroundColor={COLORS.lightWhite}
            />
            <Text style={styles.header}>Instagram Downloader</Text>
            <View style={styles.linkContainer}>
                <View style={styles.linkWrapper}>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setLink(text)}
                        placeholder="Paste URL Instagram"
                        keyboardType="url"
                    />
                </View>
                <TouchableOpacity style={styles.downloadBtn} onPress={() => getPostData()}>
                    <MaterialCommunityIcons
                        name="download"
                        size={24}
                        color={COLORS.white}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.postContainer}>
                {isLoading ?
                    <ActivityIndicator size="large" color={COLORS.green} />
                    : (post && (post.user ? <UserCard user={post.user} /> : <PostCard post={post.shortcode_media} />))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite,
        padding: SIZES.medium,
    },
    header: {
        fontFamily: FONTS.BOLD,
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
        marginTop: SIZES.small,
        textAlign: "center",
    },
    linkContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: SIZES.large,
        height: 50,
    },
    linkWrapper: {
        flex: 1,
        backgroundColor: COLORS.white,
        marginRight: SIZES.small,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.medium,
        height: "100%",
        elevation: 2,
    },
    input: {
        fontFamily: FONTS.REGULAR,
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.medium,
    },
    downloadBtn: {
        width: 50,
        height: "100%",
        backgroundColor: COLORS.green,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
        elevation: 2,
    },
    postContainer: {
        flex: 1,
        paddingVertical: SIZES.medium,
    },
});

export default HomeScreen;
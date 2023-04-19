import React, { useRef, useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View, Image, Pressable, Button } from 'react-native';
import Subtitle from 'react-native-subtitles';
import { Video } from 'expo-av';
import io from 'socket.io-client';
import { WebSocket } from 'expo';

const SubTitles = ({route, navigation}) => {
    const { data } = route.params;

    //const socket = io(data);

    useEffect(() => {
        const ws = new WebSocket(data);
    
        ws.onmessage = (event) => {
            if (event.data === 'pp') {
                handlePlayPause();
            }
            console.log('Received message:', event.data);
        };
    
        ws.send(JSON.stringify({ type: 'subscribe', channel: 'channel-1' }));
    
        return () => {
            ws.close();
        };
      }, []);

    // socket.on('message', (data) => {
    //     console.log('Received message:', data);
    //     if (data === 'pp') {
    //         handlePlayPause();
    //     }
    //   });

    const videoRef = useRef(null);
    const [status, setStatus] = useState({});

    const handlePlayPause = () => {
        if (status.isPlaying) {
            videoRef.current.pauseAsync();
        } else {
            videoRef.current.playAsync();
        }
    };

    return (
        <View>
            {/* <Subtitle source={{ uri: 'path/to/subtitles.srt' }} fontSize={24} fontColor='orange' backgroundColor='black'/>
            <Video
                ref={videoRef}
                source={{ uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                resizeMode="contain"
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            /> */}
        </View>
    
    );
}

export default SubTitles;
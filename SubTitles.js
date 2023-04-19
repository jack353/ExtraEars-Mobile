import React, { useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View, Image, Pressable, Button } from 'react-native';
import TcpSocket from 'react-native-tcp-socket';
import Subtitle from 'react-native-subtitles';
import { Video } from 'expo-av';


const SubTitles = ({route, navigation}) => {
    const { port, host } = route.params;

    const options = {
        port: port,
        host: host,
        localAddress: host,
        reuseAddress: true,
        // localPort: 20000,
        // interface: "wifi",
    };

    const client = TcpSocket.createConnection(options, () => {
        // Write on the socket
        client.write('Hey Smitt!');
      
        // Close socket
        //client.destroy();
    });

    client.on('data', function(data) {
        if (data === 'pp') {
            handlePlayPause();
        }
        else if (typeof data === 'object') {
            
        }
        console.log('message was received', data);
    });
    
    client.on('error', function(error) {
        console.log(error);
    });
    
    client.on('close', function(){
        console.log('Connection closed!');
    });

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
            <Subtitle source={{ uri: 'path/to/subtitles.srt' }} fontSize={20} fontColor='orange' backgroundColor='black'/>
            <Video
                ref={videoRef}
                source={{ uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                resizeMode="contain"
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
        </View>
    
    );
}

export default SubTitles;
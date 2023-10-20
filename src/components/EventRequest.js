import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';

const EventRequest = ({ event }) => {
    const width = Dimensions.get('window').width
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('EventDescription', { event })}
            style={{width: width / 2 - 25,height: 110, 
            backgroundColor: 'white',borderRadius: 10,
            overflow: 'hidden', margin: 5}}
        >
            <Image
                resizeMode='contain'
                source={{ uri: event.photo }}
                style={styles.imagestyle}
            />
            <View
                style={styles.view}
            >
                <View
                    style={styles.viewicon}>
                    <Feather name="calendar" size={10} color="black" />
                    <Text
                        style={styles.texticons}>
                        {event.date}</Text>
                </View>
                <View
                    style={styles.viewicon}
                >
                    <Feather name="clock" size={10} color="black" />
                    <Text
                        style={styles.texticons}>
                        {event.time}</Text>
                </View>
                <View
                    style={styles.viewicon}
                >
                    <Feather name="user"size={10} color="black"/>
                    <Text
                        style={styles.texticons}>
                        {event.user}</Text>
                        </View>
            </View>
            <Text  style={styles.textStyle}>{event.title}</Text>
        </TouchableOpacity>
    )
}

export default EventRequest

const styles = StyleSheet.create({

    imagestyle:{
        width: '100%', 
        height: '50%' 
       },
        textStyle: {
          color: 'black',
          fontSize: 14,
          fontWeight: 'bold',
          marginLeft: 2,
          marginTop:5,
          justifyContent: 'center',
        },
        texticons: {
            color: 'gray',
            fontSize: 10,
            marginLeft: 2, 
          },
          viewicon:{
            flexDirection: 'row',
           alignItems: 'center', 
          },
        view:{
         backgroundColor: '#EEE',
         flexDirection: 'row', 
         justifyContent: 'space-between',
         alignItems: 'center',
         padding: 5 ,
        }
})

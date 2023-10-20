import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const EventCard = ({ event }) => {
    
    const width = Dimensions.get('window').width
    const navigation = useNavigation()

    return (
        <ScrollView>
        <TouchableOpacity
            onPress={() => navigation.navigate('EventDescription', { event })}
            style={{width: width / 2 - 25,height: 210, 
            backgroundColor: 'white',borderRadius: 20,
            overflow: 'hidden', margin: 5}}   >
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
            </View>
            <Text  style={styles.textStyle} >{event.title}</Text>

        </TouchableOpacity>
        <View style={styles.bottomSpace} />

        </ScrollView>
        
    )
}

export default EventCard

const styles = StyleSheet.create({
  imagestyle:{
    width: '100%', 
    height: '50%' ,
   },
   bottomSpace: {
    height: 40, // Adjust the height as needed for the desired empty space
  },
    textStyle: {
      color: 'black',
      fontSize: 15,
      fontWeight: 'bold',
      marginTop:20,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',    },
    texticons: {
        color: 'gray',
        fontSize: 11,
        marginLeft: 2, 
      },
      viewicon:{
        flexDirection: 'row',
       alignItems: 'center', 
      },
    input: {
      width: '80%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      marginTop: 10,
    },
    view:{
     backgroundColor: '#C5DFF8',
     flexDirection: 'row', 
     justifyContent: 'space-between',
     alignItems: 'center',
     padding: 5 ,
    

  }}
  );
  
  

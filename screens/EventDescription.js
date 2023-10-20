import React, { useEffect } from 'react';
import { View, Image, Text, ScrollView ,StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

const EventDescription = ({ navigation, route }) => {
  const { event } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: event.title });
  }, []);

  return (
    <ScrollView>
      <Image
        resizeMode='contain'
        source={{ uri: event.photo }} style={styles.imagestyle} />
      <View style={styles.view} >
        <View
          style={styles.viewicon}>
          <Feather name="calendar" size={14} color="black" />
          <Text
            style={styles.texticons}>
            {event.date}</Text>
        </View>
        <View
          style={styles.viewicon}  >
          <Feather name="clock" size={14} color="black" />
          <Text
            style={styles.texticons}>
            {event.time}</Text>
        </View>
        <View
          style={styles.viewicon}
        >
          <Feather name="map-pin" size={14} color="black" />
          <Text
            style={styles.texticons} >
            {event.location}
          </Text>
        </View>

      </View>
      <View style={styles.viewdescription}>
        <Text style={styles.texticons}>{event.description}</Text>
      </View>
    </ScrollView>
  );
};

export default EventDescription;
const styles = StyleSheet.create({
  imagestyle:{
    width: '100%', 
    height: 100 ,
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
        color: 'black',
        fontSize: 14,
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
     backgroundColor: 'white',
     flexDirection: 'row', 
     justifyContent: 'space-between',
     alignItems: 'center',
     padding: 5 ,
    
  },
  viewdescription:{
     marginTop: 40,
    marginLeft: 12 
    }
}
  );
  

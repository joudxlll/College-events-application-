import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image,ScrollView,Button } from 'react-native';
import { nameRequest, eventrequest } from '../src/data';
import EventRequest from '../src/components/EventRequest';
import AdminCategoryComponent from '../src/components/AdminCategoryComponent';



function ProfilePage({ navigation }) {
  const [myFilteredData, setMyFilteredData] = useState(eventrequest);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    if (selectedCategory !== "") {
      setMyFilteredData(eventrequest.filter(item => item.nameRequest === selectedCategory));
    }
    else {
      setMyFilteredData(eventrequest);
    }
  }, [selectedCategory])
  const [textInputText, setTextInputText] = useState('');
  const [sortState, setSortState] = useState(false);
  return (
    <View>
      <Image resizeMode='contain'
        source={{ uri: 'https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg' }}
        style={styles.imagstyle} />

        <View style={styles.but}>
          <Button title="Add Event" onPress={() => navigation.navigate('Template')} color="#F0F0F0" />
        </View>

      <View style={{ marginLeft: 20 }}>
        <Text style={styles.textStyle}>user</Text> 
        <Text style={styles.textuserStyle}>@username</Text>
      </View >

      <View>
        <FlatList
          horizontal
          data={nameRequest}
          renderItem={
            ({ item, index }) => (
              <AdminCategoryComponent item={item}
                index={index}
                setSelectedCategory={setSelectedCategory}
                selectedCategory={selectedCategory}
              />
            )
          }
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <View
        style={styles.viewstyle} >
        <FlatList
          numColumns={2}
          data={myFilteredData}
          renderItem={
            ({ item }) => (
              <EventRequest
                event={item}
              />
            )
          }
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>


      <View style={styles.bottomSpace} />



    </View>
  );
}

const styles = StyleSheet.create({

  image: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    position: 'absolute',
    width: 100,
    height: 100,
    top: 0,
    left: 150,
    right: 150,
    resizeMode: "contain",
  },
  bottomSpace: {
    height: 100, // Adjust the height as needed for the desired empty space
  },
  imagstyle:{
   width: 100, 
   height: 100, 
   borderRadius: 100 ,
   top: 5,   
   left: 10,
   right:10,
  },
  view: {
    borderRadius: 10,
    borderColor: 'lightblue',
    backgroundColor: 'white',
    borderWidth: 2,
  },

  viewstyle:{ marginTop: 20, justifyContent: 'center', 
  alignItems: 'center', alignContent: 'center', },

  horizontally: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  vertically: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  textStyle: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
    justifyContent: 'center',
    // start: -, // - or "5%"
    top: -10, // |
  },
  textuserStyle: {
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
    justifyContent: 'center',
    top: -20, // |

  },
  but: {
    start: 310, // - or "5%"
    top: 520, // |
    height: 50,
    backgroundColor: '#213555',
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    margin: -20,
    width: 120,
  },
}
);


export default ProfilePage;



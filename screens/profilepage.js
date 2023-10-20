import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { nameRequest, eventrequest } from '../src/data';
import EventRequest from '../src/components/EventRequest';
import AdminCategoryComponent from '../src/components/AdminCategoryComponent';


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
  imagstyle:{
   width: 100, 
   height: 100, 
   borderRadius: 100 ,
   top: 5,   
   left: 5,
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
  },
  textuserStyle: {
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
    justifyContent: 'center',
  },
}
);


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
        <View>
          <Button title="Add" onPress={() => navigation.navigate('Template')} />
        </View>
      </View>

    </View>
  );
}

export default ProfilePage;


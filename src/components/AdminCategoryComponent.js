import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const AdminCategoryComponent = ({
    item,
    setSelectedCategory,
    selectedCategory,
    index
}) => {
    return (
        <TouchableOpacity
            onPress={() => {
                if (index == 0) {
                    setSelectedCategory("")
                    return
                }
                if (selectedCategory === item) {
                    setSelectedCategory("")
                } else {
                    setSelectedCategory(item)
                }
            }}
        >
            {index == 0 ?
                <View
                    style={{
                        backgroundColor: selectedCategory === "" ? "#E5D283" : "white",
                        padding: 10,
                        height: 50,
                        margin: 5,
                        justifyContent: "center",
                        alignItems: "center",
                        alignContent: 'center',
                        borderRadius: 10,
                        top: 0,   
                        left: 70,
                        right:80,
                    }}
                >
                    <Text
                        style={{
                            color: "black",
                        }}
                    >
                        {item}
                    </Text>
                </View>
                :
                <View
                    style={{
                        backgroundColor: selectedCategory === item ? "#E5D283" : "white",
                        padding: 10,
                        height: 50,
                        margin: 5,
                        justifyContent: "center",
                        alignItems: "center",
                        alignContent: 'center',
                        borderRadius: 10,
                        top: 0,   
                        left: 70,
                        right:80,
                    }}
                >
                    <Text
                        style={{
                            color: "black",
                        }}
                    >
                        {item}
                    </Text>
                </View>
            }

        </TouchableOpacity>
    );
};

export default AdminCategoryComponent;

const styles = StyleSheet.create({});

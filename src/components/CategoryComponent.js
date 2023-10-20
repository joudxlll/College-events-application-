import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CategoryComponent = ({
    item,
    setSelectedCategory,
    selectedCategory,
}) => {
    return (
        <TouchableOpacity
            onPress={() => {
                if (selectedCategory === item) {
                    setSelectedCategory("")
                } else {
                    setSelectedCategory(item)
                }
            }}
            style={{
                backgroundColor: selectedCategory === item ? "#C5DFF8" : "white",
                padding: 10,
                height: 50,
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
            }}
        >
            <Text
                style={{
                    color: selectedCategory === item ? "#213555" : "black",
                }}
            >
                {item}
            </Text>
        </TouchableOpacity>
    );
};

export default CategoryComponent;

const styles = StyleSheet.create({});

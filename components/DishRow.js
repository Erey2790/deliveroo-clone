import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";

const DishRow = ({ id, name, description, price, image }) => {
const [ isPressed, setIsPressed ] = useState(false);

  return (
    <>
    
    <TouchableOpacity className="bg-white border p-4 border-gray-200">
      <View className="flex-row">
        <View className="flex-1 pr-2">
          <View>
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400">${price}</Text>
          </View>
        </View>
        <View>
          <Image
            style={{
              borderWidth: 1,
              borderColor: "#f3f3f4",
            }}
            source={{ uri: urlFor(image).url() }}
            className="h-20 w-20 bg-gray-300 p-4 "
          />
        </View>
      </View>
    </TouchableOpacity>
    </>
  );
};

export default DishRow;

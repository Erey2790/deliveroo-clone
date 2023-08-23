import { View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import React, { useState, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { selectBasketItems } from "../features/basketSlice";
import { XCircleIcon } from "react-native-heroicons/solid";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
  const dispatch = useDispatch();
  
useMemo(() => {
  const groupedItems = items.reduce((results, item) => {
    (results[items.id] = results[items.id] || []).push(item);
    return results;
  }, {});

  setGroupedItemsInBasket(groupedItems)
}, [items])
  return (
   <SafeAreaView className="flex-1 bg-white">
    <View className="flex-1 bg-gray-100">
      <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
        <View>
          <Text className="text-lg font-bold text-center">Basket</Text>
          <Text className="text-center text-gray-400">{restaurant.title}</Text>
        </View>
        <TouchableOpacity
          onPress={navigation.goBack}
          className="rounded-full bg-gray-100 absolute top-3 right-5"
        >
          <XCircleIcon color="#00CCBB" height={50} width={50}/>
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <Text className="flex-1">Deliver in 50-75 min</Text>
        <TouchableOpacity>
          <Text className="text-[#00CCBB]">Change</Text>
        </TouchableOpacity>
      </View>
    </View>
   </SafeAreaView>
  );
};

export default BasketScreen;

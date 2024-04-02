import { StyleSheet, Text, View, Image, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/action";

const Product = (props) => {
  const item = props.item;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.reducer);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (item) => {
    // console.log("added",item);
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (item) => {
    // console.warn(item);
    dispatch(removeFromCart(item.id));
  };

  useEffect(() => {
    let result = cartItems.filter((element) => {
      return element.id === item.id;
    });
    if (result.length) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartItems]);

  return (
    <View
      style={{
        alignItems: "center",
        borderBottomColor: "orange",
        borderBottomWidth: 2,
        padding: 90,
      }}
    >
      <Text style={{ fontSize: 60 }}>{item.id}</Text>
      <Text style={{ fontSize: 60 }}>{item.name}</Text>
      <Text style={{ fontSize: 60 }}>{item.price}</Text>
      <Text style={{ fontSize: 60 }}>{item.color}</Text>
      <Image
        style={{ width: 200, height: 200, margin: 20 }}
        source={item.image}
      />

      {isAdded ? (
        <Button
          title="Remove from Cart"
          onPress={() => handleRemoveFromCart(item)}
        />
      ) : (
        <Button title="Add To Cart" onPress={() => handleAddToCart(item)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    // flex:1
  },
});
export default Product;

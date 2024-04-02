import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getUserList } from "../redux/action";

const UserList = () => {

  const dispatch = useDispatch();
const userList=useSelector((state)=>state.reducer)

  useEffect(() => {
    dispatch(getUserList());
  }, []);

  console.warn("In component",userList);

  return (
    <View style={styles.container}>
      {
        userList.length?
        userList.map((item)=>(<Text 
        // key={item.users.id}
        >{item.users[0].firstName}
        </Text>))
        : null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default UserList;

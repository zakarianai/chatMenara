import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context";
import { useNavigation } from "@react-navigation/native";

export default function Chatcomponent({ item ,onUserPress }) {
  const navigation = useNavigation();
  const {setAllUser} = useContext(GlobalContext);
   
  function handleNavigateToMessageScreen() {
    navigation.navigate("Messagescreen", {
      id :item.id,
      nickname:item.nickName,
      fullName: item.fullName,
      status: item.status,
      region: item.region,
      role: item.role,
    });
    onUserPress(item.id);
  }

  return (
    <Pressable style={[styles.chat, { backgroundColor: item.backgroundColor || '#FFF' }]} onPress={handleNavigateToMessageScreen}>
      <View style={styles.circle}>
        <FontAwesome name="user" size={24} color={"black"} />
      </View>
      <View style={styles.rightContainer}>
        <View>
          <Text style={styles.userName}>
            {item.fullName ? item.fullName : "Unknown User"}
          </Text>
          <Text style={styles.message}>
            {item.status ? item.status : "Status Unknown"}
          </Text>
        </View>
        <View>
          <Text style={styles.time}>
            {item.region ? item.region : "No Region"}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chat: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#fff",
    height: 80,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "bold",
  },
  message: {
    fontSize: 14,
    opacity: 0.8,
  },
  rightContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  time: {
    opacity: 0.6,
  },
  circle: {
    width: 50,
    borderRadius: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    marginRight: 10,
  },
});

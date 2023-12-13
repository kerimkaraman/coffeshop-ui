import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { Colors } from "../Globals";
import MenuIcon from "../assets/svg/MenuIcon";
import { LinearGradient } from "expo-linear-gradient";
import SearchIcon from "../assets/svg/SearchIcon";
import { coffee } from "../data";

/* background: linear-gradient(0deg, #21262E, #21262E),
linear-gradient(136.61deg, #21262E 4.28%, rgba(33, 38, 46, 0) 93.52%);
 */

export default function Homepage() {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View style={styles.menuContainer}>
          <LinearGradient
            style={styles.menuBtn}
            colors={["#21262E", "rgba(33, 38, 46, 0)"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0, 1]}
          >
            <MenuIcon />
          </LinearGradient>
          <View>
            <Image
              style={styles.personBtn}
              source={require("../assets/favicon.png")}
            />
          </View>
        </View>
        <View style={styles.headerWrapper}>
          <Text style={styles.header}>Find the best coffee for you</Text>
        </View>
        <View style={styles.textInput}>
          <SearchIcon />
          <TextInput
            placeholder="Find Your Coffee..."
            placeholderTextColor={Colors.lightgrey}
          />
        </View>
        <ScrollView
          style={styles.categoryWrapper}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 20 }}
        >
          {coffee.map((coffeeItem) => {
            const { kategori, kahveId } = coffeeItem;
            return (
              <Text style={styles.categoryItem} key={kahveId}>
                {kategori}
              </Text>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  menuContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  menuBtn: {
    alignSelf: "flex-start",
    padding: 10,
    borderRadius: 10,
    borderColor: Colors.darkgrey,
    borderWidth: 1,
  },
  personBtn: {
    width: 25,
    height: 25,
  },
  headerWrapper: {
    margin: 40,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.white,
    width: "60%",
  },
  textInput: {
    width: "90%",
    flexDirection: "row",
    padding: 15,
    backgroundColor: Colors.darkgrey,
    borderRadius: 10,
    gap: 20,
    alignSelf: "center",
  },
  categoryWrapper: {
    margin: 20,
  },
  categoryItem: {
    color: "white",
    fontWeight: "bold",
  },
});

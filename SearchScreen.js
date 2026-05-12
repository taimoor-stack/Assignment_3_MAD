import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const searchResults = [
  {
    id: "1",
    username: "nature_photography",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    category: "Nature",
  },
  {
    id: "2",
    username: "art_gallery",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    category: "Art",
  },
  {
    id: "3",
    username: "travel_diaries",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    category: "Travel",
  },
  {
    id: "4",
    username: "fitness_motivation",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
    category: "Fitness",
  },
  {
    id: "5",
    username: "foodie_adventures",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    category: "Food",
  },
  {
    id: "6",
    username: "tech_reviews",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    category: "Technology",
  },
];

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredResults, setFilteredResults] = useState(searchResults);

  const handleSearch = (text) => {
    setSearchText(text);
    if (text) {
      const filtered = searchResults.filter(
        (item) =>
          item.username.toLowerCase().includes(text.toLowerCase()) ||
          item.category.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredResults(filtered);
    } else {
      setFilteredResults(searchResults);
    }
  };

  const renderGridItem = ({ item }) => (
    <TouchableOpacity style={styles.gridItem}>
      <Image source={{ uri: item.image }} style={styles.gridImage} />
      <Text style={styles.gridUsername}>{item.username}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Search Header */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="#8e8e8e"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#8e8e8e"
          value={searchText}
          onChangeText={handleSearch}
        />
        {searchText.length > 0 && (
          <TouchableOpacity onPress={() => handleSearch("")}>
            <Ionicons name="close-circle" size={20} color="#8e8e8e" />
          </TouchableOpacity>
        )}
      </View>

      {/* Content */}
      {searchText.length === 0 ? (
        <View style={styles.suggestionsContainer}>
          <Text style={styles.suggestionsTitle}>Suggestions For You</Text>
          <FlatList
            data={searchResults}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.suggestionItem}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.suggestionImage}
                />
                <View style={styles.suggestionInfo}>
                  <Text style={styles.suggestionUsername}>{item.username}</Text>
                  <Text style={styles.suggestionCategory}>{item.category}</Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.followButton}>Follow</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      ) : (
        <FlatList
          data={filteredResults}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={renderGridItem}
          contentContainerStyle={styles.gridContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#efefef",
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 40,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  suggestionsContainer: {
    flex: 1,
    padding: 15,
  },
  suggestionsTitle: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 15,
    color: "#8e8e8e",
  },
  suggestionItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  suggestionImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  suggestionInfo: {
    flex: 1,
    marginLeft: 12,
  },
  suggestionUsername: {
    fontWeight: "bold",
    fontSize: 14,
  },
  suggestionCategory: {
    fontSize: 12,
    color: "#8e8e8e",
  },
  followButton: {
    color: "#0095f6",
    fontWeight: "bold",
    fontSize: 13,
  },
  gridContainer: {
    padding: 2,
  },
  gridItem: {
    flex: 1,
    margin: 2,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    overflow: "hidden",
  },
  gridImage: {
    width: "100%",
    height: 150,
  },
  gridUsername: {
    padding: 8,
    fontSize: 12,
    textAlign: "center",
  },
});

export default SearchScreen;

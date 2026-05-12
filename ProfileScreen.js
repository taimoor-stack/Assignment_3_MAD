import { Ionicons } from "@expo/vector-icons";
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const profile = {
  username: "johndoe",
  name: "John Doe",
  bio: "Photographer 📸 | Traveler 🌍 | Foodie 🍜\nLiving life one moment at a time ✨",
  posts: 124,
  followers: 15420,
  following: 1234,
  profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
};

const gallery = [
  { id: "1", image: "https://picsum.photos/id/1015/200/200" },
  { id: "2", image: "https://picsum.photos/id/104/200/200" },
  { id: "3", image: "https://picsum.photos/id/15/200/200" },
  { id: "4", image: "https://picsum.photos/id/106/200/200" },
  { id: "5", image: "https://picsum.photos/id/20/200/200" },
  { id: "6", image: "https://picsum.photos/id/30/200/200" },
  { id: "7", image: "https://picsum.photos/id/25/200/200" },
  { id: "8", image: "https://picsum.photos/id/35/200/200" },
  { id: "9", image: "https://picsum.photos/id/40/200/200" },
];

const ProfileScreen = () => {
  const renderGalleryItem = ({ item }) => (
    <Image source={{ uri: item.image }} style={styles.galleryImage} />
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.username}>{profile.username}</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.headerIcon}>
              <Ionicons name="add-circle-outline" size={24} color="#262626" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIcon}>
              <Ionicons name="menu-outline" size={24} color="#262626" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Profile Info */}
        <View style={styles.profileInfo}>
          <Image
            source={{ uri: profile.profileImage }}
            style={styles.profileImage}
          />
          <View style={styles.stats}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{profile.posts}</Text>
              <Text style={styles.statLabel}>posts</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>
                {profile.followers.toLocaleString()}
              </Text>
              <Text style={styles.statLabel}>followers</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>
                {profile.following.toLocaleString()}
              </Text>
              <Text style={styles.statLabel}>following</Text>
            </View>
          </View>
        </View>

        {/* Bio */}
        <View style={styles.bioContainer}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.bio}>{profile.bio}</Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.editProfileButton}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareProfileButton}>
            <Text style={styles.shareProfileText}>Share Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Highlights */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.highlights}
        >
          <View style={styles.highlightItem}>
            <View style={styles.highlightCircle}>
              <Ionicons name="add" size={30} color="#262626" />
            </View>
            <Text style={styles.highlightText}>New</Text>
          </View>
          <View style={styles.highlightItem}>
            <View style={styles.highlightCircle}>
              <Image
                source={{ uri: "https://picsum.photos/id/1015/100/100" }}
                style={styles.highlightImage}
              />
            </View>
            <Text style={styles.highlightText}>Travel</Text>
          </View>
          <View style={styles.highlightItem}>
            <View style={styles.highlightCircle}>
              <Image
                source={{ uri: "https://picsum.photos/id/104/100/100" }}
                style={styles.highlightImage}
              />
            </View>
            <Text style={styles.highlightText}>Food</Text>
          </View>
          <View style={styles.highlightItem}>
            <View style={styles.highlightCircle}>
              <Image
                source={{ uri: "https://picsum.photos/id/15/100/100" }}
                style={styles.highlightImage}
              />
            </View>
            <Text style={styles.highlightText}>Nature</Text>
          </View>
        </ScrollView>

        {/* Gallery Tabs */}
        <View style={styles.galleryTabs}>
          <TouchableOpacity style={[styles.galleryTab, styles.activeTab]}>
            <Ionicons name="grid-outline" size={24} color="#262626" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.galleryTab}>
            <Ionicons name="person-outline" size={24} color="#8e8e8e" />
          </TouchableOpacity>
        </View>

        {/* Gallery Grid */}
        <FlatList
          data={gallery}
          keyExtractor={(item) => item.id}
          renderItem={renderGalleryItem}
          numColumns={3}
          scrollEnabled={false}
          contentContainerStyle={styles.galleryGrid}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
  },
  headerIcon: {
    marginLeft: 20,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginTop: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  stats: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: 20,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 14,
    color: "#8e8e8e",
  },
  bioContainer: {
    paddingHorizontal: 15,
    marginTop: 15,
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 5,
  },
  bio: {
    fontSize: 14,
    lineHeight: 20,
  },
  actionButtons: {
    flexDirection: "row",
    paddingHorizontal: 15,
    marginTop: 15,
  },
  editProfileButton: {
    flex: 1,
    backgroundColor: "#efefef",
    paddingVertical: 8,
    borderRadius: 5,
    marginRight: 5,
    alignItems: "center",
  },
  editProfileText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  shareProfileButton: {
    flex: 1,
    backgroundColor: "#efefef",
    paddingVertical: 8,
    borderRadius: 5,
    marginLeft: 5,
    alignItems: "center",
  },
  shareProfileText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  highlights: {
    paddingHorizontal: 15,
    marginTop: 15,
  },
  highlightItem: {
    alignItems: "center",
    marginRight: 15,
  },
  highlightCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: "#dbdbdb",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  highlightImage: {
    width: "100%",
    height: "100%",
  },
  highlightText: {
    marginTop: 5,
    fontSize: 12,
  },
  galleryTabs: {
    flexDirection: "row",
    borderTopWidth: 0.5,
    borderTopColor: "#dbdbdb",
    marginTop: 15,
  },
  galleryTab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 1,
    borderBottomColor: "#262626",
  },
  galleryGrid: {
    padding: 2,
  },
  galleryImage: {
    width: "33.33%",
    aspectRatio: 1,
    borderWidth: 0.5,
    borderColor: "#fff",
  },
});

export default ProfileScreen;

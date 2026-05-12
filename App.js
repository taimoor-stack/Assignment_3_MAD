import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// ==================== SPLASH SCREEN ====================
const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={splashStyles.container}>
      <View style={splashStyles.content}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png",
          }}
          style={splashStyles.logo}
        />
        <Text style={splashStyles.text}>Instagram</Text>
        <ActivityIndicator
          size="large"
          color="#262626"
          style={splashStyles.loader}
        />
      </View>
    </View>
  );
};

// ==================== PAKISTANI DATA ====================
const PAKISTAN_POSTS = [
  {
    id: "1",
    username: "taimoorshaikh_official",
    userImage: "https://randomuser.me/api/portraits/men/32.jpg",
    postImage:
      "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg",
    caption: "Beautiful morning in Karachi! ☀️🇵🇰 #Pakistan #Karachi",
    likes: 1243,
    comments: 89,
    timeAgo: "2 hours ago",
    location: "Karachi, Pakistan",
  },
  {
    id: "2",
    username: "lahore_foodie",
    userImage: "https://randomuser.me/api/portraits/women/44.jpg",
    postImage:
      "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
    caption: "Best Biryani in Lahore! 😋🍚 #LahoreFood #Biryani",
    likes: 2341,
    comments: 156,
    timeAgo: "4 hours ago",
    location: "Lahore, Pakistan",
  },
  {
    id: "3",
    username: "hunza_valley",
    userImage: "https://randomuser.me/api/portraits/men/45.jpg",
    postImage:
      "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg",
    caption: "Northern Pakistan is heaven on earth! 🏔️✨",
    likes: 5678,
    comments: 423,
    timeAgo: "6 hours ago",
    location: "Hunza Valley",
  },
  {
    id: "4",
    username: "taimoorshaikh_official",
    userImage: "https://randomuser.me/api/portraits/men/32.jpg",
    postImage:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    caption: "Working on Java project at Comsain_27 💻 #JavaDeveloper",
    likes: 892,
    comments: 67,
    timeAgo: "8 hours ago",
    location: "Comsain_27, Pakistan",
  },
  {
    id: "5",
    username: "islamabad_scenes",
    userImage: "https://randomuser.me/api/portraits/women/68.jpg",
    postImage:
      "https://images.pexels.com/photos/161224/pexels-photo-161224.jpeg",
    caption: "Faisal Mosque at sunset 🌅 #Islamabad",
    likes: 3456,
    comments: 234,
    timeAgo: "12 hours ago",
    location: "Islamabad, Pakistan",
  },
  {
    id: "6",
    username: "taimoorshaikh_official",
    userImage: "https://randomuser.me/api/portraits/men/32.jpg",
    postImage:
      "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg",
    caption: "Thumbnail design for client 🎨 #ThumbnailDesigner",
    likes: 567,
    comments: 45,
    timeAgo: "1 day ago",
    location: "Pakistan",
  },
];

const PAKISTAN_STORIES = [
  {
    id: "1",
    username: "Your Story",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    isUser: true,
  },
  {
    id: "2",
    username: "lahore_foodie",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "3",
    username: "hunza_valley",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: "4",
    username: "islamabad_scenes",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: "5",
    username: "peshawar_life",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: "6",
    username: "multan_sufi",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
  },
];

const PAKISTAN_USERS = [
  {
    id: "1",
    username: "taimoorshaikh_official",
    name: "Taimoor Shaikh",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    category: "Developer",
  },
  {
    id: "2",
    username: "lahore_foodie",
    name: "Lahore Food Lover",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    category: "Food Blogger",
  },
  {
    id: "3",
    username: "hunza_valley",
    name: "Hunza Explorer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    category: "Travel",
  },
  {
    id: "4",
    username: "islamabad_scenes",
    name: "Islamabad Diaries",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    category: "Lifestyle",
  },
  {
    id: "5",
    username: "peshawar_life",
    name: "Peshawar Vlogs",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    category: "Vlogger",
  },
];

// ==================== STORY COMPONENT ====================
const StoryItem = ({ username, image, isUser }) => (
  <TouchableOpacity style={storyStyles.container}>
    <View style={[storyStyles.ring, isUser && storyStyles.userRing]}>
      <Image source={{ uri: image }} style={storyStyles.image} />
      {isUser && (
        <View style={storyStyles.addIcon}>
          <Ionicons name="add-circle" size={20} color="#0095f6" />
        </View>
      )}
    </View>
    <Text style={storyStyles.username} numberOfLines={1}>
      {username}
    </Text>
  </TouchableOpacity>
);

// ==================== POST COMPONENT ====================
const PostItem = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [saved, setSaved] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <View style={postStyles.container}>
      {/* Header */}
      <View style={postStyles.header}>
        <View style={postStyles.userInfo}>
          <Image
            source={{ uri: post.userImage }}
            style={postStyles.userImage}
          />
          <View>
            <Text style={postStyles.username}>{post.username}</Text>
            <Text style={postStyles.location}>{post.location}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={20} color="#262626" />
        </TouchableOpacity>
      </View>

      {/* Image */}
      <Image source={{ uri: post.postImage }} style={postStyles.image} />

      {/* Actions */}
      <View style={postStyles.actions}>
        <View style={postStyles.leftActions}>
          <TouchableOpacity onPress={handleLike}>
            <Ionicons
              name={liked ? "heart" : "heart-outline"}
              size={28}
              color={liked ? "#E4405F" : "#262626"}
            />
          </TouchableOpacity>
          <TouchableOpacity style={postStyles.actionIcon}>
            <Ionicons name="chatbubble-outline" size={26} color="#262626" />
          </TouchableOpacity>
          <TouchableOpacity style={postStyles.actionIcon}>
            <Ionicons name="paper-plane-outline" size={26} color="#262626" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => setSaved(!saved)}>
          <Ionicons
            name={saved ? "bookmark" : "bookmark-outline"}
            size={26}
            color="#262626"
          />
        </TouchableOpacity>
      </View>

      {/* Likes */}
      <Text style={postStyles.likes}>{likeCount.toLocaleString()} likes</Text>

      {/* Caption */}
      <View style={postStyles.captionContainer}>
        <Text style={postStyles.username}>{post.username}</Text>
        <Text style={postStyles.caption}> {post.caption}</Text>
      </View>

      {/* Comments */}
      <Text style={postStyles.comments}>View all {post.comments} comments</Text>

      {/* Time */}
      <Text style={postStyles.time}>{post.timeAgo}</Text>
    </View>
  );
};

// ==================== HOME SCREEN ====================
const HomeScreen = () => {
  return (
    <SafeAreaView style={screenStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={homeStyles.header}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png",
          }}
          style={homeStyles.logo}
        />
        <View style={homeStyles.headerIcons}>
          <TouchableOpacity style={homeStyles.headerIcon}>
            <Ionicons name="heart-outline" size={26} color="#262626" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="paper-plane-outline" size={26} color="#262626" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Feed */}
      <FlatList
        data={PAKISTAN_POSTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostItem post={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={homeStyles.storiesList}
          >
            {PAKISTAN_STORIES.map((story) => (
              <StoryItem key={story.id} {...story} />
            ))}
          </ScrollView>
        )}
      />
    </SafeAreaView>
  );
};

// ==================== SEARCH SCREEN ====================
const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(PAKISTAN_USERS);

  const handleSearch = (text) => {
    setSearchText(text);
    if (text) {
      const filtered = PAKISTAN_USERS.filter(
        (user) =>
          user.username.toLowerCase().includes(text.toLowerCase()) ||
          user.name.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(PAKISTAN_USERS);
    }
  };

  const renderUser = ({ item }) => (
    <TouchableOpacity style={searchStyles.userItem}>
      <Image source={{ uri: item.image }} style={searchStyles.userImage} />
      <View style={searchStyles.userInfo}>
        <Text style={searchStyles.username}>{item.username}</Text>
        <Text style={searchStyles.name}>{item.name}</Text>
        <Text style={searchStyles.category}>{item.category}</Text>
      </View>
      <TouchableOpacity style={searchStyles.followBtn}>
        <Text style={searchStyles.followText}>Follow</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={screenStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Search Bar */}
      <View style={searchStyles.searchBar}>
        <Ionicons name="search" size={20} color="#8e8e8e" />
        <TextInput
          style={searchStyles.searchInput}
          placeholder="Search Pakistani users..."
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

      {/* Results */}
      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.id}
        renderItem={renderUser}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={searchStyles.list}
      />
    </SafeAreaView>
  );
};

// ==================== PROFILE SCREEN ====================
const ProfileScreen = () => {
  const [following, setFollowing] = useState(false);

  const profile = {
    username: "taimoorshaikh_official",
    name: "Taimoor Shaikh",
    bio: "Digital creator | Java Developer | Web Dev | Thumbnail Designer\n📍 Comsain_27, Pakistan",
    posts: 25,
    followers: 451,
    following: 88,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    website: "linkedin.com/in/taimoorstackpro",
  };

  const gallery = [
    "https://picsum.photos/id/104/200/200",
    "https://picsum.photos/id/106/200/200",
    "https://picsum.photos/id/15/200/200",
    "https://picsum.photos/id/1015/200/200",
    "https://picsum.photos/id/20/200/200",
    "https://picsum.photos/id/30/200/200",
    "https://picsum.photos/id/25/200/200",
    "https://picsum.photos/id/35/200/200",
    "https://picsum.photos/id/40/200/200",
  ];

  const renderGallery = ({ item }) => (
    <Image source={{ uri: item }} style={profileStyles.galleryImage} />
  );

  return (
    <SafeAreaView style={screenStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={profileStyles.header}>
          <Text style={profileStyles.username}>{profile.username}</Text>
          <View style={profileStyles.headerIcons}>
            <TouchableOpacity style={profileStyles.headerIcon}>
              <Ionicons name="add-circle-outline" size={24} color="#262626" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="menu-outline" size={24} color="#262626" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Profile Info */}
        <View style={profileStyles.info}>
          <Image source={{ uri: profile.image }} style={profileStyles.avatar} />
          <View style={profileStyles.stats}>
            <View style={profileStyles.stat}>
              <Text style={profileStyles.statNumber}>{profile.posts}</Text>
              <Text style={profileStyles.statLabel}>posts</Text>
            </View>
            <TouchableOpacity
              style={profileStyles.stat}
              onPress={() => setFollowing(!following)}
            >
              <Text style={profileStyles.statNumber}>
                {following ? profile.followers + 1 : profile.followers}
              </Text>
              <Text style={profileStyles.statLabel}>followers</Text>
            </TouchableOpacity>
            <View style={profileStyles.stat}>
              <Text style={profileStyles.statNumber}>{profile.following}</Text>
              <Text style={profileStyles.statLabel}>following</Text>
            </View>
          </View>
        </View>

        {/* Bio */}
        <View style={profileStyles.bio}>
          <Text style={profileStyles.name}>{profile.name}</Text>
          <Text style={profileStyles.bioText}>{profile.bio}</Text>
          <TouchableOpacity>
            <Text style={profileStyles.website}>{profile.website}</Text>
          </TouchableOpacity>
        </View>

        {/* Buttons */}
        <View style={profileStyles.buttons}>
          <TouchableOpacity
            style={profileStyles.editBtn}
            onPress={() => setFollowing(!following)}
          >
            <Text style={profileStyles.editBtnText}>
              {following ? "Following" : "Follow"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={profileStyles.messageBtn}>
            <Text style={profileStyles.messageBtnText}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity style={profileStyles.contactBtn}>
            <Ionicons name="person-add-outline" size={20} color="#262626" />
          </TouchableOpacity>
        </View>

        {/* Highlights */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={profileStyles.highlights}
        >
          <View style={profileStyles.highlight}>
            <View style={profileStyles.highlightCircle}>
              <Ionicons name="add" size={30} color="#262626" />
            </View>
            <Text style={profileStyles.highlightText}>New</Text>
          </View>
          <View style={profileStyles.highlight}>
            <View style={profileStyles.highlightCircle}>
              <Image
                source={{ uri: "https://picsum.photos/id/104/100/100" }}
                style={profileStyles.highlightImage}
              />
            </View>
            <Text style={profileStyles.highlightText}>Coding</Text>
          </View>
          <View style={profileStyles.highlight}>
            <View style={profileStyles.highlightCircle}>
              <Image
                source={{ uri: "https://picsum.photos/id/106/100/100" }}
                style={profileStyles.highlightImage}
              />
            </View>
            <Text style={profileStyles.highlightText}>Design</Text>
          </View>
        </ScrollView>

        {/* Gallery Tabs */}
        <View style={profileStyles.tabs}>
          <View style={[profileStyles.tab, profileStyles.activeTab]}>
            <Ionicons name="grid-outline" size={24} color="#262626" />
          </View>
          <View style={profileStyles.tab}>
            <Ionicons name="person-outline" size={24} color="#8e8e8e" />
          </View>
        </View>

        {/* Gallery */}
        <FlatList
          data={gallery}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderGallery}
          numColumns={3}
          scrollEnabled={false}
          contentContainerStyle={profileStyles.gallery}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

// ==================== MAIN APP ====================
const Tab = createBottomTabNavigator();

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home")
              iconName = focused ? "home" : "home-outline";
            else if (route.name === "Search")
              iconName = focused ? "search" : "search-outline";
            else iconName = focused ? "person" : "person-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#262626",
          tabBarInactiveTintColor: "#8e8e8e",
          headerShown: false,
          tabBarStyle: {
            borderTopWidth: 0.5,
            borderTopColor: "#dbdbdb",
            height: 50,
            paddingBottom: 5,
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// ==================== STYLES ====================
const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#262626",
    marginBottom: 30,
  },
  loader: {
    marginTop: 20,
  },
});

const screenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

const homeStyles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#dbdbdb",
  },
  logo: {
    width: 110,
    height: 35,
    resizeMode: "contain",
  },
  headerIcons: {
    flexDirection: "row",
  },
  headerIcon: {
    marginRight: 20,
  },
  storiesList: {
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#dbdbdb",
  },
});

const storyStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 8,
  },
  ring: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#E4405F",
    padding: 2,
    marginBottom: 5,
  },
  userRing: {
    borderColor: "#8a8a8a",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 35,
  },
  addIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  username: {
    fontSize: 12,
    color: "#262626",
  },
});

const postStyles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#262626",
  },
  location: {
    fontSize: 11,
    color: "#8e8e8e",
    marginTop: 2,
  },
  image: {
    width: "100%",
    height: 400,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  leftActions: {
    flexDirection: "row",
  },
  actionIcon: {
    marginLeft: 16,
  },
  likes: {
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 12,
    marginBottom: 5,
  },
  captionContainer: {
    flexDirection: "row",
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 5,
  },
  caption: {
    fontSize: 14,
    color: "#262626",
    flex: 1,
  },
  comments: {
    marginLeft: 12,
    color: "#8e8e8e",
    fontSize: 13,
    marginBottom: 3,
  },
  time: {
    marginLeft: 12,
    color: "#8e8e8e",
    fontSize: 10,
    marginBottom: 8,
  },
});

const searchStyles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#efefef",
    margin: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    height: 44,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  list: {
    paddingHorizontal: 15,
  },
  userItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#efefef",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    flex: 1,
    marginLeft: 12,
  },
  username: {
    fontWeight: "bold",
    fontSize: 14,
  },
  name: {
    fontSize: 13,
    color: "#262626",
    marginTop: 2,
  },
  category: {
    fontSize: 11,
    color: "#8e8e8e",
    marginTop: 1,
  },
  followBtn: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    backgroundColor: "#0095f6",
    borderRadius: 5,
  },
  followText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
});

const profileStyles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  username: {
    fontSize: 22,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
  },
  headerIcon: {
    marginRight: 20,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginTop: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  stats: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  stat: {
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
  bio: {
    paddingHorizontal: 15,
    marginTop: 15,
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 5,
  },
  bioText: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 5,
  },
  website: {
    fontSize: 13,
    color: "#00376b",
  },
  buttons: {
    flexDirection: "row",
    paddingHorizontal: 15,
    marginTop: 15,
  },
  editBtn: {
    flex: 2,
    backgroundColor: "#efefef",
    paddingVertical: 8,
    borderRadius: 5,
    marginRight: 5,
    alignItems: "center",
  },
  editBtnText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  messageBtn: {
    flex: 2,
    backgroundColor: "#efefef",
    paddingVertical: 8,
    borderRadius: 5,
    marginLeft: 5,
    alignItems: "center",
  },
  messageBtnText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  contactBtn: {
    backgroundColor: "#efefef",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  highlights: {
    paddingHorizontal: 15,
    marginTop: 15,
  },
  highlight: {
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
  tabs: {
    flexDirection: "row",
    borderTopWidth: 0.5,
    borderTopColor: "#dbdbdb",
    marginTop: 15,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 1,
    borderBottomColor: "#262626",
  },
  gallery: {
    padding: 2,
  },
  galleryImage: {
    width: "33.33%",
    aspectRatio: 1,
    borderWidth: 0.5,
    borderColor: "#fff",
  },
});

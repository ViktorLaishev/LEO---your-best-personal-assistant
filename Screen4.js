// import React from "react";
// import { StyleSheet, ScrollView, Text } from "react-native";
// import { Avatar, Card } from "react-native-elements";
// import { name, bio, interests } from "../utils/UserContext";

// const userInfo = {
//   name: "User's name",
//   bio: "User's short bio",
//   interests: ["Interest1", "Interest2", "Interest3"],
//   profilePhoto: require("./photo.jpg"), // Replace with your image file
// };

// export default function Screen4() {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Avatar
//         containerStyle={styles.avatar}
//         size="xlarge"
//         rounded
//         source={userInfo.profilePhoto}
//       />

//       <Card containerStyle={styles.cardStyle}>
//         <Card.Title>{name}</Card.Title>
//         <Text style={styles.cardContent}>{userInfo.name}</Text>
//       </Card>

//       <Card containerStyle={styles.cardStyle}>
//         <Card.Title>{bio}</Card.Title>
//         <Text style={styles.cardContent}>{userInfo.bio}</Text>
//       </Card>

//       {userInfo.interests.map((interest, index) => (
//         <Card key={index} containerStyle={styles.cardStyle}>
//           <Card.Title>{`Interest ${index + 1}`}</Card.Title>
//           <Text style={styles.cardContent}>{interest}</Text>
//         </Card>
//       ))}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: "center",
//     paddingTop: 20,
//   },
//   avatar: {
//     marginBottom: 30,
//   },
//   cardStyle: {
//     width: "90%",
//     borderRadius: 15,
//   },
//   cardContent: {
//     textAlign: "center",
//     marginTop: 10,
//     fontSize: 18,
//   },
// });
import React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import { Avatar, Card } from "react-native-elements";
import { useRoute } from "@react-navigation/native";

const Screen4 = () => {
  const route = useRoute();

  // Check if route.params is defined and has the expected properties
  if (
    !route.params ||
    !route.params.name ||
    !route.params.bio ||
    !route.params.interests
  ) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text>Error: User information not found.</Text>
      </ScrollView>
    );
  }

  // Destructure route.params to access user information
  const { name, bio, interests } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Avatar
        containerStyle={styles.avatar}
        size="xlarge"
        rounded
        source={require("./photo.jpg")}
      />

      <Card containerStyle={styles.cardStyle}>
        <Card.Title>Name</Card.Title>
        <Text style={styles.cardContent}>{name}</Text>
      </Card>

      <Card containerStyle={styles.cardStyle}>
        <Card.Title>Bio</Card.Title>
        <Text style={styles.cardContent}>{bio}</Text>
      </Card>

      {interests.map((interest, index) => (
        <Card key={index} containerStyle={styles.cardStyle}>
          <Card.Title>{`Interest ${index + 1}`}</Card.Title>
          <Text style={styles.cardContent}>{interest}</Text>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 20,
  },
  avatar: {
    marginBottom: 30,
  },
  cardStyle: {
    width: "90%",
    borderRadius: 15,
  },
  cardContent: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 18,
  },
});

export default Screen4;
// Screen4.js

// Screen4.js

// import React from "react";
// import { View, Text } from "react-native";
// import { useRoute } from "@react-navigation/native";

// const Screen4 = () => {
//   const route = useRoute();

//   // Check if route.params is defined and has the expected properties
//   if (
//     !route.params ||
//     !route.params.name ||
//     !route.params.bio ||
//     !route.params.interests
//   ) {
//     return (
//       <View>
//         <Text>Error: User information not found.</Text>
//       </View>
//     );
//   }

//   // Destructure route.params to access user information
//   const { name, bio, interests } = route.params;

//   return (
//     <View>
//       {/* Display user data */}
//       <Text>Name: {name}</Text>
//       <Text>Bio: {bio}</Text>
//       <Text>Interests: {interests.join(", ")}</Text>
//     </View>
//   );
// };

// export default Screen4;

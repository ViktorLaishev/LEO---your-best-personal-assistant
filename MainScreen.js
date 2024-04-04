// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { AntDesign } from "@expo/vector-icons";
// import ProfileScreen from "./ProfileScreen"; // Import ProfileScreen
// import { Image } from "react-native";

// import Screen1 from "./Screen1";
// import Screen2 from "./Screen2";
// import Screen3 from "./Screen3";
// import Screen4 from "./Screen4";

// const Tab = createBottomTabNavigator();

// export default function MainScreen() {
//   return (
//     <Tab.Navigator
//       tabBarOptions={{
//         style: {
//           backgroundColor: "black",
//           height: "10%",
//         },
//       }}
//     >
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           tabBarIcon: () => (
//             <Image
//               source={require("../screens/photo.jpg")} // Replace with your photo path
//               style={{ width: 30, height: 30 }} // Adjust size as needed
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Screen1"
//         component={Screen1}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <AntDesign
//               name={focused ? "home" : "home"}
//               size={25}
//               color={focused ? "blue" : "black"}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Screen2"
//         component={Screen2}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <AntDesign
//               name={focused ? "search1" : "search1"}
//               size={25}
//               color={focused ? "blue" : "black"}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Screen3"
//         component={Screen3}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <AntDesign
//               name={focused ? "pluscircleo" : "pluscircleo"}
//               size={25}
//               color={focused ? "blue" : "black"}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Screen4"
//         component={Screen4}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <AntDesign
//               name={focused ? "user" : "user"}
//               size={25}
//               color={focused ? "blue" : "black"}
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

//Normal
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import ProfileScreen from "./ProfileScreen";
import { Image } from "react-native";

import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: "black",
          height: "10%",
        },
      }}
      swipeEnabled={true} // Enable swiping between tabs
    >
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../screens/photo.jpg")}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Screen1"
        component={Screen1}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name={focused ? "home" : "home"}
              size={25}
              color={focused ? "blue" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Screen2"
        component={Screen2}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name={focused ? "search1" : "search1"}
              size={25}
              color={focused ? "blue" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Screen3"
        component={Screen3}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name={focused ? "pluscircleo" : "pluscircleo"}
              size={25}
              color={focused ? "blue" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Screen4"
        component={Screen4}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name={focused ? "user" : "user"}
              size={25}
              color={focused ? "blue" : "black"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// ChatGPT integration:
// import React, { useState } from "react";
// import {
//   View,
//   TextInput,
//   Button,
//   Text,
//   ScrollView,
//   StyleSheet,
// } from "react-native";

// export default function MainScreen() {
//   const [userInput, setUserInput] = useState(""); // State to store user input
//   const [chatHistory, setChatHistory] = useState([]); // State to store chat history

//   const sendMessage = async () => {
//     try {
//       // Call your backend API to interact with ChatGPT
//       const response = await fetch("https://api.openai.com/v1/completions", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization:
//             "Bearer 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",
//         },
//         body: JSON.stringify({
//           model: "gpt-3.5-turbo", // Choose the appropriate model
//           prompt: userInput,
//           max_tokens: 150, // Adjust as needed
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to send message to ChatGPT");
//       }

//       // Receive response from the backend API (response from ChatGPT)
//       const data = await response.json();

//       // Update the chat history with the response
//       setChatHistory([
//         ...chatHistory,
//         { role: "user", content: userInput },
//         { role: "assistant", content: data.choices[0].text },
//       ]);

//       // Clear user input
//       setUserInput("");
//     } catch (error) {
//       console.error("An error occurred:", error.message);
//       // Handle error gracefully, e.g., display an error message to the user
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Render chat history */}
//       <ScrollView style={styles.chatContainer}>
//         {chatHistory.map((message, index) => (
//           <View
//             key={index}
//             style={
//               message.role === "user"
//                 ? styles.userMessage
//                 : styles.assistantMessage
//             }
//           >
//             <Text>{message.content}</Text>
//           </View>
//         ))}
//       </ScrollView>

//       {/* Text input for user to type messages */}
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.textInput}
//           placeholder="Type your message..."
//           value={userInput}
//           onChangeText={(text) => setUserInput(text)}
//         />

//         {/* Button to send message */}
//         <Button title="Send" onPress={sendMessage} />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   chatContainer: {
//     flex: 1,
//     marginBottom: 10,
//   },
//   userMessage: {
//     backgroundColor: "#eaeaea",
//     padding: 10,
//     marginBottom: 5,
//     alignSelf: "flex-start",
//     maxWidth: "80%",
//   },
//   assistantMessage: {
//     backgroundColor: "#007bff",
//     color: "#ffffff",
//     padding: 10,
//     marginBottom: 5,
//     alignSelf: "flex-end",
//     maxWidth: "80%",
//   },
//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   textInput: {
//     flex: 1,
//     borderWidth: 1,
//     padding: 10,
//     marginRight: 10,
//   },
// });

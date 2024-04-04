import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";
import OpenAI from "https://deno.land/x/openai@v4.32.2/mod.ts";

const openai = new OpenAI("YOUR_API_KEY");

export default function Screen3() {
  const [userInput, setUserInput] = useState(""); // State to store user input
  const [chatHistory, setChatHistory] = useState([]); // State to store chat history

  const sendMessage = async () => {
    try {
      // Add user's message to chat history
      setChatHistory([...chatHistory, { role: "user", content: userInput }]);

      // Get response from ChatGPT
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant designed to output JSON.",
          },
          { role: "user", content: userInput },
        ],
        model: "gpt-3.5-turbo",
        response_format: { type: "json_object" },
      });

      // Add ChatGPT's response to chat history
      setChatHistory([
        ...chatHistory,
        { role: "assistant", content: completion.choices[0].message.content },
      ]);

      // Clear user input
      setUserInput("");
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Render chat history */}
      <ScrollView style={styles.chatContainer}>
        {chatHistory.map((message, index) => (
          <View
            key={index}
            style={
              message.role === "user"
                ? styles.userMessage
                : styles.assistantMessage
            }
          >
            <Text>{message.content}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Text input for user to type messages */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type your message..."
          value={userInput}
          onChangeText={(text) => setUserInput(text)}
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  chatContainer: {
    flex: 1,
    marginBottom: 10,
  },
  userMessage: {
    backgroundColor: "#eaeaea",
    padding: 10,
    marginBottom: 5,
    alignSelf: "flex-start",
    maxWidth: "80%",
  },
  assistantMessage: {
    backgroundColor: "#007bff",
    color: "#ffffff",
    padding: 10,
    marginBottom: 5,
    alignSelf: "flex-end",
    maxWidth: "80%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
  },
});

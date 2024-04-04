import React, { useState } from "react";
import { Avatar, Button } from "react-native-elements";
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { Card } from "react-native-elements";

const image1 = require("./photo.jpg");
const image2 = require("./photo.jpg");
const image3 = require("./photo.jpg");
const image4 = require("./photo.jpg");
const image5 = require("./photo.jpg");
const image6 = require("./photo.jpg");
const image7 = require("./photo.jpg");
const image8 = require("./photo.jpg");
const image9 = require("./photo.jpg");
const image10 = require("./photo.jpg");
const image11 = require("./photo.jpg");
const image12 = require("./photo.jpg");
const image13 = require("./photo.jpg");
const image14 = require("./photo.jpg");

const activitiesData = [
  {
    title: "Activity 1",
    details: "Details for Activity 1...",
    participants: [image1, image2, image3],
  },
  {
    title: "Activity 2",
    details: "Details for Activity 1...",
    participants: [image1, image2, image3],
  },
  {
    title: "Activity 3",
    details: "Details for Activity 1...",
    participants: [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      image11,
      image12,
      image13,
      image14,
    ],
  },
  {
    title: "Activity 4",
    details: "Details for Activity 1...",
    participants: [image1, image2, image3],
  },
  // Add more activities here...
];

export default function Screen2() {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleDetails = (index) => {
    setActiveIndexes((prevIndexes) => {
      // If the index is already active, remove it from the active indexes
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((i) => i !== index);
      }

      // Otherwise, add the index to the active indexes.
      return [...prevIndexes, index];
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {activitiesData.map((activity, index) => (
        <TouchableOpacity key={index} onPress={() => toggleDetails(index)}>
          <Card containerStyle={styles.card}>
            <Card.Title>{activity.title}</Card.Title>
            <Card.Divider />
            {activeIndexes.includes(index) && (
              <View>
                <Text style={styles.details}>{activity.details}</Text>
                <ScrollView horizontal style={styles.participantAvatars}>
                  {activity.participants.map((participant, idx) => (
                    <Avatar
                      key={idx}
                      size={"small"}
                      rounded
                      source={{ uri: participant }}
                      containerStyle={styles.avatar}
                    />
                  ))}
                </ScrollView>
                <Button title="Participate" />
              </View>
            )}
          </Card>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  card: {
    width: "93%",
    borderRadius: 15,
  },
  details: {
    fontSize: 16,
  },
});

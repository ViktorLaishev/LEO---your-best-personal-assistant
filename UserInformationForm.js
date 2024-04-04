import React, { useState, useContext } from "react";
import { View, TextInput, Button } from "react-native";
import { AuthContext } from "../utils/AuthContext";

export default function UserInformationForm() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [interests, setInterests] = useState([]);
  const { setUserInformation } = useContext(AuthContext);

  const handleSubmit = () => {
    setUserInformation({ name, bio, interests });
  };

  return (
    <View>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Enter your bio"
        value={bio}
        onChangeText={setBio}
      />
      <TextInput
        placeholder="Enter your interests"
        value={interests}
        onChangeText={setInterests}
        multiline
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

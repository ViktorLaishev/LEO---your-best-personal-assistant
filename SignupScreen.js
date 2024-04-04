// import React, { useState, useContext } from "react";
// import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
// import { AuthContext } from "../utils/AuthContext";
// import Background from "../components/Background";
// import { Title } from "../components/StyledText";
// import RNSButton from "../components/Button";
// import RNSTextInput from "../components/TextInput";

// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState("");
//   const { signUp } = useContext(AuthContext);

//   const handleLogin = async () => {
//     setError(""); // Clear error
//     setIsSubmitting(true);
//     try {
//       await signUp({ email, password });
//       // onSuccess: The navigation is handled by the AuthContext and App.js
//     } catch (error) {
//       setError(
//         "Failed to sign up. Please check your credentials and try again.",
//       );
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <Background>
//       <View style={styles.container}>
//         <Title style={styles.title} white bold size={32}>
//           Register
//         </Title>
//         {error ? <Text style={styles.error}>{error}</Text> : null}
//         <RNSTextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           autoCapitalize="none"
//         />
//         <RNSTextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//         />
//         {isSubmitting ? (
//           <ActivityIndicator />
//         ) : (
//           <RNSButton caption="Sign Up" onPress={handleLogin} primary />
//         )}
//         <View style={{ height: 10 }} />
//         <RNSButton
//           caption="back to login"
//           onPress={() => navigation.goBack()}
//           secondary
//         />
//       </View>
//     </Background>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 20,
//   },
//   title: {
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   input: {
//     marginBottom: 10,
//     padding: 10,
//   },
//   error: {
//     color: "red",
//     marginBottom: 10,
//   },
// });

// export default LoginScreen;
// import React, { useState, useContext } from "react";
// import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
// import { AuthContext } from "../utils/AuthContext";
// import Background from "../components/Background";
// import { Title } from "../components/StyledText";
// import RNSButton from "../components/Button";
// import RNSTextInput from "../components/TextInput";

// const SignupScreen = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [interests, setInterests] = useState("");
//   const [bio, setBio] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState("");
//   const { signUp } = useContext(AuthContext);

//   const handleSignUp = async () => {
//     setError(""); // Clear error
//     setIsSubmitting(true);
//     try {
//       await signUp({ email, password, interests, bio });
//       // onSuccess: The navigation is handled by the AuthContext and App.js
//     } catch (error) {
//       setError(
//         "Failed to sign up. Please check your credentials and try again.",
//       );
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <Background>
//       <View style={styles.container}>
//         <Title style={styles.title} white bold size={32}>
//           Register
//         </Title>
//         {error ? <Text style={styles.error}>{error}</Text> : null}
//         <RNSTextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           autoCapitalize="none"
//         />
//         <RNSTextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//         />
//         <RNSTextInput
//           style={styles.input}
//           placeholder="Interests"
//           value={interests}
//           onChangeText={setInterests}
//         />
//         <RNSTextInput
//           style={styles.input}
//           placeholder="Bio"
//           value={bio}
//           onChangeText={setBio}
//         />
//         {isSubmitting ? (
//           <ActivityIndicator />
//         ) : (
//           <RNSButton caption="Sign Up" onPress={handleSignUp} primary />
//         )}
//         <View style={{ height: 10 }} />
//         <RNSButton
//           caption="back to login"
//           onPress={() => navigation.goBack()}
//           secondary
//         />
//       </View>
//     </Background>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 20,
//   },
//   title: {
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   input: {
//     marginBottom: 10,
//     padding: 10,
//   },
//   error: {
//     color: "red",
//     marginBottom: 10,
//   },
// });

// export default SignupScreen;
// import React, { useState, useContext } from "react";
// import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
// import { AuthContext } from "../utils/AuthContext";
// import Background from "../components/Background";
// import { Title } from "../components/StyledText";
// import RNSButton from "../components/Button";
// import RNSTextInput from "../components/TextInput";

// const SignupScreen = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [interests, setInterests] = useState("");
//   const [bio, setBio] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState("");
//   const { signUp } = useContext(AuthContext);

//   const handleSignUp = async () => {
//     setError(""); // Clear error
//     if (!email || !password || !interests || !bio) {
//       setError("Please fill in all fields.");
//       return;
//     }
//     setIsSubmitting(true);
//     try {
//       await signUp({ email, password, interests, bio });
//       // onSuccess: The navigation is handled by the AuthContext and App.js
//     } catch (error) {
//       setError(
//         "Failed to sign up. Please check your credentials and try again.",
//       );
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <Background>
//       <View style={styles.container}>
//         <Title style={styles.title} white bold size={32}>
//           Register
//         </Title>
//         {error ? <Text style={styles.error}>{error}</Text> : null}
//         <RNSTextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           autoCapitalize="none"
//         />
//         <RNSTextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//         />
//         <RNSTextInput
//           style={styles.input}
//           placeholder="Interests"
//           value={interests}
//           onChangeText={setInterests}
//         />
//         <RNSTextInput
//           style={styles.input}
//           placeholder="Bio"
//           value={bio}
//           onChangeText={setBio}
//         />
//         {isSubmitting ? (
//           <ActivityIndicator />
//         ) : (
//           <RNSButton caption="Sign Up" onPress={handleSignUp} primary />
//         )}
//         <View style={{ height: 10 }} />
//         <RNSButton
//           caption="back to login"
//           onPress={() => navigation.goBack()}
//           secondary
//         />
//       </View>
//     </Background>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 20,
//   },
//   title: {
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   input: {
//     marginBottom: 10,
//     padding: 10,
//   },
//   error: {
//     color: "red",
//     marginBottom: 10,
//   },
// });

// export default SignupScreen;
// import React, { useState, useContext } from "react";
// import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
// import { AuthContext } from "../utils/AuthContext";
// import Background from "../components/Background";
// import { Title } from "../components/StyledText";
// import RNSButton from "../components/Button";
// import RNSTextInput from "../components/TextInput";

// const SignupScreen = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [interests, setInterests] = useState([""]);
//   const [bio, setBio] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState("");
//   const { signUp } = useContext(AuthContext);

//   const handleSignUp = async () => {
//     setError(""); // Clear error
//     if (
//       !email ||
//       !password ||
//       interests.some((interest) => interest.trim() === "") ||
//       !bio
//     ) {
//       setError("Please fill in all fields.");
//       return;
//     }
//     setIsSubmitting(true);
//     try {
//       await signUp({ email, password, interests, bio });
//       // onSuccess: The navigation is handled by the AuthContext and App.js
//     } catch (error) {
//       setError(
//         "Failed to sign up. Please check your credentials and try again.",
//       );
//       setIsSubmitting(false);
//     }
//   };

//   const addInterestField = () => {
//     setInterests([...interests, ""]);
//   };

//   const updateInterest = (index, value) => {
//     const updatedInterests = [...interests];
//     updatedInterests[index] = value;
//     setInterests(updatedInterests);
//   };

//   return (
//     <Background>
//       <View style={styles.container}>
//         <Title style={styles.title} white bold size={32}>
//           Register
//         </Title>
//         {error ? <Text style={styles.error}>{error}</Text> : null}
//         <RNSTextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           autoCapitalize="none"
//         />
//         <RNSTextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//         />
//         {interests.map((interest, index) => (
//           <RNSTextInput
//             key={index}
//             style={styles.input}
//             placeholder={`Interest ${index + 1}`}
//             value={interest}
//             onChangeText={(value) => updateInterest(index, value)}
//           />
//         ))}
//         <RNSButton
//           caption="Enter one more interest"
//           onPress={addInterestField}
//           secondary
//         />
//         <RNSTextInput
//           style={styles.input}
//           placeholder="Bio"
//           value={bio}
//           onChangeText={setBio}
//         />
//         {isSubmitting ? (
//           <ActivityIndicator />
//         ) : (
//           <RNSButton caption="Sign Up" onPress={handleSignUp} primary />
//         )}
//         <View style={{ height: 10 }} />
//         <RNSButton
//           caption="back to login"
//           onPress={() => navigation.goBack()}
//           secondary
//         />
//       </View>
//     </Background>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 20,
//   },
//   title: {
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   input: {
//     marginBottom: 10,
//     padding: 10,
//   },
//   error: {
//     color: "red",
//     marginBottom: 10,
//   },
// });

// export default SignupScreen;
// import React, { useState, useContext } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ActivityIndicator,
//   ScrollView,
// } from "react-native";
// import { AuthContext } from "../utils/AuthContext";
// import Background from "../components/Background";
// import { Title } from "../components/StyledText";
// import RNSButton from "../components/Button";
// import RNSTextInput from "../components/TextInput";

// const SignupScreen = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [interests, setInterests] = useState([""]);
//   const [bio, setBio] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState("");
//   const { signUp } = useContext(AuthContext);

//   const handleSignUp = async () => {
//     setError(""); // Clear error
//     if (
//       !email ||
//       !password ||
//       interests.some((interest) => interest.trim() === "") ||
//       !bio
//     ) {
//       setError("Please fill in all fields.");
//       return;
//     }
//     setIsSubmitting(true);
//     try {
//       await signUp({ email, password, interests, bio });
//       // onSuccess: The navigation is handled by the AuthContext and App.js
//     } catch (error) {
//       setError(
//         "Failed to sign up. Please check your credentials and try again.",
//       );
//       setIsSubmitting(false);
//     }
//   };

//   const addInterestField = () => {
//     setInterests([...interests, ""]);
//   };

//   const updateInterest = (index, value) => {
//     const updatedInterests = [...interests];
//     updatedInterests[index] = value;
//     setInterests(updatedInterests);
//   };

//   return (
//     <Background>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <View style={styles.container}>
//           <Title style={styles.title} white bold size={32}>
//             Register
//           </Title>
//           {error ? <Text style={styles.error}>{error}</Text> : null}
//           <RNSTextInput
//             style={styles.input}
//             placeholder="Email"
//             value={email}
//             onChangeText={setEmail}
//             keyboardType="email-address"
//             autoCapitalize="none"
//           />
//           <RNSTextInput
//             style={styles.input}
//             placeholder="Password"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry
//           />
//           {interests.map((interest, index) => (
//             <RNSTextInput
//               key={index}
//               style={styles.input}
//               placeholder={`Interest ${index + 1}`}
//               value={interest}
//               onChangeText={(value) => updateInterest(index, value)}
//             />
//           ))}
//           <RNSButton
//             caption="Add Interests"
//             onPress={addInterestField}
//             primary
//           />

//           <RNSTextInput
//             style={styles.input}
//             placeholder="Bio"
//             value={bio}
//             onChangeText={setBio}
//           />
//           {isSubmitting ? (
//             <ActivityIndicator />
//           ) : (
//             <RNSButton caption="Sign Up" onPress={handleSignUp} primary />
//           )}
//           <View style={{ height: 10 }} />
//           <RNSButton
//             caption="back to login"
//             onPress={() => navigation.goBack()}
//             secondary
//           />
//         </View>
//       </ScrollView>
//     </Background>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flexGrow: 1,
//     justifyContent: "center",
//   },
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 20,
//   },
//   title: {
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   input: {
//     marginBottom: 10,
//     padding: 10,
//   },
//   error: {
//     color: "red",
//     marginBottom: 10,
//   },
// });

// export default SignupScreen;
// import React, { useState, useContext } from "react";
// import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
// import { AuthContext } from "../utils/AuthContext";
// import Background from "../components/Background";
// import { Title } from "../components/StyledText";
// import RNSButton from "../components/Button";
// import RNSTextInput from "../components/TextInput";

// const SignUpScreen = ({ navigation }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [interests, setInterests] = useState([""]);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState("");
//   const { signUp } = useContext(AuthContext);

//   const handleAddInterest = () => {
//     setInterests([...interests, ""]);
//   };

//   const handleInterestChange = (value, index) => {
//     const newInterests = [...interests];
//     newInterests[index] = value;
//     setInterests(newInterests);
//   };

//   const handleSignUp = async () => {
//     setError(""); // Clear error
//     setIsSubmitting(true);
//     try {
//       await signUp({ name, email, password, interests });
//       // onSuccess: The navigation is handled by the AuthContext and App.js
//     } catch (error) {
//       setError(
//         "Failed to sign up. Please check your credentials and try again.",
//       );
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <Background>
//       <View style={styles.container}>
//         <Title style={styles.title} white bold size={32}>
//           Register
//         </Title>
//         {error ? <Text style={styles.error}>{error}</Text> : null}
//         <RNSTextInput
//           style={styles.input}
//           placeholder="Name"
//           value={name}
//           onChangeText={setName}
//         />
//         <RNSTextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           autoCapitalize="none"
//         />
//         <RNSTextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//         />
//         <Text style={styles.subtitle}>Interests:</Text>
//         {interests.map((interest, index) => (
//           <RNSTextInput
//             key={index}
//             style={styles.input}
//             placeholder={`Interest ${index + 1}`}
//             value={interest}
//             onChangeText={(value) => handleInterestChange(value, index)}
//           />
//         ))}
//         <RNSButton caption="Add Interest" onPress={handleAddInterest} primary />
//         {isSubmitting ? (
//           <ActivityIndicator />
//         ) : (
//           <RNSButton caption="Sign Up" onPress={handleSignUp} primary />
//         )}
//         <View style={{ height: 10 }} />
//         <RNSButton
//           caption="Back to Login"
//           onPress={() => navigation.goBack()}
//           secondary
//         />
//       </View>
//     </Background>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 20,
//   },
//   title: {
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   subtitle: {
//     marginTop: 10,
//     marginBottom: 5,
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "white",
//   },
//   input: {
//     marginBottom: 10,
//     padding: 10,
//   },
//   error: {
//     color: "red",
//     marginBottom: 10,
//   },
// });

// export default SignUpScreen;
// import React, { useState, useContext } from "react";
// import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
// import { AuthContext } from "../utils/AuthContext";
// import Background from "../components/Background";
// import { Title } from "../components/StyledText";
// import RNSButton from "../components/Button";
// import RNSTextInput from "../components/TextInput";

// const SignUpScreen = ({ navigation }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [interests, setInterests] = useState([""]);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState("");
//   const { signUp } = useContext(AuthContext);

//   const handleAddInterest = () => {
//     setInterests([...interests, ""]);
//   };

//   const handleInterestChange = (value, index) => {
//     const newInterests = [...interests];
//     newInterests[index] = value;
//     setInterests(newInterests);
//   };

//   const handleSignUp = async () => {
//     setError(""); // Clear error
//     setIsSubmitting(true);
//     try {
//       await signUp({ name, email, password, interests });
//       // onSuccess: The navigation is handled by the AuthContext and App.js
//     } catch (error) {
//       setError(
//         "Failed to sign up. Please check your credentials and try again.",
//       );
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <Background>
//       <View style={styles.container}>
//         <Title style={styles.title} white bold size={32}>
//           Register
//         </Title>
//         {error ? <Text style={styles.error}>{error}</Text> : null}
//         <RNSTextInput
//           style={styles.input}
//           placeholder="Name"
//           value={name}
//           onChangeText={setName}
//         />
//         <RNSTextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           autoCapitalize="none"
//         />
//         <RNSTextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//         />
//         <Text style={styles.subtitle}>Interests:</Text>
//         {interests.map((interest, index) => (
//           <RNSTextInput
//             key={index}
//             style={styles.input}
//             placeholder={`Interest ${index + 1}`}
//             value={interest}
//             onChangeText={(value) => handleInterestChange(value, index)}
//           />
//         ))}
//         <RNSButton caption="Add Interest" onPress={handleAddInterest} primary />
//         <View style={{ height: 10 }} /> {/* Add some spacing */}
//         <RNSButton caption="Sign Up" onPress={handleSignUp} primary />
//         <View style={{ height: 10 }} /> {/* Add some spacing */}
//         <RNSButton
//           caption="Back to Login"
//           onPress={() => navigation.goBack()}
//           secondary
//         />
//       </View>
//     </Background>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 20,
//   },
//   title: {
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   subtitle: {
//     marginTop: 10,
//     marginBottom: 5,
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "white",
//   },
//   input: {
//     marginBottom: 10,
//     padding: 10,
//   },
//   error: {
//     color: "red",
//     marginBottom: 10,
//   },
// });

// export default SignUpScreen;
// import React, { useState, useContext } from "react";
// import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
// import { AuthContext } from "../utils/AuthContext";
// import Background from "../components/Background";
// import { Title } from "../components/StyledText";
// import RNSButton from "../components/Button";
// import RNSTextInput from "../components/TextInput";

// const SignUpScreen = ({ navigation }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [interests, setInterests] = useState([""]);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState("");
//   const { signUp } = useContext(AuthContext);

//   const handleAddInterest = () => {
//     setInterests([...interests, ""]);
//   };

//   const handleInterestChange = (value, index) => {
//     const newInterests = [...interests];
//     newInterests[index] = value;
//     setInterests(newInterests);
//   };

//   const handleSignUp = async () => {
//     setError(""); // Clear error
//     setIsSubmitting(true);
//     try {
//       await signUp({ name, email, password, interests });
//       // onSuccess: The navigation is handled by the AuthContext and App.js
//     } catch (error) {
//       setError(
//         "Failed to sign up. Please check your credentials and try again.",
//       );
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <Background>
//       <View style={styles.container}>
//         <Title style={styles.title} white bold size={32}>
//           Register
//         </Title>
//         {error ? <Text style={styles.error}>{error}</Text> : null}
//         <RNSTextInput
//           style={styles.input}
//           placeholder="Name"
//           value={name}
//           onChangeText={setName}
//         />
//         <RNSTextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           autoCapitalize="none"
//         />
//         <RNSTextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//         />
//         <Text style={styles.subtitle}>Interests:</Text>
//         {interests.map((interest, index) => (
//           <RNSTextInput
//             key={index}
//             style={styles.input}
//             placeholder={`Interest ${index + 1}`}
//             value={interest}
//             onChangeText={(value) => handleInterestChange(value, index)}
//           />
//         ))}
//         <RNSButton
//           caption={<Text>Add Interest</Text>}
//           onPress={handleAddInterest}
//           primary
//         />
//         <View style={{ height: 10 }} /> {/* Add some spacing */}
//         <RNSButton caption="Sign Up" onPress={handleSignUp} primary />
//         <View style={{ height: 10 }} /> {/* Add some spacing */}
//         <RNSButton
//           caption="Back to Login"
//           onPress={() => navigation.goBack()}
//           secondary
//         />
//       </View>
//     </Background>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 20,
//   },
//   title: {
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   subtitle: {
//     marginTop: 10,
//     marginBottom: 5,
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "white",
//   },
//   input: {
//     marginBottom: 10,
//     padding: 10,
//   },
//   error: {
//     color: "red",
//     marginBottom: 10,
//   },
// });

// export default SignUpScreen;
import React, { useState, useContext } from "react";

import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { AuthContext } from "../utils/AuthContext";
import Background from "../components/Background";
import { Title } from "../components/StyledText";
import RNSButton from "../components/Button";
import RNSTextInput from "../components/TextInput";
import { ScrollView } from "react-native-gesture-handler";

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState(""); // Added state for bio
  const [interests, setInterests] = useState([""]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const { signUp } = useContext(AuthContext);

  const handleAddInterest = () => {
    setInterests([...interests, ""]);
  };

  const handleInterestChange = (value, index) => {
    const newInterests = [...interests];
    newInterests[index] = value;
    setInterests(newInterests);
  };

  const handleSignUp = async () => {
    setError(""); // Clear error
    setIsSubmitting(true);
    try {
      await signUp({ name, email, password, bio, interests });

      // Navigate to Screen4 with user information
      createStackNavigator.navigate("Screen4", { name, bio, interests });

      // onSuccess: The navigation is handled by the AuthContext and App.js
    } catch (error) {
      setError(
        "Failed to sign up. Please check your credentials and try again.",
      );
      setIsSubmitting(false);
    }
  };

  return (
    <Background>
      <ScrollView>
        <View style={styles.container}>
          <Title style={styles.title} white bold size={32}>
            Register
          </Title>
          {error ? <Text style={styles.error}>{error}</Text> : null}
          <RNSTextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <RNSTextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <RNSTextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          {/* New RNSTextInput for the bio field */}
          <RNSTextInput
            style={styles.input}
            placeholder="Bio"
            value={bio}
            onChangeText={setBio}
          />
          <Text style={styles.subtitle}>Interests:</Text>
          {interests.map((interest, index) => (
            <RNSTextInput
              key={index}
              style={styles.input}
              placeholder={`Interest ${index + 1}`}
              value={interest}
              onChangeText={(value) => handleInterestChange(value, index)}
            />
          ))}
          <View style={styles.buttonContainer}>
            <RNSButton
              caption="Add Interest"
              onPress={handleAddInterest}
              primary
            />
          </View>
          <View style={styles.buttonContainer}>
            {isSubmitting ? (
              <ActivityIndicator />
            ) : (
              <RNSButton caption="Sign Up" onPress={handleSignUp} primary />
            )}
          </View>
          <View style={{ height: 10 }} />
          <RNSButton
            caption="Back to Login"
            onPress={() => navigation.goBack()}
            secondary
          />
        </View>
      </ScrollView>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  input: {
    marginBottom: 10,
    padding: 10,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  buttonContainer: {
    marginBottom: 10,
  },
});

export default SignUpScreen;
// import React, { useState, useContext } from "react";
// import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
// import { AuthContext } from "../utils/AuthContext";
// import Background from "../components/Background";
// import { Title } from "../components/StyledText";
// import RNSButton from "../components/Button";
// import RNSTextInput from "../components/TextInput";
// import { ScrollView } from "react-native-gesture-handler";

// const SignUpScreen = ({ navigation }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [bio, setBio] = useState(""); // Added state for bio
//   const [interests, setInterests] = useState([""]);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState("");
//   const { signUp } = useContext(AuthContext);

//   const handleAddInterest = () => {
//     setInterests([...interests, ""]);
//   };

//   const handleInterestChange = (value, index) => {
//     const newInterests = [...interests];
//     newInterests[index] = value;
//     setInterests(newInterests);
//   };

//   const handleSignUp = async () => {
//     setError(""); // Clear error
//     setIsSubmitting(true);
//     try {
//       await signUp({ name, email, password, bio, interests });

//       // Navigate to Screen4 with user information
//       navigation.navigate("Screen4", { name, bio, interests });

//       // onSuccess: The navigation is handled by the AuthContext and App.js
//     } catch (error) {
//       setError(
//         "Failed to sign up. Please check your credentials and try again.",
//       );
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <Background>
//       <ScrollView>
//         <View style={styles.container}>
//           <Title style={styles.title} white bold size={32}>
//             Register
//           </Title>
//           {error ? <Text style={styles.error}>{error}</Text> : null}
//           <RNSTextInput
//             style={styles.input}
//             placeholder="Name"
//             value={name}
//             onChangeText={setName}
//           />
//           <RNSTextInput
//             style={styles.input}
//             placeholder="Email"
//             value={email}
//             onChangeText={setEmail}
//             keyboardType="email-address"
//             autoCapitalize="none"
//           />
//           <RNSTextInput
//             style={styles.input}
//             placeholder="Password"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry
//           />
//           {/* New RNSTextInput for the bio field */}
//           <RNSTextInput
//             style={styles.input}
//             placeholder="Bio"
//             value={bio}
//             onChangeText={setBio}
//           />
//           <Text style={styles.subtitle}>Interests:</Text>
//           {interests.map((interest, index) => (
//             <RNSTextInput
//               key={index}
//               style={styles.input}
//               placeholder={`Interest ${index + 1}`}
//               value={interest}
//               onChangeText={(value) => handleInterestChange(value, index)}
//             />
//           ))}
//           <View style={styles.buttonContainer}>
//             <RNSButton
//               caption="Add Interest"
//               onPress={handleAddInterest}
//               primary
//             />
//           </View>
//           <View style={styles.buttonContainer}>
//             {isSubmitting ? (
//               <ActivityIndicator />
//             ) : (
//               <RNSButton caption="Sign Up" onPress={handleSignUp} primary />
//             )}
//           </View>
//           <View style={{ height: 10 }} />
//           <RNSButton
//             caption="Back to Login"
//             onPress={() => navigation.goBack()}
//             secondary
//           />
//         </View>
//       </ScrollView>
//     </Background>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 20,
//   },
//   title: {
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   subtitle: {
//     marginTop: 10,
//     marginBottom: 5,
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "white",
//   },
//   input: {
//     marginBottom: 10,
//     padding: 10,
//   },
//   error: {
//     color: "red",
//     marginBottom: 10,
//   },
//   buttonContainer: {
//     marginBottom: 10,
//   },
// });

// export default SignUpScreen;
// import React, { useState, useContext } from "react";
// import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
// import { AuthContext } from "../utils/AuthContext";
// import Background from "../components/Background";
// import { Title } from "../components/StyledText";
// import RNSButton from "../components/Button";
// import RNSTextInput from "../components/TextInput";
// import { ScrollView } from "react-native-gesture-handler";
// import { useNavigation } from "@react-navigation/native";

// const SignUpScreen = () => {
//   const navigation = useNavigation();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [bio, setBio] = useState(""); // Added state for bio
//   const [interests, setInterests] = useState([""]);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState("");
//   const { signUp } = useContext(AuthContext);

//   const handleAddInterest = () => {
//     setInterests([...interests, ""]);
//   };

//   const handleInterestChange = (value, index) => {
//     const newInterests = [...interests];
//     newInterests[index] = value;
//     setInterests(newInterests);
//   };

//   const handleSignUp = async () => {
//     setError(""); // Clear error
//     setIsSubmitting(true);
//     try {
//       // Sign up user
//       await signUp({ name, email, password, bio, interests });

//       // Navigate to Screen4 with user information
//       navigation.navigate("Screen4", { name, bio, interests });

//       // Reset form fields
//       setName("");
//       setEmail("");
//       setPassword("");
//       setBio("");
//       setInterests([""]);

//       // onSuccess: The navigation is handled by the AuthContext and App.js
//     } catch (error) {
//       setError(
//         "Failed to sign up. Please check your credentials and try again.",
//       );
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <Background>
//       <ScrollView>
//         <View style={styles.container}>
//           <Title style={styles.title} white bold size={32}>
//             Register
//           </Title>
//           {error ? <Text style={styles.error}>{error}</Text> : null}
//           <RNSTextInput
//             style={styles.input}
//             placeholder="Name"
//             value={name}
//             onChangeText={setName}
//           />
//           <RNSTextInput
//             style={styles.input}
//             placeholder="Email"
//             value={email}
//             onChangeText={setEmail}
//             keyboardType="email-address"
//             autoCapitalize="none"
//           />
//           <RNSTextInput
//             style={styles.input}
//             placeholder="Password"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry
//           />
//           {/* New RNSTextInput for the bio field */}
//           <RNSTextInput
//             style={styles.input}
//             placeholder="Bio"
//             value={bio}
//             onChangeText={setBio}
//           />
//           <Text style={styles.subtitle}>Interests:</Text>
//           {interests.map((interest, index) => (
//             <RNSTextInput
//               key={index}
//               style={styles.input}
//               placeholder={`Interest ${index + 1}`}
//               value={interest}
//               onChangeText={(value) => handleInterestChange(value, index)}
//             />
//           ))}
//           <View style={styles.buttonContainer}>
//             <RNSButton
//               caption="Add Interest"
//               onPress={handleAddInterest}
//               primary
//             />
//           </View>
//           <View style={styles.buttonContainer}>
//             {isSubmitting ? (
//               <ActivityIndicator />
//             ) : (
//               <RNSButton caption="Sign Up" onPress={handleSignUp} primary />
//             )}
//           </View>
//         </View>
//       </ScrollView>
//     </Background>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 20,
//   },
//   title: {
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   subtitle: {
//     marginTop: 10,
//     marginBottom: 5,
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "white",
//   },
//   input: {
//     marginBottom: 10,
//     padding: 10,
//   },
//   error: {
//     color: "red",
//     marginBottom: 10,
//   },
//   buttonContainer: {
//     marginBottom: 10,
//   },
// });

// export default SignUpScreen;
// SignupScreen.js

// import React, { useState, useContext } from "react";
// import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
// import { AuthContext } from "../utils/AuthContext";
// import Background from "../components/Background";
// import { Title } from "../components/StyledText";
// import RNSButton from "../components/Button";
// import RNSTextInput from "../components/TextInput";
// import { ScrollView } from "react-native-gesture-handler";

// const SignUpScreen = ({ navigation }) => {
//   const [name, setName] = useState(""); // Corrected
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [bio, setBio] = useState(""); // Added state for bio
//   const [interests, setInterests] = useState([""]);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState("");
//   const { signUp } = useContext(AuthContext);

//   const handleAddInterest = () => {
//     setInterests([...interests, ""]);
//   };

//   const handleInterestChange = (value, index) => {
//     const newInterests = [...interests];
//     newInterests[index] = value;
//     setInterests(newInterests);
//   };

//   const handleSignUp = async () => {
//     setError(""); // Clear error
//     setIsSubmitting(true);
//     try {
//       // Sign up user
//       await signUp({ name, email, password, bio, interests });

//       // Navigate to Screen4 with user information
//       navigation.navigate("Screen4", { name, bio, interests });

//       // Reset form fields
//       setName("");
//       setEmail("");
//       setPassword("");
//       setBio("");
//       setInterests([""]);

//       // onSuccess: The navigation is handled by the AuthContext and App.js
//     } catch (error) {
//       setError(
//         "Failed to sign up. Please check your credentials and try again.",
//       );
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <Background>
//       <ScrollView>
//         <View style={styles.container}>
//           <Title style={styles.title} white bold size={32}>
//             Register
//           </Title>
//           {error ? <Text style={styles.error}>{error}</Text> : null}
//           <RNSTextInput
//             style={styles.input}
//             placeholder="Name"
//             value={name}
//             onChangeText={setName}
//           />
//           <RNSTextInput
//             style={styles.input}
//             placeholder="Email"
//             value={email}
//             onChangeText={setEmail}
//             keyboardType="email-address"
//             autoCapitalize="none"
//           />
//           <RNSTextInput
//             style={styles.input}
//             placeholder="Password"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry
//           />
//           {/* New RNSTextInput for the bio field */}
//           <RNSTextInput
//             style={styles.input}
//             placeholder="Bio"
//             value={bio}
//             onChangeText={setBio}
//           />
//           <Text style={styles.subtitle}>Interests:</Text>
//           {interests.map((interest, index) => (
//             <RNSTextInput
//               key={index}
//               style={styles.input}
//               placeholder={`Interest ${index + 1}`}
//               value={interest}
//               onChangeText={(value) => handleInterestChange(value, index)}
//             />
//           ))}
//           <View style={styles.buttonContainer}>
//             <RNSButton
//               caption="Add Interest"
//               onPress={handleAddInterest}
//               primary
//             />
//           </View>
//           <View style={styles.buttonContainer}>
//             {isSubmitting ? (
//               <ActivityIndicator />
//             ) : (
//               <RNSButton caption="Sign Up" onPress={handleSignUp} primary />
//             )}
//           </View>
//           <View style={{ height: 10 }} />
//           <RNSButton
//             caption="Back to Login"
//             onPress={() => navigation.goBack()}
//             secondary
//           />
//         </View>
//       </ScrollView>
//     </Background>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 20,
//   },
//   title: {
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   subtitle: {
//     marginTop: 10,
//     marginBottom: 5,
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "white",
//   },
//   input: {
//     marginBottom: 10,
//     padding: 10,
//   },
//   error: {
//     color: "red",
//     marginBottom: 10,
//   },
//   buttonContainer: {
//     marginBottom: 10,
//   },
// });

// export default SignUpScreen;

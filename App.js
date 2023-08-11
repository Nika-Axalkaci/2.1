import React from "react";
import { View } from "react-native";
import ContactList from "./components/ContactList";
import generateRandomContacts from "./components/ContactData";

export default function App() {
  const contacts = generateRandomContacts(10); // Generate 10 random contacts

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ContactList contacts={contacts} />
    </View>
  );
}

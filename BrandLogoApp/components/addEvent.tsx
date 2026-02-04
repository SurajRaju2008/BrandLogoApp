import React, { useState } from "react";
import { TextInput, View } from "react-native";
import defaultStyles from "../styles/defaultStyles";
import Button from "./Button";

type Event = {
  id: string;
  name: string;
  time: string;
};

type AddEventProps = {
  onAddEvent: (event: Event) => void;
};

const AddEvent = ({ onAddEvent }: AddEventProps) => {
  const [showInput, setShowInput] = useState(false);
  const [eventName, setEventName] = useState("");
  const [eventTime, setEventTime] = useState("");

  const submit = () => {
    const newEvent = {
      id: Date.now().toString(),
      name: eventName,
      time: eventTime,
    };

    onAddEvent(newEvent);

    // reset inputs
    setEventName("");
    setEventTime("");
    setShowInput(false);
  };

  return (
    <View>
      {!showInput ? (
        <Button title="Add Event" onPress={() => setShowInput(true)}  />
      ) : (
        <View>
          <TextInput
            placeholder="Event Name"
            value={eventName}
            onChangeText={setEventName}
            style={defaultStyles.textInput}
          />

          <TextInput
            placeholder="Event Time"
            value={eventTime}
            onChangeText={setEventTime}
            style={defaultStyles.textInput}
          />

          <Button title="Submit Event" onPress={submit} />
        </View>
      )}
    </View>
  );
};

export default AddEvent;

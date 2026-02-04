import { Text, TouchableOpacity } from "react-native";
import defaultStyles from "../styles/defaultStyles";

type Props = {
  title: string;
  onPress: () => void;
  size?: number;
};

export default function Button({ title, onPress, size = 16 }: Props) {
  return (
    <TouchableOpacity style={defaultStyles.button} onPress={onPress}>
      <Text style={{ color: "white", fontSize: size , margin:10}}>{title}</Text>
    </TouchableOpacity>
  );
}
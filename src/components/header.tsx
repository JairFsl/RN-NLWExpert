import { Feather } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";

interface IHeaderProps {
  title?: string;
  showCart?: boolean;
}

export function Header({
  title = "Título do Header",
  showCart = false,
}: IHeaderProps) {
  return (
    <>
      <View className=" flex flex-row h-28 w-full items-center justify-between px-3 gap">
        <View className="flex flex-col items-center justify-center">
          <Image source={require("@/assets/logo.png")} className="h-6 w-32" />
          <Text className="text-white text-xl font-semibold">{title}</Text>
        </View>
        <View className="h-full items-center justify-center">
          {showCart && <Feather name="shopping-cart" size={24} color="white" />}
        </View>
      </View>
      <View className="my-1 w-full border border-solid border-gray-600" />
    </>
  );
}

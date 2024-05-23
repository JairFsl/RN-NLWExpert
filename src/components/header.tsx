import { Feather } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface IHeaderProps {
  title?: string;
  cartQuatityItems?: number;
}

export function Header({
  title = "Título do Header",
  cartQuatityItems = 0,
}: IHeaderProps) {
  return (
    <View className="flex-row items-center border-b border-b-gray-500 pb-5 px-3">
      <View className="flex-1">
        <Image source={require("@/assets/logo.png")} className="h-6 w-32" />
        <Text className="text-white text-xl font-semibold mt-2">{title}</Text>
      </View>
      <TouchableOpacity className="relative">
        {cartQuatityItems > 0 && (
          <View className="bg-lime-300 w-4 h-4 rounded-full items-center justify-center top-2 z-10 -right-3.5">
            <Text className="text-slate-900 font-bold text-xs">1</Text>
          </View>
        )}

        <Feather name="shopping-bag" color={"#fff"} size={24} />
      </TouchableOpacity>
    </View>
  );
}

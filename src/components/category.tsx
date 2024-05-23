import { Text, Pressable, PressableProps } from "react-native";
import { clsx } from "clsx";

interface ICategoryProps extends PressableProps {
  title: string;
  isSelected?: boolean;
}

export function CategoryButton({ title, isSelected, ...rest }: ICategoryProps) {
  return (
    <Pressable
      className={clsx(
        "bg-slate-800 justify-center rounded-md h-10 w-32 items-center",
        isSelected && "border-2 border-lime-300"
      )}
      {...rest}
    >
      <Text className="text-slate-100 text-sm">{title}</Text>
    </Pressable>
  );
}

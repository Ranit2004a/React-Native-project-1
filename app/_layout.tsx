import { Stack } from "expo-router";
import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function RootLayout() {
  return( 
    <SafeAreaView style ={{ flex: 1, backgroundColor: "white"}}> 
      <View style = {{padding:16}} >
      <Text>hello from Ranit  </Text>

      <TextInput
        placeholder="Search city.."
        placeholderTextColor="gray"
        style={{
          borderWidth: 1,
          borderColor: "gray",
          backgroundColor: "lightgray",
          padding: 8,
          borderRadius: 8,
          marginBottom: 16,
        }}
      />
      </View>
    </SafeAreaView>
  );
  
  
}

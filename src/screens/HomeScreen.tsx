import { Text, FlatList } from "react-native";
import tw from "twrnc";

import { Screen } from "../components/Screen";
import CountdownTimer from '../components/CountdownTimer';

export const HomeScreen=() =>{
  const features = [
    "tailwind",
    "recoil",
    "native styling",
    "fetching code from an API",
    "using a FlatList to render data",
    "Image for both remote & local images",
    "custom fonts",
    "sign a transaction / message",
    "theme hook with light/dark support",
  ];

  const THREE_DAYS_IN_MS = 7 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <Screen>
      {/* <Text style={tw`mb-4`}>
        You'll find several examples of how to build xNFTs using react-native:
      </Text> */}
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      {/* <FlatList
        data={features}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text>- {item}</Text>}
      /> */}
    </Screen>
  );
}

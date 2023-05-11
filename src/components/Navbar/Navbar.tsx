import {
  Flex,
  Image,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Searchbar from "./Searchbar";
import LeftButtons from "./LeftButtons";
import RightButtons from "./RightButtons";
import twitch from "@assets/twitch-logo.png";
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const [mode, setmode] = useState(useColorMode);
  return (
    <Flex
      zIndex={"1"}
      top={0}
      bg={useColorModeValue("white", "#18181b")}
      position={"sticky"}
      h={"50px"}
      justifyContent={"space-between"}
      alignItems={"center"}
      px={"10px"}
    >
      <LeftButtons />
      <Searchbar />
      <RightButtons />
    </Flex>
  );
};
export default Navbar;

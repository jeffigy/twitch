import { Flex, Image, Spacer } from "@chakra-ui/react";
import React from "react";
import Searchbar from "./Searchbar";
import LeftButtons from "./LeftButtons";
import RightButtons from "./RightButtons";
import twitch from "@assets/twitch-logo.png";
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Flex
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

import { Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import Searchbar from "./Searchbar";
import LeftButtons from "./LeftButtons";
import RightButtons from "./RightButtons";

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

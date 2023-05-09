import { Flex } from "@chakra-ui/react";
import React from "react";

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <Flex
      pos={"absolute"}
      h={"calc(100vh - 50px)"}
      mt={"50px"}
      w={{ base: "50px" }}
    >
      Sidebar
    </Flex>
  );
};
export default Sidebar;

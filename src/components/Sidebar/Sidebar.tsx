import { Avatar, Button, Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import { Heart } from "react-feather";

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <Flex
      border={"1px solid black"}
      pos={"absolute"}
      h={"calc(100vh - 50px)"}
      mt={"50px"}
      w={{ base: "50px", lg: "240px" }}
      flexDirection={"column"}
      alignItems={"center"}
      // justifyContent={"space-between"}
    >
      <IconButton boxSize={"30px"} icon={<Heart />} aria-label={""} />

      <Button
        borderRadius={"none"}
        width={"100%"}
        colorScheme="twitter"
        leftIcon={<Avatar boxSize={"30px"} />}
      >
        Channel 1
      </Button>
    </Flex>
  );
};
export default Sidebar;

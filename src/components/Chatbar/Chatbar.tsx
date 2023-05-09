import { Flex } from "@chakra-ui/react";
import React from "react";

type ChatbarProps = {};

const Chatbar: React.FC<ChatbarProps> = () => {
  return (
    <Flex
      h={"calc(100vh - 50px)"}
      w={"50px"}
      pos={"absolute"}
      right={0}
      mt={"50px"}
    >
      Chatbar
    </Flex>
  );
};
export default Chatbar;

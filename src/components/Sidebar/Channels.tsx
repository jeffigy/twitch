import { Flex, Avatar, Stack, Spacer, HStack, Text } from "@chakra-ui/react";
import { Target } from "react-feather";
import React, { useState } from "react";

type ChannelsProps = {
  name: string;
  game: string;
  viewers: string;
  isCollapsed: boolean;
};

const Channels: React.FC<ChannelsProps> = ({
  name,
  game,
  viewers,
  isCollapsed,
}) => {
  const textHide = isCollapsed ? "none" : "block";
  return (
    <Flex
      p={"5px 10px"}
      w={"full"}
      alignItems={"center"}
      _hover={{ cursor: "pointer", bg: "gray.100" }}
    >
      <Avatar boxSize={"30px"} />

      <Stack display={{ base: "none", xl: textHide }} spacing={0} ml={"10px"}>
        <Text fontSize={"14px"} fontWeight={"bold"}>
          {name}
        </Text>
        <Text noOfLines={1} fontSize={"13px"}>
          {game}
        </Text>
      </Stack>
      <Spacer display={{ base: "none", xl: textHide }} />
      <HStack
        display={{
          base: "none",
          xl: isCollapsed === true ? "none" : "contents",
        }}
        spacing={1}
      >
        <Target color="red" size={"8px"} />
        <Text fontSize={"13px"}>{viewers}</Text>
      </HStack>
    </Flex>
  );
};
export default Channels;

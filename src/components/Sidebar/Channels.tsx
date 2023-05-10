import { Flex, Avatar, Stack, Spacer, HStack, Text } from "@chakra-ui/react";
import { Target } from "react-feather";
import React from "react";

type ChannelsProps = {
  name: string;
  game: string;
  viewers: string;
};

const Channels: React.FC<ChannelsProps> = ({ name, game, viewers }) => {
  return (
    <Flex
      p={"5px 10px"}
      w={"full"}
      alignItems={"center"}
      _hover={{ cursor: "pointer", bg: "gray.100" }}
    >
      <Avatar boxSize={"30px"} />

      <Stack spacing={0} ml={"15px"}>
        <Text fontSize={"14px"} fontWeight={"bold"}>
          {name}
        </Text>
        <Text noOfLines={1} fontSize={"13px"}>
          {game}
        </Text>
      </Stack>
      <Spacer />
      <HStack spacing={1}>
        <Target color="red" size={"8px"} />
        <Text fontSize={"13px"}>{viewers}</Text>
      </HStack>
    </Flex>
  );
};
export default Channels;

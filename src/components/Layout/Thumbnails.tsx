import {
  GridItem,
  Text,
  Box,
  AspectRatio,
  Flex,
  Avatar,
  Spacer,
  IconButton,
  Stack,
  Button,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

import React from "react";
import { MoreVertical } from "react-feather";

type ThumbnailsProps = {};

const Thumbnails: React.FC<ThumbnailsProps> = () => {
  return (
    <GridItem>
      <AspectRatio ratio={16 / 9}>
        <Box bg="gray.500" />
      </AspectRatio>
      <Flex w={"full"} pt={"10px"} direction={"column"}>
        <Flex pb={"10px"}>
          <Avatar size={"sm"} mr={"10px"} />
          <Flex direction={"column"} w={"full"}>
            <Text fontSize={"14px "} fontWeight={"bold"} noOfLines={1}>
              RERUN: Gladiators vs 9 Pandas - Game 1 - ESL One Berlin 2023 -
              Playoffs
            </Text>
            <Text fontSize={"13px "} fontWeight={"light"}>
              ESL_DOTA2
            </Text>
            <Text fontSize={"13px "} fontWeight={"light"}>
              Dota 2
            </Text>
            <Stack direction={"row"}>
              <Button size={"sm"} borderRadius={"30px"}>
                Esports
              </Button>
              <Button size={"sm"} borderRadius={"30px"}>
                Esports
              </Button>
            </Stack>
          </Flex>
          <Spacer />
          <IconButton
            bg={"transparent"}
            p={"0px"}
            size={"xs"}
            icon={<MoreVertical size={"20px"} />}
            aria-label={""}
          />
        </Flex>
      </Flex>
    </GridItem>
  );
};
export default Thumbnails;

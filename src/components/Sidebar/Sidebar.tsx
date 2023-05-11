import { Flex, IconButton, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { Heart, ArrowLeft, ArrowRight } from "react-feather";
import Channels from "./Channels";

type SidebarProps = {
  isCollapsed: boolean;
  sidebarWidth: string;
  handleCollapse: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({
  isCollapsed,
  sidebarWidth,
  handleCollapse,
}) => {
  const buttonIcon = isCollapsed ? <ArrowRight /> : <ArrowLeft />;
  const textHide = isCollapsed ? "none" : "block";

  const channels = [
    {
      name: "YapzOrdota",
      game: "Dota 2",
      viewers: "2.8K",
    },
    {
      name: "BLAST",
      game: "Counter-Strike: Global Offensive",
      viewers: "33.2K",
    },
    {
      name: "AdmiralBulldog",
      game: "Just Chatting",
      viewers: "4.6K",
    },
    {
      name: "Riot Games",
      game: "League of legends",
      viewers: "21.6K",
    },
  ];

  return (
    <Flex
      position={"sticky"}
      zIndex={"1"}
      bg={useColorModeValue("#efeff1", "#1f1f23")}
      pos={"fixed"}
      h={"calc(100vh - 50px)"}
      mt={"50px"}
      w={{ base: "50px", xl: sidebarWidth }}
      flexDirection={"column"}
      alignItems={"center"}
    >
      {/* Header */}
      <Flex
        w={"full"}
        p={{ base: "none", xl: isCollapsed ? "0px" : "5px 10px" }}
        justifyContent={isCollapsed ? "center" : "space-between"}
        alignItems={"center"}
      >
        <Text
          display={{ base: "none", xl: textHide }}
          fontWeight={"bold"}
          fontSize={"13px"}
          textTransform={"uppercase"}
        >
          recommended channels
        </Text>

        {/* collapse button */}
        <IconButton
          display={{ base: "none", xl: "flex" }}
          icon={buttonIcon}
          aria-label={"collapse"}
          bg={"transparent"}
          onClick={handleCollapse}
        />
      </Flex>

      {channels.map((channel, index) => {
        return (
          <Channels
            key={`channel-${index}`}
            isCollapsed={isCollapsed}
            {...channel}
          />
        );
      })}
      <Flex w={"full"} p={"5px 10px"}>
        <Text
          display={{ base: "none", xl: textHide }}
          fontSize={"12px"}
          color={"brand.PrimaryColor"}
        >
          Show More
        </Text>
      </Flex>
    </Flex>
  );
};

export default Sidebar;

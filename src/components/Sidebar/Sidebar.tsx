import { Flex, IconButton, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { Heart, ArrowLeft, ArrowRight } from "react-feather";
import Channels from "./Channels";

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState("50px");

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    setSidebarWidth(isCollapsed ? "50px" : "240px");
  };

  const buttonIcon = isCollapsed ? <ArrowLeft /> : <ArrowRight />;
  const textHide = isCollapsed ? "block" : "none";

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
      bg={useColorModeValue("#efeff1", "#1f1f23")}
      pos={"absolute"}
      h={"calc(100vh - 50px)"}
      mt={"50px"}
      w={{ base: "50px", xl: sidebarWidth }}
      flexDirection={"column"}
      alignItems={"center"}
    >
      {/* Header */}
      <Flex
        w={"full"}
        p={{ base: "none", xl: isCollapsed ? "5px 10px" : "0px" }}
        justifyContent={isCollapsed ? "space-between" : "center"}
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
          //display property is set to none for mobile devices and default behavior for desktop devices
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

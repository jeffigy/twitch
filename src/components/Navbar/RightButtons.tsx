import { SearchIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Search, Inbox, Slack, MessageSquare, Layers } from "react-feather";
type RightButtonsProps = {};

const RightButtons: React.FC<RightButtonsProps> = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const isLgScreen = useBreakpointValue({ base: false, lg: true });

  useEffect(() => {
    const handleResize = () => {
      if (isPopoverOpen && !isLgScreen) {
        setIsPopoverOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isPopoverOpen, isLgScreen]);

  const buttons = [
    { icon: Search, label: "search" },
    { icon: Inbox, label: "inbox" },
    { icon: Slack, label: "slack" },
    { icon: MessageSquare, label: "message" },
    { icon: Layers, label: "layers" },
  ];
  return (
    <HStack spacing={"5px"}>
      <Popover
        isOpen={isPopoverOpen}
        onOpen={() => setIsPopoverOpen(true)}
        onClose={() => setIsPopoverOpen(false)}
      >
        <PopoverTrigger>
          <IconButton
            key={0}
            display={{ base: "flex", md: "none" }}
            bg={"transparent"}
            icon={<Icon as={buttons[0].icon} boxSize={4} />}
            aria-label={buttons[0].label}
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverBody>
            <InputGroup size={"md"}>
              <Input
                placeholder={"Search"}
                minWidth={{ md: "227px", lg: "354px" }}
                width="100%"
              />
              <InputRightElement>
                <IconButton icon={<SearchIcon />} aria-label="search-button" />
              </InputRightElement>
            </InputGroup>
          </PopoverBody>
        </PopoverContent>
      </Popover>
      {buttons.slice(1, 4).map((button, index) => {
        return (
          <IconButton
            key={index}
            bg={"transparent"}
            icon={<Icon as={button.icon} boxSize={4} />}
            aria-label={button.label}
          />
        );
      })}
      <IconButton
        key={4}
        display={{ base: "flex", xl: "none" }}
        bg={"transparent"}
        icon={<Icon as={buttons[4].icon} boxSize={4} />}
        aria-label={buttons[4].label}
      />

      <Button
        size={"sm"}
        fontSize={"13px"}
        display={{ base: "none", xl: "flex" }}
        leftIcon={<Icon as={buttons[4].icon} boxSize={4} />}
      >
        {" "}
        Get Bits
      </Button>
      <Avatar ml={"10px"} size={"sm"} bg={"brand.PrimaryColor"} />
    </HStack>
  );
};
export default RightButtons;

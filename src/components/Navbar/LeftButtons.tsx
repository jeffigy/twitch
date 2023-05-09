import {
  Avatar,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { Heart, Copy, MoreVertical } from "react-feather";
type LeftButtonsProps = {};

const LeftButtons: React.FC<LeftButtonsProps> = () => {
  const buttons = [
    { icon: Heart, label: "Following", id: 0 },
    { icon: Copy, label: "Browse", id: 1 },
    { icon: MoreVertical, label: "More", id: 2 },
  ];
  return (
    <HStack spacing={"15px"}>
      {buttons.slice(0, 2).map((button, index) => {
        return (
          <React.Fragment key={`button-${button.id}`}>
            <IconButton
              key={`mobile-${button.id}`} // Use a unique identifier for mobile buttons
              display={{ base: "flex", md: "none" }}
              bg={"transparent"}
              icon={<Icon as={button.icon} boxSize={5} />}
              aria-label={button.label}
            />
            <Button
              key={`desktop-${button.id}`} // Use a unique identifier for desktop buttons
              bg={"transparent"}
              display={{ base: "none", md: "flex" }}
            >
              {button.label}
            </Button>
          </React.Fragment>
        );
      })}

      <IconButton
        key={3}
        bg={"transparent"}
        icon={<Icon as={buttons[2].icon} boxSize={5} />}
        aria-label={buttons[2].label}
      />
    </HStack>
  );
};
export default LeftButtons;

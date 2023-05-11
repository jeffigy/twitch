import { Flex, Text } from "@chakra-ui/react";
import React from "react";

type SectionHeaderProps = {
  coloredText: string;
  normalText: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  coloredText,
  normalText,
}) => {
  return (
    <Flex direction={"row"} mt={"40px"}>
      <Text
        fontSize={"18px "}
        fontWeight={"bold"}
        color={"brand.PrimaryColor"}
        mr={"5px"}
      >
        {coloredText}
      </Text>

      <Text fontSize={"18px "} fontWeight={"bold"}>
        {" "}
        {normalText}
      </Text>
    </Flex>
  );
};
export default SectionHeader;

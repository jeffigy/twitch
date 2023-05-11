import {
  Box,
  Grid,
  Flex,
  Image,
  useBreakpointValue,
  IconButton,
  Container,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import SectionHeader from "components/Layout/SectionHeader";
import Thumbnails from "components/Layout/Thumbnails";
import React from "react";
import { ArrowLeft, ArrowRight } from "react-feather";

export default function Home() {
  return (
    <Flex w={"full"} direction={"column"}>
      <SectionHeader
        coloredText={"Live channels"}
        normalText={"we think you'll like"}
      />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          // sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={6}
        w="full"
      >
        <Thumbnails />
        <Thumbnails />
        <Thumbnails />
        <Thumbnails />
      </Grid>
      <SectionHeader
        coloredText={"Live channels"}
        normalText={"we think you'll like"}
      />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={6}
        w="full"
      >
        <Thumbnails />
        <Thumbnails />
        <Thumbnails />
        <Thumbnails />
      </Grid>
    </Flex>
  );
}

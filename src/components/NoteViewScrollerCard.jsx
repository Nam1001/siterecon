import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { dummycontent } from "../dummy";
import SliderContent from "./SliderContent";

export default function NoteViewScrollerCard() {
  return (
    <Flex gap={"1rem"} flexDir={"column"} w={"100%"}>
      <Box>
        <Text
          color={"#000"}
          fontSize={"1rem"}
          fontWeight={"500"}
          fontFamily={"Poppins"}
        >
          {dummycontent}
        </Text>
      </Box>
      <SliderContent/>
    </Flex>
  );
}

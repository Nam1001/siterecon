import { Button, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { ReactComponent as Note } from "../assets/Note.svg";
export default function NoteButton({ onClick }) {
  return (
    <VStack
      display={"flex"}
      p={"0.218rem 0.25rem"}
      align={"center"}
      gap={"0.125rem"}
      borderRadius={"0.25rem"}
      h={"3rem"}
      as={Button}
      fontWeight={"500"}
      bg={"#f6f6f6"}
      _hover={{ bg: "#fffbee" }}
      _focus={{ bg: "#ffd02b", fontWeight: "600" }}
      color={"#000"}
      _active={{ fontWeight: "600" }}
      onClick={onClick}
    >
      <Note style={{ fill: "#fff", stroke: "#333", strokeWidth: "1.2px" }} />
      <Text
        display={"flex"}
        w={"2.5rem"}
        justifyContent={"center"}
        flexDir={"column"}
        color={"#333"}
        textAlign={"center"}
        fontFamily={"Poppins"}
        fontSize={"0.925rem"}
        fontStyle={"normal"}
        lineHeight={"normal"}
      >
        Notes
      </Text>
    </VStack>
  );
}

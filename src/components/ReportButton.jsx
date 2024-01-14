import { Button, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { ReactComponent as ReportIcon } from "../assets/ReportIcon.svg";
export default function ReportButton() {
  return (
    <VStack
      display={"flex"}
      p={"0.218rem 0.25rem"}
      align={"center"}
      gap={"0.125rem"}
      borderRadius={"0.25rem"}
      h={"3rem"}
      as={Button}
      bg={"#f6f6f6"}
      _hover={{ bg: "#f6f6f6" }}
      _activeLink={{ bg: "" }}
      _focus={{ bg: "" }}
      color={"#000"}
    >
      <ReportIcon />
      <Text
        color={"#666"}
        textAlign={"center"}
        fontFamily={"Poppins"}
        fontSize={"0.825rem"}
        fontWeight={"500"}
        _focus={{ fontWeight: "600" }}
      >
        Report
      </Text>
    </VStack>
  );
}

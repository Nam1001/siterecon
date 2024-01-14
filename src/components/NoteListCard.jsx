import { Badge, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { ReactComponent as UserLocation } from "../assets/UserLocation.svg";
import { ReactComponent as ImageIcon } from "../assets/ImageIcon.svg";
import { ReactComponent as Note } from "../assets/Note.svg";
import PinPng from "../assets/Pin.png";
import OpenButton from "./OpenButton";
export default function NoteListCard({ noteData }) {
  const {id, heading, description, creator, date, comments, sideLetter } =
    noteData;

  return (
    <Flex
      borderRadius={"0.625rem"}
      border={"1px solid #d1d5d8"}
      flexDir={"column"}
      p={"0.75rem"}
      bg={"#fff"}
      gap={"0.8rem"}
    >
      <HStack alignItems={"center"} w={"100%"} justifyContent={"space-between"}>
        <HStack alignItems={"center"}>
          <Badge h={"1.4rem"} cursor={"pointer"} bg={"transparent"}>
            <Note className="main-not-icon" />
            <Text
              fontFamily={"Poppins"}
              pos={"relative"}
              bottom={"25px"}
              left={"8px"}
              fontWeight={"600"}
              fontSize={"0.7rem"}
            >
              {sideLetter}
            </Text>
          </Badge>
          <Text
            color={"#333"}
            fontFamily={"Poppins"}
            fontWeight={"600"}
            fontSize={"0.875rem"}
          >
            {heading}
          </Text>
        </HStack>
        <OpenButton id={id}/>
      </HStack>
      <Text
        color={"#666"}
        fontFamily={"Poppins"}
        fontSize={"0.85rem"}
        fontWeight={"600"}
      >
        {description}
      </Text>

      <HStack alignItems={"center"}>
        <UserLocation className="user-location-icon" />
        <Text
          mr={"5px"}
          color={"#666"}
          fontFamily={"Poppins"}
          fontSize={"0.95rem"}
          fontWeight={"650"}
        >
          {creator}
        </Text>
        <Text
          color={"#666"}
          fontFamily={"Poppins"}
          fontSize={"0.85rem"}
          fontWeight={"600"}
        >
          {date}
        </Text>
      </HStack>

      <HStack alignItems={"center"} w={"100%"} justifyContent={"space-between"}>
        <HStack>
          <ImageIcon className="user-location-icon" />
          <Image boxSize={"18px"} src={PinPng} />
        </HStack>
        <Text
          color={"#666"}
          fontFamily={"Poppins"}
          fontSize={"0.95rem"}
          fontWeight={"650"}
        >
          {comments?.length} {""}Comment
        </Text>
      </HStack>
    </Flex>
  );
}

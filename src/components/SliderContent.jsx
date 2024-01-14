import {
  Box,
  HStack,
  Heading,
  VStack,
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";
import React from "react";
import house1 from "../assets/house1.png";
import house2 from "../assets/house2.png";
import house3 from "../assets/house3.png";
import { dummycontent1, dummycontent2 } from "../dummy";
export default function SliderContent() {
  return (
    <Flex flexDir={"column"} gap={"14px"}>
      <VStack gap={"10px"} w={"100%"}>
        <HStack w={"100%"}>
          <Heading
            color={"#000"}
            fontSize={"1.2rem"}
            fontWeight={"650"}
            fontFamily={"Poppins"}
          >
            1. {""} Turf Audit
          </Heading>
        </HStack>
        <HStack w={"100%"}>
          <Heading
            color={"#666"}
            fontSize={"1rem"}
            fontWeight={"600"}
            fontFamily={"Poppins"}
          >
            1.a {""} Overall appearance
          </Heading>
        </HStack>
        <Box>
          <Text
            color={"#666"}
            fontSize={"0.9rem"}
            fontFamily={"Poppins"}
            fontWeight={"500"}
          >
            {dummycontent1}
          </Text>
        </Box>
      </VStack>

      <VStack gap={"10px"} w={"100%"}>
        <HStack w={"100%"}>
          <HStack>
            <Heading
              color={"#000"}
              fontSize={"1.2rem"}
              fontWeight={"650"}
              fontFamily={"Poppins"}
            >
              <strong> 5 </strong>
            </Heading>
            <Text
              color={"#333"}
              fontSize={"1.2rem"}
              fontWeight={"500"}
              fontFamily={"Poppins"}
            >
              out of 5
            </Text>
          </HStack>
        </HStack>
        <HStack w={"100%"}>
          <Heading
            color={"#000"}
            fontSize={"1rem"}
            fontWeight={"600"}
            fontFamily={"Poppins"}
          >
            Upto MyLawn Standards
          </Heading>
        </HStack>

        <Box>
          <Text
            color={"#000"}
            fontSize={"0.9rem"}
            fontFamily={"Poppins"}
            fontWeight={"500"}
          >
            {dummycontent2}
          </Text>
        </Box>

        <HStack gap={"0.5rem"} w={"100%"} justifyContent={"flex-start"}>
          <Image
            src={house1}
            w={"6.125rem"}
            h={"5.625rem"}
            borderRadius={"0.375rem"}
            border={"1px solid #eaeaea"}
          />

          <Image
            src={house2}
            w={"6.125rem"}
            h={"5.625rem"}
            borderRadius={"0.375rem"}
            border={"1px solid #eaeaea"}
          />
        </HStack>
      </VStack>

      <VStack gap={"10px"} w={"100%"}>
        <HStack w={"100%"}>
          <Heading
            color={"#666"}
            fontSize={"1rem"}
            fontWeight={"600"}
            fontFamily={"Poppins"}
          >
            1.b Flower Type
          </Heading>
        </HStack>
        <Text
          color={"#000"}
          fontSize={"0.9rem"}
          fontFamily={"Poppins"}
          fontWeight={"550"}
        >
          Caladium, Calendula, Cardinal, Lavender, Roses and Sunflower
        </Text>

        <HStack w={"100%"} justifyContent={"flex-start"}>
          <Image
            src={house2}
            w={"6.125rem"}
            h={"5.625rem"}
            borderRadius={"0.375rem"}
            border={"1px solid #eaeaea"}
          />
        </HStack>
      </VStack>

      <VStack alignItems={"start"} gap={"10px"} w={"100%"}>
        <HStack w={"100%"}>
          <Heading
            color={"#666"}
            fontSize={"1rem"}
            fontWeight={"600"}
            fontFamily={"Poppins"}
          >
            1.c Flower Type
          </Heading>
        </HStack>
        <Text
          color={"#999"}
          fontSize={"0.9rem"}
          fontFamily={"Poppins"}
          fontWeight={"550"}
        >
          None
        </Text>
      </VStack>

      <VStack alignItems={"start"} gap={"10px"} w={"100%"}>
        <HStack w={"100%"}>
          <Heading
            color={"#666"}
            fontSize={"1rem"}
            fontWeight={"600"}
            fontFamily={"Poppins"}
          >
            1.d is The Turf dry ?
          </Heading>
        </HStack>
        <Text
          color={"#333"}
          fontSize={"0.9rem"}
          fontFamily={"Poppins"}
          fontWeight={"600"}
        >
          No
        </Text>
        <HStack w={"100%"} justifyContent={"flex-start"}>
          <Image
            src={house3}
            w={"6.125rem"}
            h={"5.625rem"}
            borderRadius={"0.375rem"}
            border={"1px solid #eaeaea"}
          />
        </HStack>
      </VStack>
    </Flex>
  );
}

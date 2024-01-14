import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import house1 from "../assets/house1.png";
import house2 from "../assets/house2.png";
import { ReactComponent as Pdfimage } from "../assets/Pdf.svg";
export default function ImageStocks() {
  return (
    <HStack
      p={"5px"}
      borderRadius={"0.375rem"}
      border={"1.3px solid #eaeaea"}
      bg={"#fff"}
      w={"100%"}
      justifyContent={"space-between"}
    >
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

      <Box
        border={"2px solid #eaeaea"}
        display={"grid"}
        placeItems={"center"}
        borderRadius={"0.4rem"}
        w={"6.125rem"}
        h={"5.625rem"}
      >
        <Pdfimage
          style={{ width: "3.15rem", height: "3.625rem", position: "absolute" }}
        />
        <Text
          color={"#fff"}
          fontSize={"1rem"}
          fontFamily={"Poppins"}
          fontWeight={"750"}
          lineHeight={"140%"}
          pos={"relative"}
          zIndex={"100"}
        >
          PDF
        </Text>
      </Box>

      <Box
        border={"2px solid #eaeaea"}
        display={"grid"}
        placeItems={"center"}
        borderRadius={"0.4rem"}
        w={"6.125rem"}
        h={"5.625rem"}
      >
        <div class="image-overlay">
          <Image
            src={house2}
            w={"5.125rem"}
            h={"5.625rem"}
            borderRadius={"0.375rem"}
            border={"1px solid #eaeaea"}
          />
          <Text fontFamily={"Poppins"} class="overlay">
            3+
          </Text>
        </div>
      </Box>
    </HStack>
  );
}

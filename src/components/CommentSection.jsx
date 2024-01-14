import {
  Flex,
  HStack,
  Text,
  Tag,
  Divider,
  VStack,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { ReactComponent as User } from "../assets/User.svg";
import { ReactComponent as Stack } from "../assets/Stack.svg";
import { ReactComponent as TagIcon } from "../assets/Tag.svg";
import personImage from "../assets/person.png";
import { useSelector } from "react-redux";

function CommentSection() {
  const store = useSelector((store) => store.viewNoteSlice);
  const data = store.value.data;
  return (
    <Flex flexDir={"column"} gap={"0.75rem"} w={"100%"}>
      <VStack w={"100%"}>
        <Flex gap={"10px"} w={"100%"}>
          <HStack>
            <User />
            <HStack>
              <Tag
                color={"#000"}
                fontFamily={"Poppins"}
                fontWeight={"600"}
                fontSize={"0.85rem"}
                bg={"#f0f0f0"}
                borderRadius={"2.6rem"}
                p={"0.25rem 0.8rem"}
                whiteSpace={"nowrap"}
              >
                <Image
                  height={"1.5rem"}
                  w={"1.5rem"}
                  borderRadius={"full"}
                  src={personImage}
                  mr={"5px"}
                />
                {data?.creator}
              </Tag>
            </HStack>
          </HStack>

          <HStack>
            <Stack />
            <Tag
              color={"#000"}
              fontFamily={"Poppins"}
              fontWeight={"600"}
              fontSize={"0.85rem"}
              bg={"#f0f0f0"}
              borderRadius={"2.6rem"}
              p={"0.25rem 0.8rem"}
              whiteSpace={"nowrap"}
            >
              Palm Tri... +2
            </Tag>
          </HStack>

          <HStack>
            <TagIcon />
            <Tag
              color={"#000"}
              fontFamily={"Poppins"}
              fontWeight={"600"}
              fontSize={"0.85rem"}
              bg={"#f0f0f0"}
              borderRadius={"2.6rem"}
              p={"0.25rem 0.8rem"}
              whiteSpace={"nowrap"}
            >
              test tag ...+7
            </Tag>
          </HStack>
        </Flex>
        <Divider borderWidth={"1px"} borderColor={"#eaeaea"} />
      </VStack>

      <HStack gap={"0.75rem"}>
        <Text
          color={"#666"}
          fontFamily={"Poppins"}
          fontSize={"0.9rem"}
          textDecor={"underline"}
          fontWeight={"500"}
        >
          {data?.comments?.length} Comments
        </Text>

        <Divider
          orientation={"vertical"}
          borderWidth={"1px"}
          h={"1rem"}
          borderColor={"#d9d9d9"}
        />

        <Text
          color={"#2fa8ff"}
          fontFamily={"Poppins"}
          fontSize={"0.9rem"}
          textDecor={"underline"}
          fontWeight={"600"}
        >
          Resolve
        </Text>
      </HStack>
    </Flex>
  );
}

export default CommentSection;

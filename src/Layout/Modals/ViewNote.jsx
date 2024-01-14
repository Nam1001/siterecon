import {
  Box,
  Flex,
  HStack,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ViewNoteCard from "../../components/ViewNoteCard";
import { useDispatch, useSelector } from "react-redux";
import { closeNote } from "../../Redux/Store/ViewNoteSlice";
import { ReactComponent as Share } from "../../assets/Share.svg";
import { ReactComponent as Threedots } from "../../assets/ThreeDots.svg";
import OpenButton from "../../components/OpenButton";
import ImageStocks from "../../components/ImageStocks";
import CommentSection from "../../components/CommentSection";
import CommentsInput from "../../components/CommentsInput";
export default function ViewNote() {
  const store = useSelector((store) => store.viewNoteSlice);
  const data = store.value.data;
  const dispatch = useDispatch();
  return (
    <Modal
      size={"lg"}
      isOpen={store.value.boolen}
      onClose={() => dispatch(closeNote())}
    >
      <ModalOverlay />
      <ModalContent
        p={"0px !important"}
        borderRadius={"0.75rem 0.75rem 0.75rem 0.75rem"}
      >
        <Flex
          mt={"5px"}
          p={"0.5rem 1.5rem"}
          w={"100%"}
          justifyContent={"space-between"}
        >
          <HStack>
            <Text
              color={"#666"}
              fontFamily={"Poppins"}
              fontSize={"0.95rem"}
              fontWeight={"500"}
            >
              Created 2d ago by
            </Text>
            <Text
              color={"#000"}
              fontFamily={"Poppins"}
              fontSize={"0.95rem"}
              fontWeight={"600"}
            >
              {data?.creator}
            </Text>
          </HStack>
          <HStack>
            <Share />
            <Threedots />
          </HStack>
        </Flex>
        <ModalBody p={"0px !important"}>
          <Flex
            p={"0.5rem 1.5rem"}
            w={"100%"}
            flexDir={"column"}
            gap={"0.75rem"}
          >
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              w={"100%"}
            >
              <Heading
                color={"#000"}
                fontSize={"1.2rem"}
                fontWeight={"600"}
                fontFamily={"Poppins"}
              >
                Mowing Turf
              </Heading>
              <OpenButton />
            </Flex>
            <Box
              bg={"#f5f5f5"}
              borderRadius={"0.35rem"}
              p={"5px 10px"}
              maxH={"250px"}
              overflow={"auto"}
              className="slider-content"
            >
              <ViewNoteCard />
            </Box>

            <ImageStocks />
            <CommentSection />
          </Flex>
          <CommentsInput />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

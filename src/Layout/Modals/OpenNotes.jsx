import {
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import NoteListCard from "../../components/NoteListCard";
import CreateNoteButton from "../../components/CreateNoteButton";
import { notes } from "../../dummy";
import { useDispatch, useSelector } from "react-redux";
import { close } from "../../Redux/Store/NoteOpenSlice";
import { ReactComponent as ThreeDots } from "../../assets/ThreeDots.svg";
import { ReactComponent as CheckOutIcon } from "../../assets/CheckOutIcon.svg";
export default function OpenNotes() {
  const store = useSelector((store) => store.noteOpenSlice);
  const dispatch = useDispatch();

  return (
    <Drawer
      size={"sm"}
      placement="right"
      isOpen={store.value}
      onClose={() => dispatch(close())}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader
          fontSize={"1.35rem"}
          lineHeight={"normal"}
          fontFamily={"Poppins"}
          color={"#333"}
          fontWeight={"650"}
        >
          Notes
        </DrawerHeader>
        <DrawerBody>
          <Flex gap={"1rem"} w={"100%"} flexDir={"column"}>
            <VStack w={"100%"} alignItems={"flex-start"}>
              <HStack w={"100%"} justifyContent={"space-between"}>
                <Text
                  color={"#666"}
                  fontFamily={"Poppins"}
                  fontWeight={"550"}
                  fontSize={"1rem"}
                >
                  Base view notes (60)
                </Text>
                <CreateNoteButton />
              </HStack>

              <HStack
                alignItems={"center"}
                w={"100%"}
                justifyContent={"space-between"}
              >
                <Checkbox>
                  <Text
                    color={"#666"}
                    fontFamily={"Poppins"}
                    fontWeight={"550"}
                    fontSize={"1rem"}
                  >
                    Select Notes
                  </Text>
                </Checkbox>
                <HStack>
                  <CheckOutIcon style={{ height: "2rem", width: "2rem" }} />
                  <ThreeDots />
                </HStack>
              </HStack>
            </VStack>

            <Flex
              gap={"10px "}
              flexDir={"column"}
              h={"70vh"}
              overflow={"auto"}
              className="slider-content"
            >
              {notes?.map((noteData, index) => (
                <NoteListCard key={index} noteData={noteData} />
              ))}
            </Flex>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

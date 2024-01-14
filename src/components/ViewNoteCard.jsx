import { Flex } from "@chakra-ui/react";
import React from "react";
import NoteViewScrollerCard from "./NoteViewScrollerCard";

export default function ViewNoteCard() {


  return (
    <Flex w={"100%"} flexDir={"column"}>
      <NoteViewScrollerCard />
    </Flex>
  );
}

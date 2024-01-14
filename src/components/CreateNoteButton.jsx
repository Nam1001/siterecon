import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { ReactComponent as AddNote } from "../assets/AddNote.svg";
export default function CreateNoteButton() {
  return (
    <Box
      borderRadius={"0.25rem"}
      bg={"#ffd02b"}
      _hover={{ bg: "#ffe06f" }}
      p={"2px"}
    >
      <Button
        _focus={{ boxShadow: "inset 0 0 1px 2px black" }}
        w={"8rem"}
        bg={"transparent"}
        _hover={{}}
        _active={{}}
        _activeLink={{}}
        borderRadius={"0.25rem"}
        className="create-new-note-btn"
        fontFamily={"Poppins"}
        color={"#333"}
        fontSize={"0.85rem"}
        fontWeight={"600"}
        textTransform={"capitalize"}
        leftIcon={<AddNote style={{ width: "1rem", height: "1rem" }} />}
      >
        Create note
      </Button>
    </Box>
  );
}

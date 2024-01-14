import React from "react";
import { useDispatch } from "react-redux";
import { openNote } from "../Redux/Store/ViewNoteSlice";
import { Button } from "@chakra-ui/react";

export default function OpenButton({id}) {
  const dispatch = useDispatch();
  return (
    <Button
      bg={"transparent"}
      borderRadius={"40px"}
      color={"#e86f00"}
      border={"1.5px solid #e86f00"}
      fontFamily={"Poppins"}
      fontSize={"0.825rem"}
      fontWeight={"600"}
      h={"2.2rem"}
      w={"5rem"}
      _hover={{}}
      _focus={{}}
      _active={{}}
      onClick={() => dispatch(openNote(id))}
    >
      Open
    </Button>
  );
}

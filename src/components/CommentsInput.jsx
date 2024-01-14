import { Box, Divider, HStack, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ReactComponent as InputIcons } from "../assets/InputsIcon.svg";
import { ReactComponent as SendIcon } from "../assets/SendButton.svg";
import { useDispatch, useSelector } from "react-redux";
import { addcomment } from "../Redux/Store/ViewNoteSlice";

export default function CommentsInput() {
  const [comment, setComment] = useState("");
  const store = useSelector((store) => store.viewNoteSlice);
  const data = store.value.data;
  const dispatch = useDispatch();
 


  function handleCommentSubmit() {
      dispatch(addcomment(data?.id));
      setComment("");
  }
  useEffect(()=>{
},[comment])

  return (
    <Box borderRadius={"0 0 0.75rem 0.75rem"} w={"100%"} bg={"#f3f4f6"}>
      <HStack p={"0.5rem 1rem"}>
        <Input
          bg={"transparent"}
          border={"none"}
          value={comment}
          placeholder="Type your comment here."
          _focus={{}}
          _active={{}}
          _hover={{}}
          _focusVisible={{}}
          fontFamily={"Poppins"}
          _placeholder={{ fontStyle: "italic" }}
          onChange={(e) => setComment(e.target.value)}
        />
        <InputIcons style={{ height: "1.75rem", width: "5.25rem" }} />
        <Divider
          orientation={"vertical"}
          borderWidth={"1px"}
          h={"1.2rem"}
          borderColor={"#d9d9d9"}
        />
        <SendIcon
          cursor={"pointer"}
          style={{ height: "1.75rem", width: "5.25rem" }}
          onClick={handleCommentSubmit}
        />
      </HStack>
    </Box>
  );
}

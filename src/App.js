import { Badge, Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import "./App.css";
import NoteButton from "./components/NoteButton";
import ReportButton from "./components/ReportButton";
import OpenNotes from "./Layout/Modals/OpenNotes";
import { ReactComponent as Note } from "./assets/Note.svg";
import { useDispatch } from "react-redux";
import { open } from "./Redux/Store/NoteOpenSlice";
import { openNote } from "./Redux/Store/ViewNoteSlice";
import ViewNote from "../src/Layout/Modals/ViewNote";
function App() {
  const dispatch = useDispatch();

  const handeBadgeClick = (payload) => {
    return dispatch(openNote(payload));
  };
  return (
    <Box
      className="hero-section-home"
      minH={"100vh"}
      h={"100%"}
      display={"grid"}
      placeContent={"center"}
      w={"100%"}
    >
      <Box w={"100%"}>
        <Box
          pos={"absolute"}
          top={"20%"}
          right={"0"}
          w={"76vw"}
          h={"80vh"}
          display={"flex"}
          className="hero-section-home-center-map"
        >
          <Box
            position={"absolute"}
            left={"10%"}
            h={"100%"}
            w={"60%"}
            className="hero-section-home-center-upperlayer"
          >
            <Box h={"100%"} w={"100%"} display={"grid"} placeContent={"center"}>
              <Flex gap={"2rem"}>
                <VStack gap={"7rem"}>
                  <Badge
                    onClick={() => handeBadgeClick(1)}
                    cursor={"pointer"}
                    bg={"transparent"}
                  >
                    <Note className="main-not-icon" />
                    <Text
                      fontFamily={"Poppins"}
                      pos={"relative"}
                      bottom={"25px"}
                      left={"8px"}
                      fontWeight={"600"}
                      fontSize={"0.7rem"}
                    >
                      T1
                    </Text>
                  </Badge>
                  <Badge
                    onClick={() => handeBadgeClick(4)}
                    cursor={"pointer"}
                    bg={"transparent"}
                  >
                    <Note className="main-not-icon" />
                    <Text
                      fontFamily={"Poppins"}
                      pos={"relative"}
                      bottom={"25px"}
                      left={"8px"}
                      fontWeight={"600"}
                      fontSize={"0.7rem"}
                    >
                      T4
                    </Text>
                  </Badge>
                </VStack>
                <HStack gap={"10rem"}>
                  <Badge
                    onClick={() => handeBadgeClick(3)}
                    cursor={"pointer"}
                    bg={"transparent"}
                  >
                    <Note className="main-not-icon" />
                    <Text
                      fontFamily={"Poppins"}
                      pos={"relative"}
                      bottom={"25px"}
                      left={"8px"}
                      fontWeight={"600"}
                      fontSize={"0.7rem"}
                    >
                      T3
                    </Text>
                  </Badge>
                  <Badge
                    onClick={() => handeBadgeClick(2)}
                    cursor={"pointer"}
                    bg={"transparent"}
                  >
                    <Note className="main-not-icon" />
                    <Text
                      fontFamily={"Poppins"}
                      pos={"relative"}
                      bottom={"25px"}
                      left={"8px"}
                      fontWeight={"600"}
                      fontSize={"0.7rem"}
                    >
                      T2
                    </Text>
                  </Badge>
                </HStack>
              </Flex>
            </Box>
          </Box>
          <Flex p={"5px 20px"} w={"100%"} justifyContent={"end"}>
            <VStack
              h={"6.75rem"}
              w={"3.5rem"}
              bg={"#fff"}
              display={"inline-flex"}
              p={"0.25rem"}
              alignItems={"center"}
              gap={"0.25rem"}
              borderRadius={"0.5rem"}
            >
              <NoteButton onClick={() => dispatch(open())} />
              <ReportButton />
              {/* notes side bar */}
            </VStack>
          </Flex>
        </Box>
      </Box>
      {/* open notes side bar */}
      <OpenNotes />

      {/* open specific note details in modal */}
      <ViewNote />
    </Box>
  );
}

export default App;

// Complete the Index page component here
// Use chakra-ui
import React from "react";
import { Box, Button, Icon, Text, VStack } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

const Index = () => {
  // State to manage play/pause toggle
  const [isPlaying, setIsPlaying] = React.useState(false);
  const videoRef = React.useRef(null);

  // Function to toggle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Function to skip forward 10 seconds
  const skipForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10;
    }
  };

  // Function to skip backward 10 seconds
  const skipBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10;
    }
  };

  return (
    <VStack spacing={4}>
      <Box as="video" ref={videoRef} width="full" controls>
        <source src="https://www.example.com/sample-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Box>
      <Box>
        <Button onClick={skipBackward} leftIcon={<Icon as={FaBackward} />}>
          Back 10s
        </Button>
        <Button onClick={togglePlay} mx={2}>
          {isPlaying ? <Icon as={FaPause} /> : <Icon as={FaPlay} />}
          {isPlaying ? "Pause" : "Play"}
        </Button>
        <Button onClick={skipForward} rightIcon={<Icon as={FaForward} />}>
          Forward 10s
        </Button>
      </Box>
      <Text fontSize="sm">Video Player Example</Text>
    </VStack>
  );
};

export default Index;

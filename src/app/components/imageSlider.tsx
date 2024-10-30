import { Box } from "@chakra-ui/react";
import "./slider.css";

export default function ImageSlider() {
  return (
    <Box h="100%" display="flex" alignItems="center" justifyContent="center">
      <Box display="flex" maxW="1000px" gap="20px">
        <img
          src="https://picsum.photos/id/23/500"
          alt="Image 1"
          className="carousel-image"
        ></img>
      </Box>
    </Box>
  );
}

import { Link } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react/box";
import { Grid } from "@chakra-ui/react/grid";
import { Heading, Text } from "@chakra-ui/react/typography";
import { FaChevronDown } from "react-icons/fa";
import ImageSlider from "./imageSlider";

export default function MainPage() {
  return (
    <Grid gridTemplateColumns="3fr 2fr">
      <Box
        bgImg="url(/img/main.jpg)"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPos="right"
        w="100%"
        h="100vh"
        p="40px"
        spaceY="10px"
        pos="relative"
      >
        <Box
          pos="absolute"
          w="540px"
          bottom="100px"
          right="50px"
          color="purple.700"
          bgColor="gray.300/40"
          display="flex"
          flexDir="column"
          alignItems="center"
        >
          <Heading>WEDDING ANNOUNCEMENT</Heading>
          <Heading size="6xl">Tom & Jerry</Heading>
          <Box display="flex" flexDir="column" alignItems="center">
            <Text fontSize="md" textAlign="center">
              "Aku ingin mencintaimu dengan sederhana; dengan kata yang tak
              sempat diucapkan kayu kepada api yang menjadikannya abu. Aku ingin
              mencintaimu dengan sederhana; dengan isyarat yang tak sempat
              disampaikan awan kepada hujan yang menjadikannya tiada."
            </Text>
            <Box as="cite" display="inline-block" color="pink.500">
              — Sapardi Djoko Damono
            </Box>
          </Box>
        </Box>
      </Box>
      <Box overflowY="scroll" pos="relative">
        {/* Content 1 */}
        <Box
          h="100%"
          bgImage="url(/img/wedding_bg.jpg)"
          bgSize="cover"
          bgRepeat="no-repeat"
          bgPos="center"
          pos="relative"
        >
          <Box
            display="flex"
            flexDir="column"
            gapY="20px"
            pos="absolute"
            top="150px"
            w="100%"
            color="pink.500"
          >
            <Heading textAlign="center" fontWeight="bold">
              WEDDING ANNOUNCEMENT
            </Heading>
            <Heading textAlign="center" fontSize="5xl">
              Tom & Jerry
            </Heading>
            <Heading textAlign="center" fontSize="xl">
              #TomJerry
            </Heading>
          </Box>
          <Link
            colorPalette="teal"
            pos="absolute"
            bottom="50px"
            right="50px"
            fontWeight="semibold"
          >
            Scroll Down <FaChevronDown />
          </Link>
        </Box>
        {/* Content 2 */}
        <Box
          h="100%"
          display="flex"
          flexDir="column"
          alignItems="center"
          gapY="20px"
          p="50px 30px"
        >
          <Heading textAlign="center" fontSize="md">
            DEAR MR-MRS-MS, <br /> Family & Friends
          </Heading>
          <Heading textAlign="center" w="1/2" fontSize="2xl">
            Welcome to Tiffany & Jared’s Wedding Website
          </Heading>
          <Text textAlign="center">
            Together with joyful hearts and the grace of God, we joyfully
            announce the upcoming of our marriage.
          </Text>
          {/* <ImageSlider /> */}
        </Box>
      </Box>
    </Grid>
  );
}

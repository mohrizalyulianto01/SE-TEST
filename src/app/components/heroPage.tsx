import { Box, Button, Heading } from "@chakra-ui/react";
import { RiMailLine } from "react-icons/ri";

export default function HeroPage() {
  return (
    <Box
      w="100%"
      h="100vh"
      bgImg="url(/img/hero.jpg)"
      bgSize="cover"
      bgRepeat="no-repeat"
      backgroundPosition="25% 50%"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading size="xl">WEDDING ANNOUNCEMENT</Heading>
      <Heading size="4xl" fontWeight="bolder">
        Tom & Jerry
      </Heading>
      <Button p="10px 40px" size="xl" variant="surface" rounded="xl">
        <RiMailLine /> Open
      </Button>
    </Box>
  );
}

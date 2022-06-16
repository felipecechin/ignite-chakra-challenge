import { Box, Flex, SimpleGrid, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { Header } from "../components/Header";
import BannerEurope from "../components/BannerEurope";


export default function Continent() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex direction={"column"}>
      <Header withPrevious={true} />
      <BannerEurope />
      <SimpleGrid
        px={[5, 20]}
        py={[5, 20]}
        columns={[1, 1, 1, 2]}
        spacing={4}
      >
        <Box>
          <Text
            fontFamily="Poppins"
            fontWeight={400}
            fontSize={["0.875rem", "1.5rem"]}
            lineHeight={["1.313rem", "2.25rem"]}
            color="headingsAndText"
            textAlign="justify"
          >
            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
        </Box>
        <Box>
          <Flex
            width={"100%"}
            height={"100%"}
            pl={[0, 0, 0, 20]}
            justify="space-between"
            alignItems="center"
          >
            <Stack spacing={0}>
              <Text
                fontWeight={600}
                color="highlight"
                textAlign={["left", "left", "left", "center"]}
                fontSize={["1.5rem", "3rem"]}
                lineHeight={["2.25rem", "4.5rem"]}
                fontFamily="Poppins"
              >
                50
              </Text>
              <Text
                fontFamily="Poppins"
                fontWeight={[400, 600]}
                color="headingsAndText"
                fontSize={['1.125rem', '1.5rem']}
                lineHeight={['1.688rem', '2.25rem']}
              >
                países
              </Text>
            </Stack>
            <Stack spacing={0}>
              <Text
                fontWeight={600}
                color="highlight"
                textAlign={["left", "left", "left", "center"]}
                fontSize={["1.5rem", "3rem"]}
                lineHeight={["2.25rem", "4.5rem"]}
                fontFamily="Poppins"
              >
                60
              </Text>
              <Text
                fontFamily="Poppins"
                fontWeight={[400, 600]}
                color="headingsAndText"
                fontSize={['1.125rem', '1.5rem']}
                lineHeight={['1.688rem', '2.25rem']}
              >
                línguas
              </Text>
            </Stack>
            <Stack spacing={0}>
              <Text
                fontWeight={600}
                color="highlight"
                textAlign={["left", "left", "left", "center"]}
                fontSize={["1.5rem", "3rem"]}
                lineHeight={["2.25rem", "4.5rem"]}
                fontFamily="Poppins"
              >
                27
              </Text>
              <Text
                fontFamily="Poppins"
                fontWeight={[400, 600]}
                color="headingsAndText"
                fontSize={['1.125rem', '1.5rem']}
                lineHeight={['1.688rem', '2.25rem']}
              >
                cidades +100
              </Text>
            </Stack>
          </Flex>
        </Box>
      </SimpleGrid>
      <Flex direction="column" justify="start" px={[5, 20]} py={[5, 10]}>
        <Text
          fontFamily={"Poppins"}
          fontWeight={500}
          fontSize={["1.5rem", "2.25rem"]}
          lineHeight={["2.25rem", "3.375rem"]}
          color="headingsAndText"
        >
          Cidades +100
        </Text>
        <SimpleGrid columns={[1, 4]} spacing={"5"} py={"10"} >
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}

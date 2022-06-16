import { Box, Flex, Img, SimpleGrid, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { Header } from "../components/Header";
import BannerEurope from "../components/BannerEurope";


export default function Continent() {
  return (
    <Flex direction={"column"}>
      <Header withPrevious={true} />
      <BannerEurope />
      <SimpleGrid
        px={[5, 20]}
        py={[5, 20]}
        columns={[1, null, null, 2]}
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
            pl={[0, null, null, 20]}
            justify="space-between"
            alignItems="center"
          >
            <Stack spacing={0}>
              <Text
                fontWeight={600}
                color="highlight"
                textAlign={["left", null, null, "center"]}
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
                textAlign={["left", null, null, "center"]}
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
                textAlign={["left", null, null, "center"]}
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
        <SimpleGrid flex="1" gap="4" minChildWidth="256px" py={10} justifyItems="center">
          <Flex direction={"column"} bg='white' width={"256px"}>
            <Img src="/images/londres.svg" width={"100%"} />
            <Flex justify={"space-around"} py={5} border={"1px solid rgba(255, 186, 8, 0.5)"} borderTopWidth={0} borderBottomRadius={"md"}>
              <Flex direction={"column"} justify="space-between" minH={"14"}>
                <Text
                  fontFamily="Barlow"
                  fontWeight={600}
                  fontSize={"1.25rem"}
                  lineHeight={"1.563rem"}
                  color="headingsAndText"
                >
                  Londres
                </Text>
                <Text
                  fontFamily="Barlow"
                  fontWeight={500}
                  fontSize={"1rem"}
                  lineHeight={"1.625rem"}
                  color="#999999"
                >Reino Unido</Text>
              </Flex>
              <Flex>
                <Img src="/images/londresIcon.svg" />
              </Flex>
            </Flex>
          </Flex>
          <Flex direction={"column"} bg='white' width={"256px"}>
            <Img src="/images/paris.svg" width={"100%"} />
            <Flex justify={"space-around"} py={5} border={"1px solid rgba(255, 186, 8, 0.5)"} borderTopWidth={0} borderBottomRadius={"md"}>
              <Flex direction={"column"} justify="space-between" minH={"14"}>
                <Text
                  fontFamily="Barlow"
                  fontWeight={600}
                  fontSize={"1.25rem"}
                  lineHeight={"1.563rem"}
                  color="headingsAndText"
                >
                  Paris
                </Text>
                <Text
                  fontFamily="Barlow"
                  fontWeight={500}
                  fontSize={"1rem"}
                  lineHeight={"1.625rem"}
                  color="#999999"
                >França</Text>
              </Flex>
              <Flex>
                <Img src="/images/parisIcon.svg" />
              </Flex>
            </Flex>
          </Flex>
          <Flex direction={"column"} bg='white' width={"256px"}>
            <Img src="/images/roma.svg" width={"100%"} />
            <Flex justify={"space-around"} py={5} border={"1px solid rgba(255, 186, 8, 0.5)"} borderTopWidth={0} borderBottomRadius={"md"}>
              <Flex direction={"column"} justify="space-between" minH={"14"}>
                <Text
                  fontFamily="Barlow"
                  fontWeight={600}
                  fontSize={"1.25rem"}
                  lineHeight={"1.563rem"}
                  color="headingsAndText"
                >
                  Roma
                </Text>
                <Text
                  fontFamily="Barlow"
                  fontWeight={500}
                  fontSize={"1rem"}
                  lineHeight={"1.625rem"}
                  color="#999999"
                >Itália</Text>
              </Flex>
              <Flex>
                <Img src="/images/romaIcon.svg" />
              </Flex>
            </Flex>
          </Flex>
          <Flex direction={"column"} bg='white' width={"256px"}>
            <Img src="/images/praga.svg" width={"100%"} />
            <Flex justify={"space-around"} py={5} border={"1px solid rgba(255, 186, 8, 0.5)"} borderTopWidth={0} borderBottomRadius={"md"}>
              <Flex direction={"column"} justify="space-between" minH={"14"}>
                <Text
                  fontFamily="Barlow"
                  fontWeight={600}
                  fontSize={"1.25rem"}
                  lineHeight={"1.563rem"}
                  color="headingsAndText"
                >
                  Praga
                </Text>
                <Text
                  fontFamily="Barlow"
                  fontWeight={500}
                  fontSize={"1rem"}
                  lineHeight={"1.625rem"}
                  color="#999999"
                >República Tcheca</Text>
              </Flex>
              <Flex>
                <Img src="/images/pragaIcon.svg" />
              </Flex>
            </Flex>
          </Flex>
          <Flex direction={"column"} bg='white' width={"256px"}>
            <Img src="/images/amsterda.svg" width={"100%"} />
            <Flex justify={"space-around"} py={5} border={"1px solid rgba(255, 186, 8, 0.5)"} borderTopWidth={0} borderBottomRadius={"md"}>
              <Flex direction={"column"} justify="space-between" minH={"14"}>
                <Text
                  fontFamily="Barlow"
                  fontWeight={600}
                  fontSize={"1.25rem"}
                  lineHeight={"1.563rem"}
                  color="headingsAndText"
                >
                  Amsterdã
                </Text>
                <Text
                  fontFamily="Barlow"
                  fontWeight={500}
                  fontSize={"1rem"}
                  lineHeight={"1.625rem"}
                  color="#999999"
                >Holanda</Text>
              </Flex>
              <Flex>
                <Img src="/images/amsterdaIcon.svg" />
              </Flex>
            </Flex>
          </Flex>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}

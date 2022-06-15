import { Box, Divider, Flex, Grid, HStack, Image, List, ListIcon, ListItem, Stack, Text, UnorderedList, useBreakpointValue } from "@chakra-ui/react";
import Banner from "../components/Banner";
import { Header } from "../components/Header";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex direction={"column"}>
      <Header />
      <Banner />
      {isWideVersion &&
        <Flex px={["10", "20"]} py={["20", "28"]} justify={"space-between"}>
          <Stack spacing={['2', '4']}>
            <Image src="/images/cocktail 1.svg" margin="auto" width={[10, 20]} alt="logoWorldTrip" />
            <Text
              fontFamily={"Poppins"}
              fontWeight={600}
              fontSize="1.5rem"
              lineHeight="2.25rem"
              color="headingsAndText"
            >
              vida noturna
            </Text>
          </Stack>
          <Stack spacing={['2', '4']}>
            <Image src="/images/surf 1.svg" margin="auto" width={[10, 20]} alt="logoWorldTrip" />
            <Text
              fontFamily={"Poppins"}
              fontWeight={600}
              fontSize="1.5rem"
              lineHeight="2.25rem"
              color="headingsAndText"
            >
              praia
            </Text>
          </Stack>
          <Stack spacing={['2', '4']}>
            <Image src="/images/building 1.svg" margin="auto" width={[10, 20]} alt="logoWorldTrip" />
            <Text
              fontFamily={"Poppins"}
              fontWeight={600}
              fontSize="1.5rem"
              lineHeight="2.25rem"
              color="headingsAndText"
            >
              moderno
            </Text>
          </Stack>
          <Stack spacing={['2', '4']}>
            <Image src="/images/museum 1.svg" margin="auto" width={[10, 20]} alt="logoWorldTrip" />
            <Text
              fontFamily={"Poppins"}
              fontWeight={600}
              fontSize="1.5rem"
              lineHeight="2.25rem"
              color="headingsAndText"
            >
              clássico
            </Text>
          </Stack>
          <Stack spacing={['2', '4']}>
            <Image src="/images/earth 1.svg" margin="auto" width={[10, 20]} alt="logoWorldTrip" />
            <Text
              fontFamily={"Poppins"}
              fontWeight={600}
              fontSize="1.5rem"
              lineHeight="2.25rem"
              color="headingsAndText"
            >
              e mais...
            </Text>
          </Stack>
        </Flex>
      }
      {!isWideVersion &&
        <Flex px={["20", "20"]} py={["14", "28"]} wrap="wrap" justify="space-around">
          <HStack>
            <Text>
              &bull;
            </Text>
            <Text
              fontFamily={"Poppins"}
              fontWeight={500}
              fontSize="1.125rem"
              lineHeight="1.688rem"
              color="headingsAndText"
            >
              vida noturna
            </Text>
          </HStack>
          <HStack>
            <Text>
              &bull;
            </Text>
            <Text
              fontFamily={"Poppins"}
              fontWeight={500}
              fontSize="1.125rem"
              lineHeight="1.688rem"
              color="headingsAndText"
            >
              praia
            </Text>
          </HStack>
          <HStack>
            <Text>
              &bull;
            </Text>
            <Text
              fontFamily={"Poppins"}
              fontWeight={500}
              fontSize="1.125rem"
              lineHeight="1.688rem"
              color="headingsAndText"
            >
              moderno
            </Text>
          </HStack>
          <HStack>
            <Text>
              &bull;
            </Text>
            <Text>
              clássico
            </Text>
          </HStack>
          <HStack>
            <Text>
              &bull;
            </Text>
            <Text>
              e mais...
            </Text>
          </HStack>
        </Flex>
      }
      <Box px={["10", "20"]} width={"100%"}>
        <Divider width={"50px"} margin="auto" borderColor="headingsAndText" border="1px solid" />
      </Box>
    </Flex>
  )
}

import { Box, Divider, Flex, HStack, Image, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import Banner from "../components/Banner";
import { Header } from "../components/Header";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex direction={"column"}>
      <Header withPrevious={false} />
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
        <Flex px={["10", "20"]} py={["14", "28"]} wrap="wrap" justify="space-around">
          <HStack flexBasis={"50%"}>
            <Text
              color="#FFBA08"
              fontSize="2xl"
            >
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
          <HStack flexBasis={"50%"} justify="end">
            <Text
              color="#FFBA08"
              fontSize="2xl"
            >
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
          <HStack flexBasis={"50%"}>
            <Text
              color="#FFBA08"
              fontSize="2xl"
            >
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
          <HStack flexBasis={"50%"} justify="end">
            <Text
              color="#FFBA08"
              fontSize="2xl"
            >
              &bull;
            </Text>
            <Text
              fontFamily={"Poppins"}
              fontWeight={500}
              fontSize="1.125rem"
              lineHeight="1.688rem"
              color="headingsAndText"
            >
              clássico
            </Text>
          </HStack>
          <HStack>
            <Text
              color="#FFBA08"
              fontSize="2xl"
            >
              &bull;
            </Text>
            <Text
              fontFamily={"Poppins"}
              fontWeight={500}
              fontSize="1.125rem"
              lineHeight="1.688rem"
              color="headingsAndText"
            >
              e mais...
            </Text>
          </HStack>
        </Flex>
      }
      <Box px={["10", "20"]} width={"100%"}>
        <Divider width={"50px"} margin="auto" borderColor="headingsAndText" border="1px solid" />
      </Box>
      <Text
        px={[5, 20]}
        py={[10, 20]}
        fontFamily="Poppins"
        fontWeight={500}
        fontSize={["1.25rem", "2.25rem"]}
        lineHeight={["1.875rem", "3.375rem"]}
        color="headingsAndText"
        margin="auto"
        textAlign="center"
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Text>
      <Box height={["250px", "450px"]} px={["0", "20"]} my={["10", "10"]}>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Flex
              width="100%"
              height="100%"
              background='url(/images/continent.svg) 100% no-repeat'
              backgroundSize='cover'
              justify="center"
              alignItems="center"
              direction="column"
              onClick={() => router.push('/continent')}
              _hover={{
                cursor: "pointer"
              }}
            >
              <Text
                fontFamily="Poppins"
                fontWeight={700}
                fontSize={["1.5rem", "3rem"]}
                lineHeight={["2.25rem", "4.5rem"]}
                color="lightText"
              >
                Europa
              </Text>
              <Text
                fontFamily="Poppins"
                fontWeight={700}
                fontSize={["0.875rem", "1.5rem"]}
                lineHeight={["1.313rem", "2.25rem"]}
                color="lightText"
              >
                O continente mais antigo
              </Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              width="100%"
              height="100%"
              background='url(/images/continent.svg) 100% no-repeat'
              backgroundSize='cover'
              justify="center"
              alignItems="center"
              direction="column"
            >
              <Text
                fontFamily="Poppins"
                fontWeight={700}
                fontSize={["1.5rem", "3rem"]}
                lineHeight={["2.25rem", "4.5rem"]}
                color="lightText"
              >
                América do Norte
              </Text>
              <Text
                fontFamily="Poppins"
                fontWeight={700}
                fontSize={["0.875rem", "1.5rem"]}
                lineHeight={["1.313rem", "2.25rem"]}
                color="lightText"
              >
                O continente ...
              </Text>
            </Flex>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Flex>
  )
}

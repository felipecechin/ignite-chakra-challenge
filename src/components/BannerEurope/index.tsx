import { Box, Flex, Text } from '@chakra-ui/react'

export default function BannerEurope() {

  return (
    <Box
      px={[5, 20]}
      w="100%"
      h={['150px', '500px']}
      background='url(/images/europebanner.svg) 100% no-repeat'
      backgroundSize='cover'
    >
      <Flex direction="column" alignItems={["center", "start"]} justifyContent={["center", "end"]} height="100%" pb={['0', '14']}>
        <Text
          fontFamily="Poppins"
          fontWeight={600}
          fontSize={["1.75rem", "3rem"]}
          lineHeight={["2.625rem", "4.5rem"]}
          color="lightText"
        >Europa
        </Text>
      </Flex>
    </Box>
  )
}   
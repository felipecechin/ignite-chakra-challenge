import { Box, Flex, Img, Stack, Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'

export default function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box
      px={[5, 20]}
      w="100%"
      h={['163px', '335px']}
      background='url(/images/background.svg) 100% no-repeat'
      backgroundSize='cover'
    >
      <Flex alignItems='center' justifyContent='space-between' height="100%">
        <Stack spacing={['2', '4']}>
          <Text
            as='h2'
            fontWeight={500}
            color="lightText"
            fontSize={["1.25rem", "2.25rem"]}
            lineHeight={["1.875rem", "3.375rem"]}
            fontFamily="Poppins"
          >
            5 Continentes,<br /> infinitas possibilidades.
          </Text>
          <Text
            fontFamily="Poppins"
            fontWeight={400}
            color="lightInfo"
            fontSize={['0.875rem', '1.25rem']}
            lineHeight={['1.313rem', '1.875rem']}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Stack>
        {isWideVersion &&
          <Img src='/images/airplane.svg' mb='-100px' alt='airplane' />
        }
      </Flex>
    </Box>
  )
}   
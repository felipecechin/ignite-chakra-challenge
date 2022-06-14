import { MdArrowBack } from 'react-icons/md'
import { Box, Icon, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Box as='header' paddingX={['10', '20']}>
      <Box position="relative" display="flex" alignItems="center" py={4}>
        <Icon as={MdArrowBack} position="absolute" left="auto" />
        <Image src="/images/logo.svg" margin="auto" width={[24, 40]} alt="logoWorldTrip" />
      </Box>
    </Box>
  );
}

//#f5f8fa
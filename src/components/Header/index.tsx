import { MdArrowBack } from 'react-icons/md'
import { Box, Icon, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface HeaderProps {
  withPrevious: boolean;
}

export function Header({ withPrevious }: HeaderProps) {
  const router = useRouter()

  return (
    <Box as='header' paddingX={[5, 20]}>
      <Box position="relative" display="flex" alignItems="center" py={4}>
        {withPrevious &&
          <Icon as={MdArrowBack} position="absolute" left="auto" onClick={() => router.push('/')} _hover={{
            cursor: "pointer"
          }} />
        }
        <Image src="/images/logo.svg" margin="auto" width={[24, 40]} alt="logoWorldTrip" />
      </Box>
    </Box>
  );
}

//#f5f8fa
import { Box, Flex, Heading, Link, Spacer } from '@chakra-ui/react';
import NextLink from 'next/link';

const NAV_LINKS = ['Services', 'Skills', 'Projects', 'Hobbies'];

const Header = () => {
  return (
    <Box px='1rem' as='header' borderColor='gray.200' py='4' h='5rem' backgroundColor='#191d24'>
      <Flex maxW='container.xl' mx='auto' justifyContent='space-between' alignItems='center' h='100%'>
        <NextLink href='/' passHref>
          <Link as='span'>
            <Heading size='md' color='primary1'>
              My portfolio
            </Heading>
          </Link>
        </NextLink>
        <Flex display={{ base: 'none', md: 'flex' }}>
          {NAV_LINKS.map(link => (
            <Link key={link} color='primary1' as='span' mr='4'>
              {link}
            </Link>
          ))}
        </Flex>
        <Box>
          <Link color='primary1' fontWeight={700} as='span' mr='4'>
            Contact
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;

import { scrollToSection } from '@/utils/scroll';
import { Box, Flex, Heading, Link, Spacer } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useState, useEffect } from 'react';

const NAV_LINKS = ['Services', 'Skills', 'Projects', 'Hobbies'];

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      px='1rem'
      as='header'
      borderColor='gray.200'
      h='5rem'
      backgroundColor='primary0'
      position={isSticky ? 'sticky' : 'relative'}
      top={0}
      left={0}
      right={0}
      zIndex={999}
    >
      <Flex maxW='container.xl' mx='auto' justifyContent='space-between' alignItems='center' h='100%'>
        <Link as='span' onClick={() => scrollToSection('home')}>
          <Heading size='md' color='primary1'>
            My portfolio
          </Heading>
        </Link>
        <Flex display={{ base: 'none', md: 'flex' }}>
          {NAV_LINKS.map(link => (
            <Link key={link} color='primary1' as='span' mr='1.5rem' onClick={() => scrollToSection(link.toLowerCase())}>
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

import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import SocialMedia from '../SocialMedia';

const FooterWithLinks: React.FC = () => {
  return (
    <Box
      backgroundColor='primary0'
      pt='1.5rem'
      pb='2rem'
      px={{ base: '1rem', md: '2.5rem' }}
      zIndex='layoutElement'
      position='relative'
      as='footer'
    >
      <Flex alignItems='center' justifyContent='center'>
        <Flex
          w='100%'
          maxW='64rem'
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems='center'
          justifyContent='space-between'
        >
          <Text textStyle='caption-12' color='primary1' marginBottom={{ base: '.5rem', md: '0' }}>
            Copyright © 2024 - All right reserved
          </Text>
          <Flex alignItems='center' gap='1rem' justifyContent='center'>
            <SocialMedia />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default FooterWithLinks;

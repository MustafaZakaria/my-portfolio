import { ACHIEVEMENTS } from '@/constants/achievements';
import { Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

const Achievements = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Flex
      mt={{ base: '2rem', md: '3rem' }}
      w='100%'
      maxW={{ base: '100%', md: '36.0625rem' }}
      backgroundColor='primary2'
    >
      <Flex flexDir={{ base: 'column', md: 'row' }} borderRadius='12px' width='100%' height='100%'>
        {ACHIEVEMENTS.map(({ name, description, text }, index) => (
          <Flex
            key={name}
            justifyContent='center'
            alignItems='center'
            borderRightWidth={isMobile ? 0 : ACHIEVEMENTS.length - 1 !== index ? 0.5 : 0}
            borderRightColor='primary3'
            borderBottomWidth={!isMobile ? 0 : ACHIEVEMENTS.length - 1 !== index ? 1 : 0}
            borderBottomColor='primary3'
            flexDir='column'
            p='1rem 1.5rem'
            minW='8.1875rem'
          >
            <Text color='primary3' textStyle='body-16'>
              {name}
            </Text>
            <Text textStyle='h4-primary' color='primary1' fontWeight={700}>
              {description}
            </Text>
            <Text color='primary1' textStyle='caption-12'>
              {text}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Achievements;

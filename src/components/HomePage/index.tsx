import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { MIN_HEIGHT_FOLD } from '../../utils/sizings';
import MyProfile from '../MyProfile';
import Achievements from '../Achievements';
import Services from '../Services';

const HomePageLanding = () => {
  return (
    <Box backgroundColor='#191d24' minH={MIN_HEIGHT_FOLD}>
      <Flex flexDir='column' w='100%' maxW='64rem' mx='auto' alignItems='center' px='1rem' justifyContent='center'>
        <MyProfile />
        <Achievements />
        <Services />
      </Flex>
    </Box>
  );
};

export default HomePageLanding;

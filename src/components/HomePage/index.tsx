import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { MIN_HEIGHT_FOLD } from '../../utils/sizings';
import MyProfile from '../MyProfile';
import Achievements from '../Achievements';
import Services from '../Services';

const HomePageLanding = () => {
  return (
    <Box backgroundColor='primary0' minH={MIN_HEIGHT_FOLD}>
      <Flex
        id='home'
        flexDir='column'
        w='100%'
        maxW='64rem'
        mx='auto'
        alignItems='center'
        px='1rem'
        pb='2rem'
        justifyContent='center'
      >
        <MyProfile />
        <Achievements />
        <Services />
      </Flex>
    </Box>
  );
};

export default HomePageLanding;

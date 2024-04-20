import { Box, Flex } from '@chakra-ui/react';
import { MIN_HEIGHT_FOLD } from '../../utils/sizings';
import Achievements from '../Achievements';
import Experience from '../Experience';
import Hobbies from '../Hobbies';
import MyProfile from '../MyProfile';
import Projects from '../Projects';
import Services from '../Services';
import Skills from '../Skills';
import ContactMe from '../ContactMe';

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
        <Skills />
        <Projects />
        <Hobbies />
        <Experience />
        <ContactMe />
      </Flex>
    </Box>
  );
};

export default HomePageLanding;

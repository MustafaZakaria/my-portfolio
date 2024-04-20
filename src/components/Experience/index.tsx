import { Box, Flex, Text } from '@chakra-ui/react';
import ExperienceCard from './ExperienceCard';
import { EXPERIENCES } from '@/constants/experiences';
import { ImHome } from 'react-icons/im';
import { CiStop1 } from 'react-icons/ci';
import { FaArrowTurnDown } from 'react-icons/fa6';

const Experience = () => {
  return (
    <Flex
      id='projects'
      w='100%'
      flexDir='column'
      alignItems='center'
      justifyContent='center'
      mt={{ base: '3rem', md: '9rem' }}
      mb={{ base: '1rem', md: '6rem' }}
    >
      <Text mb={{ base: '1rem', md: '7rem' }} color='pink1' textStyle='h4-primary' fontWeight={700}>
        Timeline & Experience
      </Text>
      <Flex
        position='relative'
        direction='column'
        gap='2rem'
        minW={{ base: '100%', md: '52rem' }}
        justifyContent='center'
        alignItems='center'
        mx='auto'
      >
        {EXPERIENCES.map((experience, index) => (
          <Flex
            key={index}
            flexDir={{ base: 'column', md: 'row' }}
            w={{ base: '100%', md: '100%' }}
            mr={{ base: 0, md: index % 2 === 0 ? '4rem' : '0' }}
            ml={{ base: 0, md: index % 2 !== 0 ? '4rem' : '0' }}
            justifyContent={{ base: 'flex-start', md: index % 2 === 0 ? 'flex-start' : 'flex-end' }}
          >
            <Box
              display={{ base: 'none', md: 'block' }}
              position='absolute'
              top='-4.25rem'
              bottom='0'
              left='50%'
              transform='translateX(-50%)'
              width='4px'
              backgroundColor='purple1'
              height='115%'
            />
            <Flex
              display={{ base: 'none', md: 'flex' }}
              alignItems='center'
              justifyContent='center'
              width='2.5rem'
              height='2.5rem'
              borderRadius='100%'
              backgroundColor='purple1'
              position='absolute'
              top='-4.25rem'
              bottom='0'
              left='50%'
              transform='translateX(-50%)'
            >
              <ImHome size={24} color='white' />
            </Flex>
            <Flex
              display={{ base: 'none', md: 'flex' }}
              alignItems='center'
              justifyContent='center'
              width='2.5rem'
              height='2.5rem'
              borderRadius='100%'
              backgroundColor='purple1'
              position='absolute'
              bottom='-10%'
              left='50%'
              transform='translateX(-50%)'
            >
              <CiStop1 size={24} color='white' />
            </Flex>

            <ExperienceCard index={index} {...experience} />
            <Flex
              display={{ base: index === EXPERIENCES.length - 1 ? 'none' : 'flex', md: 'none' }}
              alignItems='center'
              justifyContent='center'
              mt='2rem'
            >
              <FaArrowTurnDown />
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Experience;

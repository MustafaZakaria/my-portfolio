import { Flex, Grid, Text } from '@chakra-ui/react';
import SkillBar from './SkillBar';
import { skillsData } from '@/constants/skills';

const Skills = () => {
  return (
    <Flex
      id='services'
      w='100%'
      flexDir='column'
      alignItems='center'
      justifyContent='center'
      mt={{ base: '3rem', md: '9rem' }}
    >
      <Text mb={{ base: '1rem', md: '1.5rem' }} color='pink1' textStyle='h4-primary' fontWeight={700}>
        Skills & Technologies
      </Text>
      <Grid
        w='100%'
        gridTemplateColumns={{
          base: 'repeat(1,1fr)',
          md: 'repeat(2,1fr)',
          lg: 'repeat(3,1fr)',
        }}
        gap='1.5rem'
        flexDir={{ base: 'column', md: 'row' }}
      >
        {skillsData.map((skill, index) => (
          <SkillBar key={index} {...skill} />
        ))}
      </Grid>
    </Flex>
  );
};

export default Skills;

import { HOBBIES_LIST } from '@/constants/hobbies';
import { Flex, Grid, Text } from '@chakra-ui/react';
import HobbyCard from './HobbyCard';

const Hobbies = () => {
  return (
    <Flex
      id='hobbies'
      w='100%'
      flexDir='column'
      alignItems='center'
      justifyContent='center'
      mt={{ base: '3rem', md: '9rem' }}
    >
      <Text mb={{ base: '1rem', md: '1.5rem' }} color='pink1' textStyle='h4-primary' fontWeight={700}>
        Personal Hobbies
      </Text>
      <Grid
        w='100%'
        gridTemplateColumns={{
          base: 'repeat(1,1fr)',
          md: 'repeat(2,1fr)',
        }}
        gap='1.5rem'
        flexDir={{ base: 'column', md: 'row' }}
      >
        {HOBBIES_LIST.map(hobby => (
          <HobbyCard key={hobby.title} {...hobby} />
        ))}
      </Grid>
    </Flex>
  );
};

export default Hobbies;

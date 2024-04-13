import { Flex, Grid, Text } from '@chakra-ui/react';
import React from 'react';
import ServiceCard from './ServiceCard';
import { SERVICES_LIST } from '@/constants/services';

const Services = () => {
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
        Digital Services
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
        {SERVICES_LIST.map(service => (
          <ServiceCard key={service.name} {...service} />
        ))}
      </Grid>
    </Flex>
  );
};

export default Services;

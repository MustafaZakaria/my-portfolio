import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';

interface ServiceCardProps {
  name: string;
  Icon: IconType;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ name, description, Icon }) => {
  return (
    <Flex
      flexDir='column'
      w='100%'
      p='2rem'
      borderRadius='1rem'
      backgroundColor='primary4'
      alignItems='center'
      justifyContent='center'
    >
      <Icon size={32} />
      <Text textStyle='h6-primary' mt='0.5rem' fontWeight={700} color='neutral1'>
        {name}
      </Text>
      <Text textAlign='center' mt='0.5rem'>
        {description}
      </Text>
    </Flex>
  );
};

export default ServiceCard;

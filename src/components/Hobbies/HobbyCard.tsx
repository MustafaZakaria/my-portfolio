import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';

interface HobbyCardProps {
  Icon: IconType;
  title: string;
  description: string;
}
const HobbyCard: React.FC<HobbyCardProps> = ({ Icon, title, description }) => {
  return (
    <Flex w='100%' alignItems='center' justifyContent='center'>
      <Flex alignItems='center' gap='1rem'>
        <Icon color='white' size={64} />
        <Flex flexDir='column'>
          <Text textStyle='h6-primary' color='neutral1' fontWeight={700}>
            {title}
          </Text>
          <Text textStyle='body-14' color='neutral1' maxW='16.1875rem'>
            {description}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HobbyCard;

import { Flex, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { FaRegBookmark } from 'react-icons/fa';

interface ExperienceCardProps {
  date: string;
  title: string;
  description: string;
  Icon: IconType;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ date, title, Icon, description, index }) => {
  return (
    <Flex
      position='relative'
      flexDir='column'
      bg='primary4'
      w='100%'
      maxW='26rem'
      minH='8rem'
      borderRadius='.25rem'
      p={{ base: '1rem', md: '2rem' }}
      gap='0.5rem'
    >
      <Flex flexDir='column'>
        <Flex width='100%' justifyContent='space-between' alignItems='center'>
          <Text color='neutral1' textStyle='h6-primary' fontWeight={700}>
            {title}
          </Text>
          <Flex
            p='0.3rem'
            minW='3.625rem'
            bgColor='primary5'
            alignItems='center'
            justifyContent='center'
            borderRadius='.625rem'
            height='100%'
            maxH='1.25rem'
          >
            <Text color='primary1' textStyle='body-14' fontStyle='italic'>
              {date}
            </Text>
          </Flex>
        </Flex>
        <Text mt='.25rem' color='neutral1' textStyle='body-14'>
          {description}
        </Text>
      </Flex>

      <Flex
        display={{ base: 'none', md: 'flex' }}
        zIndex='9'
        alignItems='center'
        justifyContent='center'
        width='2.5rem'
        height='2.5rem'
        borderRadius='100%'
        backgroundColor='purple1'
        position='absolute'
        top='50%'
        bottom='0'
        left={index % 2 === 0 ? '100%' : 0}
        transform={index % 2 === 0 ? 'translate(30%,-50%)' : 'translate(-130%,-50%)'}
      >
        <FaRegBookmark size={24} color='white' />
      </Flex>
    </Flex>
  );
};

export default ExperienceCard;

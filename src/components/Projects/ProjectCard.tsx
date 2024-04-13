import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

interface ProjectCardProps {
  name: string;
  image: {
    src: string;
    desktopWidth: number;
    desktopHeight: number;
    alt: string;
  };
  description: string;
  date: string;
  noOfPeople: string;
  technologies: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({ name, image, description, date, noOfPeople, technologies }) => {
  return (
    <Flex w='100%' maxW={image.desktopWidth} borderRadius='1rem' bgColor='primary4' overflow='hidden'>
      <Flex flexDir='column'>
        <Image
          src={image.src}
          width={image.desktopWidth}
          height={image.desktopHeight}
          alt={image.alt}
          style={{ borderRadius: '1rem 1rem 0 0' }}
        />
        <Flex h='100%' flexDir='column' p='1rem'>
          <Text textStyle='h7-primary' color='primary1' fontWeight={700}>
            {name}
          </Text>
          <Text mt='0.5rem' color='primary1' textStyle='body-14' dangerouslySetInnerHTML={{ __html: description }} />
          <Text mt='1rem' color='primary1' textStyle='body-14' fontStyle='italic'>
            Technologies
          </Text>
          <Text color='primary1' textStyle='body-14'>
            {technologies}
          </Text>
          <Flex height='100%' mt='.5rem' justifyContent='space-between' w='100%' alignItems='flex-end'>
            <Flex
              p='0.3rem'
              minW='5.625rem'
              bgColor='primary5'
              alignItems='center'
              justifyContent='center'
              borderRadius='.625rem'
              height='100%'
              maxH='1.25rem'
            >
              <Text color='primary1' textStyle='body-14' fontStyle='italic'>
                {noOfPeople}
              </Text>
            </Flex>
            <Flex
              maxH='1.25rem'
              minW='5.625rem'
              bgColor='primary5'
              alignItems='center'
              justifyContent='center'
              borderRadius='1.5rem'
              height='100%'
            >
              <Text fontStyle='italic' color='primary1' textStyle='body-14'>
                {date}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProjectCard;

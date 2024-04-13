import React, { useState } from 'react';
import { Flex, Text, Button } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';
import { PROJECTS_LIST } from '@/constants/projects';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(PROJECTS_LIST.slice(0, 4));

  const handleShowMore = () => {
    const newVisibleProjects = PROJECTS_LIST.slice(0, visibleProjects.length + 4);
    setVisibleProjects(newVisibleProjects);
  };

  const handleShowLess = () => {
    setVisibleProjects(PROJECTS_LIST.slice(0, 4));
  };

  return (
    <Flex
      id='projects'
      w='100%'
      flexDir='column'
      alignItems='center'
      justifyContent='center'
      mt={{ base: '3rem', md: '9rem' }}
    >
      <Text mb={{ base: '1rem', md: '1.5rem' }} color='pink1' textStyle='h4-primary' fontWeight={700}>
        Projects & Works
      </Text>
      <Flex flexWrap='wrap' w='100%' gap='1.5rem'>
        {visibleProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Flex>
      {visibleProjects.length <= 4 && (
        <Flex mt='1rem'>
          <Button onClick={handleShowMore} colorScheme='pink' mr='1rem'>
            Show More
          </Button>
        </Flex>
      )}
      {visibleProjects.length > 4 && (
        <Button mt='1rem' onClick={handleShowLess} colorScheme='pink'>
          Show Less
        </Button>
      )}
    </Flex>
  );
};

export default Projects;

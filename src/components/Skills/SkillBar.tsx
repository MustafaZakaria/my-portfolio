import React from 'react';
import { Box, Text, Progress, Flex } from '@chakra-ui/react';

const SkillBar = ({ name, level }: { name: string; level: string }) => {
  let value;
  switch (level) {
    case 'Expert':
      value = 100;
      break;
    case 'Advanced':
      value = 75;
      break;
    case 'Medium':
      value = 50;
      break;
    default:
      value = 25;
  }

  return (
    <Box mb='1rem'>
      <Flex justifyContent='space-between'>
        <Text textStyle='body-16-bold' color='primary1' mb='0.5rem'>
          {name}
        </Text>
        <Text textStyle='caption-12-bold' fontStyle='italic' color='primary1'>
          {level}
        </Text>
      </Flex>
      <Progress value={value} size='sm' colorScheme='pink' />
    </Box>
  );
};

export default SkillBar;

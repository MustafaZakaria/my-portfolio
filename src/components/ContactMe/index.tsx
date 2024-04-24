import { Button, Flex, Text } from '@chakra-ui/react';

const emailAddress = 'mustafazakaria365@gmail.com';
const ContactMe = () => {
  return (
    <Flex
      id='contact'
      borderRadius='.5rem'
      minH='25rem'
      mt={{ base: '3rem', md: '5rem' }}
      backgroundImage='https://tinyurl.com/4d686huw'
      bgSize='cover'
      w='100%'
    >
      <Flex w='100%' p={{ base: '1rem', md: '2rem' }} flexDir='column'>
        <Text textStyle='h3-primary' color='primary2' fontWeight={700}>
          Got a new project idea?
        </Text>
        <Text textStyle='h6-primary' color='primary2' mt='1rem' fontWeight={700}>
          Don&apos;t hesitate to contact me!
        </Text>
        <Flex marginTop='auto' ml='auto'>
          <Button as='a' href={`mailto:${emailAddress}`} colorScheme='pink'>
            Send Email
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ContactMe;
